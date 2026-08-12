# Plano: tornar a checagem de freshness semântica

Escopo definido pelo usuário: `scripts/check_slides_freshness.py` decide
`stale` sem nunca ler o slide. Este plano decide **onde** a avaliação
semântica entra no pipeline e **como** ela vira responsabilidade verificável,
sem remover o piso determinístico existente. Nada é implementado aqui.

## Contexto levantado

### O script nunca abre o slide (confirmado)

Todas as chamadas de leitura/escrita em `scripts/check_slides_freshness.py`:

| Linha | Chamada | Alvo |
| --- | --- | --- |
| 79 | `open(path)` | arquivo-fonte (contagem de linhas, `count_file_lines`) |
| 114, 116 | `os.path.isfile` / `open(path)` | arquivo-fonte (`read_relevant_text`) |
| 163 | `open(source_path).read()` ×2 | arquivo-fonte (working tree, em `compute_diff_content`) |
| 181, 183 | `os.path.isfile` / `open(path)` | `decks/.freshness-state.json` (`load_state`) |
| 198 | `open(path, "w")` | `decks/.freshness-state.json` (`save_state`) |
| 204, 206 | `os.path.isfile` / `open(path)` | manifesto (`load_manifest`) |
| 344 | `os.path.isfile(src_path)` | arquivo-fonte (`sources_changed`) |
| 529, 535 | `open(..., "w")` | `.freshness-report.json` / `.freshness-summary.md` |

`content_md` aparece em 455 (lido do manifesto), 494 (guardado no relatório),
505 (repassado), 258/264, e só é **consumido como string** em
`build_issue_body` (298, 311, 313) e em `os.path.dirname(content_md)` para
montar o comando `node build.js --deck ...` (315). **Nenhum `open(content_md)`
existe.** O texto do slide nunca entra na decisão nem no corpo da issue.

### O que o script realmente compara

- `sources_changed` (323–361): para cada fonte, `git diff last_commit
  current_commit -- <source_path>` (349); se vazio, pula.
- `compute_diff_content` (126–173): conta linhas alteradas (148) e aciona
  fallback quando `changed_lines > 200` **ou** `> 40%` das linhas do arquivo
  (150). Com `fallback` **ou sem `source_headings`** (153) retorna o **texto
  atual inteiro do arquivo** — não um diff. Com headings, retorna
  `"Seção anterior:\n…\n\nSeção atual:\n…"` (173) ou `""` se a seção não mudou
  (169–171).
- `build_issue_body` (295–316) trunca esse conteúdo em `diff_text[:4000]`
  (304).

### Reprodução empírica das duas falhas (feita neste levantamento)

Cópia do repo em `/tmp`, commit sintético acrescentando
`"GitHub Copilot agora suporta Java e Python."` ao fim de
`github-docs/content/copilot/get-started/features.md`:

1. **Falso positivo com fan-out** — `stale_count: 2`
   (`copilot-training/why-adopt` e `copilot-training/where-copilot-appears`),
   porque as duas apontam para o mesmo arquivo. Uma edição upstream vira duas
   issues.
2. **Payload inútil** — sem `source_headings`, `diff_text` tem 8364 chars (o
   arquivo inteiro); a frase alterada está na posição 8349, ou seja **fora dos
   4000 chars** colados na issue (304). O agente recebe uma cópia truncada da
   fonte, sem marcação do que mudou e sem o texto do slide: a comparação
   semântica pedida em 311 é literalmente impossível com o que chega até ele.
3. **Falso negativo silencioso** — com `source_headings` declarado
   (`["Assistive features"]` ou `["Copilot Chat"]`), a mesma mudança devolve
   `changed=False`, `diff_text=""` → nenhuma issue, nenhum registro.

### Onde a avaliação semântica está delegada hoje

- `build_issue_body` (309–315) instrui o agente em texto livre. **Não há
  verificação** de que ele leu `content_md`, nem formato de resposta exigido.
- `create_or_update_issue` (255–292): `--assignee` só é aplicado na
  **criação** (282–283); quando a issue já existe, o script apenas **comenta**
  (271). O espelho da doc oficial diz, em
  `github-docs/content/copilot/how-tos/copilot-on-github/use-copilot-agents/kick-off-a-task.md:19`:
  *"Copilot receives the issue title, description, and existing comments at
  assignment time. It does not see comments added after assignment"* → **toda
  atualização de uma issue já aberta é invisível ao agente atribuído**.
- `--copilot-assignee` vem do secret `COPILOT_ASSIGNEE`
  (`.github/workflows/check-slides-freshness.yml:25,52`). Se o secret estiver
  vazio, a issue nasce sem responsável e mesmo assim o estado vira `pending`
  (511) — no-op silencioso.
- O ciclo `pending → ok/stale` documentado em 16–17 **não está implementado**:
  `check-slides-freshness.yml` é o único workflow com `issues: write` e não
  escuta eventos `issues`/`pull_request`; `last_pr_number` só é inicializado
  como `None` (480). Em 482–488, `pending` nunca volta para `ok`. Ou seja: a
  parte (B) do fluxo hoje é **prosa na issue**, não um mecanismo.
- Precedente real: a issue #4 (formato legado) recebeu 4 comentários
  automáticos idênticos e foi fechada manualmente como `not_planned`; nenhuma
  issue no formato novo (`Slide desatualizado: {slide_id}`) foi aberta ainda.

### Custo dos falsos negativos por `source_headings` (medido)

`decks/.freshness-manifest.generated.yml`: 7 entradas, **0 declaram
`source_headings`** (13 blocos em `decks/copilot-training/content.md`, 7 com
`source`). 5 arquivos-fonte distintos; `features.md` e `best-practices.md`
servem 2 slides cada. Conclusão que **inverte a premissa do enunciado**: hoje
o risco dominante não é o falso negativo do filtro por heading (ninguém usa o
filtro) — é o falso positivo do modo "arquivo inteiro", que é o caminho de
100% dos slides. O falso negativo é o risco **futuro**, que aparece assim que
alguém adotar `source_headings` para reduzir o ruído — é uma armadilha, não um
problema atual.

### Múltiplas fontes e VS Code docs

- `source` já aceita lista (450) e o estado guarda lista (472); o manifesto já
  tem um caso real com 2 fontes (`copilot-training/custom-instructions`).
- **Mas** `source_headings` é único por slide e é repassado igual para **cada**
  fonte no loop (343–356): não existe heading por fonte. Um slide que cite uma
  seção do `github-docs/` e outra do `vscode-docs/` não tem como declarar
  escopo diferente para cada uma.
- `vscode-docs/` tem 65 `.md` sincronizados e o workflow já dispara em
  `workflow_run` da "Atualizar documentação do VS Code"
  (`check-slides-freshness.yml:7-11`), mas **nenhum slide** referencia
  `vscode-docs/...`. O caminho existe e nunca foi exercitado.

### Restrições de ambiente

- Job de freshness só tem Python 3.12 + `requirements.txt` (`requests`,
  `pyyaml`) — **sem Node** (`check-slides-freshness.yml:32-37`).
- `github-docs/content/github-models/index.md:3`: *"As of July 30, 2026,
  GitHub Models has been fully retired… the inference API… no longer
  available"* → não há inferência gratuita via `GITHUB_TOKEN`.
- O repositório é de conta pessoal, então o billing de org com
  `copilot-requests: write` descrito em
  `github-docs/content/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows.md`
  não se aplica: qualquer provedor exige um secret novo.
- `scripts/register_deck_freshness.py:13` importa `combined_hash`,
  `digest_sources`, `save_json` — funções que **não existem mais** em
  `check_slides_freshness.py`. O script está morto (`ImportError` na primeira
  linha executável) e usa o `deck-sources.yml` descontinuado.

## Decisão sobre (A) vs (B)

**Escolha: (C) — híbrida, com as duas metades obrigatórias.** Nem (A) nem (B)
puras resolvem:

- **(B) pura não fecha o buraco**: o mecanismo em que ela se apoia (comentar
  na issue existente) é documentado como invisível ao agente atribuído
  (`kick-off-a-task.md:19`), o payload não contém o slide nem o trecho
  alterado (medido acima: mudança na posição 8349, corte em 4000), e não
  existe hoje nenhum gancho de CI capaz de aceitar/rejeitar o veredito
  (`pending → ok` não implementado). "Formalizar" sem consertar o payload é
  formalizar uma instrução que não pode ser cumprida.
- **(A) pura é perigosa sozinha**: seu efeito colateral é *não abrir a issue*,
  e um "não diverge" errado vira falso negativo invisível — exatamente o
  defeito que o plano quer eliminar. Só é aceitável se cada veredito for
  registrado, auditável e **fail-open**.

Portanto: **(A) como gate barato e fail-open antes da issue** + **(B) como
contrato verificável depois da atribuição**, com o diff determinístico
intocado como gatilho. A sugestão do enunciado de aplicar (A) só aos slides
sem `source_headings` é hoje um no-op (0/7 declaram headings, logo "só sem
headings" = todos); a segmentação útil é por **par (slide, fonte)** com cache,
não por presença de heading.

## Ordem de execução

- **Fase 1** é pré-requisito de todas as outras (é ela que faz o texto do
  slide existir no pipeline).
- **Fase 2** e **Fase 4** são independentes entre si e podem ser paralelas
  depois da Fase 1 — Fase 2 é o lado (A), Fase 4 é o lado (B).
- **Fase 3** depende da Fase 2 (só liga provedor depois do contrato existir).
- **Fase 5** depende da Fase 1 e pode rodar em paralelo com 3 e 4.
- **Fase 6** é a última (documenta o que as anteriores decidiram).

---

## Fase 1 — Fazer o checker enxergar o slide

**Objetivo**: `content_md` deixa de ser string decorativa; o texto do bloco do
slide passa a existir no relatório e no corpo da issue. Nenhuma decisão muda
de valor nesta fase (mesmo conjunto de `stale`).

1. Adicionar em `check_slides_freshness.py` um leitor de blocos de
   `content.md` que devolva o bloco cujo `slide_id` bate: separar por `---`,
   ler o front matter com `yaml.safe_load` (o `pyyaml` já é dependência) e
   devolver front matter + corpo bruto. **Decisão**: implementar em Python, e
   não chamar `node scripts/parse_content.js`, porque o job de freshness não
   instala Node (`check-slides-freshness.yml:32-37`) — o custo é uma segunda
   implementação da divisão de blocos, mitigado pelo guard-rail do passo 5.
2. Tratar como erro registrado em `report["errors"]` (não exceção) os casos:
   `content_md` inexistente, `slide_id` ausente no arquivo, front matter
   inválido. Nesses casos o comportamento antigo é mantido (issue aberta sem o
   texto do slide) — a fase não pode introduzir uma forma nova de bloquear a
   checagem.
3. Trocar o conteúdo colado na issue por três blocos identificados, em vez de
   um `diff_text` anônimo: (a) **texto atual do slide**, (b) **diff unificado
   real** da fonte (`git diff`, já disponível em `git_diff_file`), (c) trecho
   da fonte para contexto. Aplicar o limite de caracteres **por bloco**, com
   marcador explícito de truncamento — hoje o corte único de 4000 (304)
   descarta justamente o fim do arquivo, onde a mudança costuma estar.
4. Incluir `slide_text_found: true|false` e `source_change_kind:
   diff|section|fulltext` por slide no `.freshness-report.json`, para que a
   Fase 2 tenha linha de base mensurável.
5. Adicionar um guard-rail de divergência entre os dois parsers: um passo de
   CI em `build-decks.yml` que compara a lista de `slide_id` vista pelo parser
   Python com a vista por `scripts/parse_content.js` e falha se divergirem.

**Arquivos**: [scripts/check_slides_freshness.py](../../scripts/check_slides_freshness.py),
[.github/workflows/build-decks.yml](../../.github/workflows/build-decks.yml).

**Verificação**:
```bash
git fetch --unshallow origin           # repo vem shallow; sem isso não há histórico p/ diff
cp -r . /tmp/fresh-f1 && cd /tmp/fresh-f1

# 1) caso "nada mudou": exit 0 e nenhum stale
python3 scripts/check_slides_freshness.py \
  --manifest decks/.freshness-manifest.generated.yml \
  --state decks/.freshness-state.json \
  --report-json /tmp/f1-report.json ; echo "exit=$?"

# 2) caso "fonte mudou": forjar commit e reapontar a baseline p/ HEAD~1
printf '\n## Suporte a linguagens\n\nSuporta Java e Python.\n' \
  >> github-docs/content/copilot/get-started/features.md
git -c commit.gpgsign=false -c user.email=t@t -c user.name=t commit -aqm test
python3 - "$(git rev-parse HEAD~1)" <<'PY'
import json,sys; p="decks/.freshness-state.json"; d=json.load(open(p))
for k in d["slides"]: d["slides"][k]["last_checked_docs_commit"]=sys.argv[1]
json.dump(d,open(p,"w"),indent=2)
PY
python3 scripts/check_slides_freshness.py \
  --manifest decks/.freshness-manifest.generated.yml \
  --state decks/.freshness-state.json \
  --report-json /tmp/f1-report.json ; echo "exit=$?"   # espera-se 2
```
- Confirmar em `/tmp/f1-report.json` que os 2 slides esperados aparecem com
  `slide_text_found: true`.
- Imprimir o corpo da issue sem `--gh-repo` (chamar `build_issue_body` via
  `python3 -c`) e confirmar que **a frase "Suporta Java e Python" aparece** no
  corpo — hoje ela cai fora do corte de 4000 chars.
- Apagar um `slide_id` do `content.md` de teste e confirmar que o erro entra
  em `report["errors"]` e o exit code continua 2 (não 1).
- `node build.js --deck decks/copilot-training --check-only` continua passando.

---

## Fase 2 — Contrato do avaliador semântico, sem provedor *(depende da Fase 1)*

**Objetivo**: existir uma interface de avaliação semântica com veredito
estruturado, cache e comportamento *fail-open*, **desligada por padrão** —
sem nenhuma chamada de rede ainda.

1. Criar `scripts/semantic_freshness.py` com uma função única que recebe
   `(slide_id, slide_text, source_path, source_diff, source_text)` e devolve
   um veredito com campos fixos: `verdict` (`divergent` | `not_divergent` |
   `unknown`), `confidence`, `slide_excerpt`, `source_excerpt`, `rationale`,
   `provider`, `model`. `slide_excerpt` e `source_excerpt` são
   **obrigatórios** quando `verdict != unknown`; veredito sem os dois trechos
   é rebaixado para `unknown`.
2. Definir três provedores selecionáveis por `--semantic-provider`:
   `none` (padrão, sempre `unknown`), `command` (executa um binário/script
   configurável, recebe o payload em stdin e devolve JSON em stdout) e `http`
   (endpoint compatível com Chat Completions, chave por variável de
   ambiente). O `command` existe para permitir teste local e engine de agente
   sem acoplar o script a um SDK.
3. Regras de segurança do gate, no `main` de `check_slides_freshness.py`:
   - `divergent` → abre issue (comportamento atual).
   - `unknown` (provedor `none`, timeout, erro, JSON inválido, veredito sem
     trechos) → **abre issue** (*fail-open*). O gate nunca pode transformar
     indisponibilidade em silêncio.
   - `not_divergent` → **não** abre issue, mas grava no estado
     `last_decision: "suppressed"` com o veredito completo e avança
     `last_checked_docs_commit`; o slide entra numa seção própria do
     `.freshness-summary.md`.
4. Cache por par (slide, fonte): chave = hash de `slide_text` + hash do trecho
   da fonte + `slide_id`. Reexecuções com o mesmo par não repetem a chamada.
   Guardar a chave junto do veredito no estado.
5. Orçamento explícito: `--semantic-max-calls` (padrão baixo, ex. o número de
   slides do manifesto) e timeout por chamada; estourado o orçamento, os
   slides restantes viram `unknown` (→ issue).
6. Não tocar em `compute_diff_content`, `extract_heading_sections` nem nos
   limiares 200 linhas / 40% (150). O gate só roda **depois** de o
   determinístico já ter dito "mudou".
7. `state_version` sobe para 2 (novo campo de veredito e novo valor
   `suppressed`), com leitura tolerante da versão 1 — `load_state` (185–192)
   hoje aborta com exit 1 em versão diferente.

**Arquivos**: `scripts/semantic_freshness.py` (novo),
[scripts/check_slides_freshness.py](../../scripts/check_slides_freshness.py),
[decks/.freshness-state.json](../../decks/.freshness-state.json).

**Verificação**:
```bash
cd /tmp/fresh-f1   # cenário da Fase 1, com 2 slides stale

# A) provedor 'none' deve ser byte-idêntico à Fase 1
python3 scripts/check_slides_freshness.py --semantic-provider none \
  --manifest decks/.freshness-manifest.generated.yml \
  --state /tmp/s-none.json --report-json /tmp/r-none.json ; echo "exit=$?"
diff <(jq '.stale_slides' /tmp/f1-report.json) <(jq '.stale_slides' /tmp/r-none.json)

# B) provedor 'command' falso, sempre not_divergent
cat > /tmp/fake-ok.sh <<'SH'
#!/bin/sh
cat > /dev/null
echo '{"verdict":"not_divergent","confidence":0.9,"slide_excerpt":"x","source_excerpt":"y","rationale":"teste"}'
SH
chmod +x /tmp/fake-ok.sh
python3 scripts/check_slides_freshness.py --semantic-provider command \
  --semantic-command /tmp/fake-ok.sh \
  --manifest decks/.freshness-manifest.generated.yml \
  --state /tmp/s-sup.json --report-json /tmp/r-sup.json ; echo "exit=$?"  # espera 0
jq '.suppressed_slides, .stale_slides' /tmp/r-sup.json
jq '.slides[].last_decision' /tmp/s-sup.json | sort | uniq -c   # espera 'suppressed'

# C) fail-open: provedor que quebra deve voltar a abrir issue
printf '#!/bin/sh\nexit 1\n' > /tmp/fake-bad.sh && chmod +x /tmp/fake-bad.sh
python3 scripts/check_slides_freshness.py --semantic-provider command \
  --semantic-command /tmp/fake-bad.sh \
  --manifest decks/.freshness-manifest.generated.yml \
  --state /tmp/s-bad.json --report-json /tmp/r-bad.json ; echo "exit=$?"  # espera 2

# D) veredito sem trechos deve ser rebaixado a unknown (→ exit 2)
printf '#!/bin/sh\ncat >/dev/null\necho {\\"verdict\\":\\"not_divergent\\"}\n' \
  > /tmp/fake-thin.sh && chmod +x /tmp/fake-thin.sh
python3 scripts/check_slides_freshness.py --semantic-provider command \
  --semantic-command /tmp/fake-thin.sh --state /tmp/s-thin.json \
  --manifest decks/.freshness-manifest.generated.yml ; echo "exit=$?"  # espera 2

# E) estado v1 antigo continua sendo lido
python3 scripts/check_slides_freshness.py --semantic-provider none \
  --manifest decks/.freshness-manifest.generated.yml \
  --state decks/.freshness-state.json ; echo "exit=$?"   # não pode ser 1
```
- Rodar duas vezes seguidas com o mesmo par e confirmar, pelo contador do
  relatório, que a segunda execução usou cache (0 chamadas).

---

## Fase 3 — Ligar um provedor real no workflow *(depende da Fase 2)*

**Objetivo**: o gate passa a rodar no CI com um modelo de verdade, sem
transformar a checagem em algo que depende de credencial para funcionar.

1. Registrar a restrição: GitHub Models está aposentado
   (`github-docs/content/github-models/index.md:3`) e o repo é de conta
   pessoal, logo não há billing de org via `copilot-requests: write`. Qualquer
   provedor exige um secret novo.
2. Ordem de preferência a avaliar na implementação: (i) engine de agente via
   provedor `command` (Copilot CLI / `gh aw`, autenticado por PAT em
   `COPILOT_GITHUB_TOKEN`) — mantém tudo dentro do ecossistema já usado pelo
   repo; (ii) provedor `http` com chave de terceiro em `LLM_API_KEY`.
   Registrar a escolha final como comentário no workflow.
3. Em `check-slides-freshness.yml`, passar `--semantic-provider` a partir de
   uma variável do repositório, com **padrão `none`**. Sem secret configurado,
   o workflow se comporta exatamente como hoje.
4. Publicar no `$GITHUB_STEP_SUMMARY` uma tabela por slide: veredito, trechos
   citados, provedor e se veio do cache — o gate precisa ser auditável sem
   abrir o JSON.
5. Manter `continue-on-error` fora disso: falha do provedor já é *fail-open*
   dentro do script (Fase 2), então o passo não pode ser marcado como
   opcional; um exit 1 continua significando erro de configuração real.
6. Confirmar que `decks/.freshness-report.json` e `.freshness-summary.md`
   seguem ignorados (`.gitignore`) e que o commit automático continua levando
   só `decks/.freshness-state.json` (`check-slides-freshness.yml:67-74`) —
   agora com os vereditos dentro dele.

**Arquivos**: [.github/workflows/check-slides-freshness.yml](../../.github/workflows/check-slides-freshness.yml),
[scripts/check_slides_freshness.py](../../scripts/check_slides_freshness.py).

**Verificação**:
- `workflow_dispatch` com a variável ausente: comparar o
  `.freshness-state.json` resultante com o anterior — deve ser idêntico ao
  comportamento pré-Fase 3.
- Reapontar manualmente, num branch de teste, `last_checked_docs_commit` de um
  slide para um commit antigo de `github-docs/`, disparar o workflow e conferir
  no step summary: veredito preenchido, com os dois trechos citados.
- Revogar/renomear o secret e disparar de novo: o step summary deve mostrar
  `unknown` e a issue deve ser aberta (fail-open comprovado).
- Conferir o custo real: número de chamadas do run ≤ `--semantic-max-calls`.

---

## Fase 4 — Contrato verificável do agente (lado B) *(depende da Fase 1)*

**Objetivo**: o que hoje é instrução em prosa (311–315) vira um formato de
resposta exigido, com fechamento de ciclo de estado no CI.

1. Reescrever `build_issue_body` para incluir, além dos três blocos da Fase 1,
   um **formato de resposta obrigatório**: um comentário contendo
   `Veredito: afeta | não afeta`, `Trecho do slide: …`, `Trecho da fonte: …`.
   Uma issue só pode ser fechada como "não afeta" com esse comentário.
2. Corrigir o caminho de atualização de issue existente
   (`create_or_update_issue`, 270–272): comentário pós-atribuição **não chega**
   ao agente (`kick-off-a-task.md:19`). Escolher e registrar uma das duas
   saídas: (a) reatribuir o assignee ao comentar, forçando nova sessão; ou (b)
   fechar a issue antiga e abrir uma nova com o payload atualizado. Manter o
   `find_issue_by_title` como deduplicador em qualquer caso.
3. Tratar `--copilot-assignee` vazio como condição de aviso: hoje o estado vira
   `pending` (511) mesmo sem ninguém atribuído. Sem assignee, o estado deve
   permanecer `stale` e o fato entrar em `report["errors"]`.
4. Criar workflow novo (`freshness-verdict.yml`) escutando `issues`
   (`closed`, `reopened`) e `pull_request` (`closed`) e restrito ao label
   `slide-stale`, que: valida o formato do passo 1 no comentário de
   fechamento; em caso válido, escreve `pending → ok` no
   `.freshness-state.json` e registra `last_pr_number` quando houver PR; em
   caso inválido, reabre a issue com um comentário explicando o critério; e
   `pending → stale` quando o PR fecha sem merge. É este workflow que faz as
   transições prometidas nas linhas 16–17 e nunca implementadas.
5. Garantir exclusão mútua de escrita no estado entre este workflow e o de
   checagem (mesmo `concurrency.group: freshness-check` já usado em
   `check-slides-freshness.yml:21-23`) e rebase antes do push.

**Arquivos**: [scripts/check_slides_freshness.py](../../scripts/check_slides_freshness.py),
`.github/workflows/freshness-verdict.yml` (novo),
[decks/.freshness-state.json](../../decks/.freshness-state.json).

**Verificação**:
- Num branch de teste, abrir manualmente uma issue com o label `slide-stale` e
  título `Slide desatualizado: copilot-training/why-adopt`; fechá-la **sem** o
  formato → o workflow deve reabrir com o comentário de critério.
- Fechar de novo **com** o formato completo → estado do slide vira `ok` e o
  commit `ci: atualiza freshness state` aparece.
- Rodar o checker com `--copilot-assignee ""` e confirmar que o estado
  permanece `stale` e o aviso está em `report["errors"]`.
- Simular segunda detecção no mesmo slide e confirmar que o agente recebe o
  payload novo (issue reatribuída ou recriada, conforme a decisão do passo 2).

---

## Fase 5 — Escopo por fonte e múltiplas fontes *(depende da Fase 1)*

**Objetivo**: permitir heading por fonte e exercitar de ponta a ponta um slide
que cite `github-docs/` e `vscode-docs/` ao mesmo tempo.

1. Estender o front matter de `content.md` com uma forma alternativa e
   **aditiva** de declarar fontes, em que cada item tem caminho e headings
   próprios; manter `source` + `source_headings` (formato atual) aceitos e com
   o mesmo significado. Validar em `scripts/parse_content.js` (a regra
   existente de 145–148, "`source_headings` exige `source`", precisa valer
   também na forma nova).
2. Propagar em `build.js` (`updateFreshnessManifest`, 193–244) para o
   manifesto, subindo `manifest_version` para 2 e mantendo o leitor do checker
   tolerante à versão 1 (`load_manifest`, 208–211, hoje rejeita qualquer coisa
   diferente de 1).
3. No checker, deixar de repassar o mesmo `source_headings` para todas as
   fontes (343–356): headings passam a ser resolvidos por fonte.
4. Avaliação semântica passa a ser **por par (slide, fonte)**; o veredito final
   do slide é `divergent` se **qualquer** par for `divergent`, e só é
   `not_divergent` se **todos** os pares forem `not_divergent` (qualquer
   `unknown` domina e abre issue).
5. Registrar no corpo da issue de qual fonte veio cada bloco, já que
   `vscode-docs/` e `github-docs/` têm convenções de heading diferentes.
6. Exercitar o caminho VS Code: acrescentar `vscode-docs/...` como segunda
   fonte de um slide real do deck (ex. o slide de instruções customizadas, que
   já é multi-fonte) — o caminho existe desde
   `check-slides-freshness.yml:7-11` e nunca foi usado.

**Arquivos**: [scripts/parse_content.js](../../scripts/parse_content.js),
[build.js](../../build.js), [scripts/check_slides_freshness.py](../../scripts/check_slides_freshness.py),
[decks/copilot-training/content.md](../../decks/copilot-training/content.md),
[decks/.freshness-manifest.generated.yml](../../decks/.freshness-manifest.generated.yml).

**Verificação**:
```bash
node build.js --deck decks/copilot-training
git diff decks/.freshness-manifest.generated.yml    # entrada multi-fonte com headings próprios
node build.js --deck decks/copilot-training --check-only   # exit 0

# fonte VS Code muda, fonte GitHub não: só o slide certo pode ficar stale
cp -r . /tmp/fresh-f5 && cd /tmp/fresh-f5
printf '\nTexto novo de teste.\n' >> vscode-docs/agent-customization/custom-instructions.md
git -c commit.gpgsign=false -c user.email=t@t -c user.name=t commit -aqm test
python3 - "$(git rev-parse HEAD~1)" <<'PY'
import json,sys; p="decks/.freshness-state.json"; d=json.load(open(p))
for k in d["slides"]: d["slides"][k]["last_checked_docs_commit"]=sys.argv[1]
json.dump(d,open(p,"w"),indent=2)
PY
python3 scripts/check_slides_freshness.py --semantic-provider none \
  --manifest decks/.freshness-manifest.generated.yml \
  --state decks/.freshness-state.json --report-json /tmp/f5.json
jq '.stale_slides' /tmp/f5.json     # só o slide que declara a fonte VS Code
```
- Repetir alterando uma seção **fora** dos headings declarados e confirmar que
  o resultado é registrado (não some silenciosamente): sem gate, `ok`; com
  gate ligado, veredito explícito no relatório.
- Rodar o checker com um manifesto `manifest_version: 1` antigo e confirmar
  que ainda funciona.

---

## Fase 6 — Documentação e limpeza de arestas

**Objetivo**: deixar registrado o modelo de duas camadas e remover o código
morto que confunde quem for implementar.

1. `README.md` (seções "Freshness por slide", 153–172, e "Verificação de
   desatualização dos slides", 284–301): descrever as duas camadas — piso
   determinístico (diff + headings + regra 200/40%) e camada semântica
   (gate opcional + veredito obrigatório do agente) — e documentar as flags
   `--semantic-*` e o valor `suppressed`.
2. `docs/PROJECT_STRUCTURE.md`: incluir `scripts/semantic_freshness.py` e o
   workflow `freshness-verdict.yml`.
3. Decidir o destino de `scripts/register_deck_freshness.py`, hoje quebrado
   (importa `combined_hash`/`digest_sources`/`save_json`, inexistentes —
   linha 13) e ligado ao `deck-sources.yml` descontinuado: remover, junto com
   a menção em `docs/PROJECT_STRUCTURE.md:25`. **Não** consertar: o registro
   de fontes já é feito pelo `build.js`.
4. Documentar explicitamente a restrição de não regressão: os limiares de 200
   linhas / 40% (`compute_diff_content:150`) e `extract_heading_sections`
   permanecem como piso barato; a camada semântica só decide **depois** deles.

**Arquivos**: [README.md](../../README.md),
[docs/PROJECT_STRUCTURE.md](../../docs/PROJECT_STRUCTURE.md),
`scripts/register_deck_freshness.py` (remoção),
[decks/deck-sources.yml](../../decks/deck-sources.yml).

**Verificação**:
- `grep -rn "register_deck_freshness" .` não retorna nada fora do histórico.
- `grep -rn "semantic" README.md docs/PROJECT_STRUCTURE.md` cobre flags,
  provedores e o valor `suppressed`.
- Seguir o README do zero num clone limpo (`git fetch --unshallow origin`,
  `pip install -r requirements.txt`, comando do checker) e confirmar que os
  comandos documentados rodam sem editar nada.

---

## Decisões registradas

- **Opção escolhida: (C) híbrida** — gate semântico *antes* da issue **e**
  veredito verificável do agente *depois* da atribuição. (A) sozinha cria
  falsos negativos invisíveis; (B) sozinha depende de um payload que hoje não
  contém o slide nem a mudança (medido: mudança na posição 8349, corte em
  4000).
- **O gate é fail-open e desligado por padrão** (`--semantic-provider none`).
  Timeout, erro, JSON inválido ou veredito sem trechos citados ⇒ `unknown` ⇒
  issue aberta. Indisponibilidade de IA nunca vira silêncio.
- **`not_divergent` não é descarte**: vira `last_decision: "suppressed"` com
  veredito completo no estado e uma seção própria no resumo — sempre
  auditável.
- **O piso determinístico não é removido**: `extract_heading_sections`,
  `compute_diff_content` e os limiares 200 linhas / 40% (150) continuam sendo
  o gatilho; a camada semântica só roda depois de eles dispararem.
- **A segmentação sugerida "(A) só para slides sem `source_headings`" é
  descartada**: 0 dos 7 slides do manifesto declaram headings, então o
  recorte é vazio na prática. O recorte adotado é por par (slide, fonte) com
  cache por hash.
- **Parser de blocos duplicado em Python** (em vez de chamar
  `parse_content.js`), porque o job de freshness não instala Node; a
  duplicação é contida por um teste de divergência de `slide_id` no CI.
- **Comentar em issue já atribuída não conta como notificar o agente**
  (`kick-off-a-task.md:19`); a Fase 4 troca isso por reatribuição ou nova
  issue.
- **Sem assignee, não há `pending`**: o estado permanece `stale` e o caso é
  reportado como erro, em vez do no-op silencioso de hoje (511).
- **`state_version` → 2 e `manifest_version` → 2**, ambos com leitura
  tolerante às versões 1 (hoje `load_state`/`load_manifest` abortam em
  qualquer versão diferente).
- **Provedor de IA exige secret novo**: GitHub Models foi aposentado em
  2026-07-30 e o repo é de conta pessoal (sem billing de org para o engine
  Copilot). Por isso o padrão é `none` e o pipeline nunca depende de
  credencial para continuar funcionando.
- **`scripts/register_deck_freshness.py` é removido**, não consertado: está
  quebrado desde a migração para o manifesto gerado e depende do
  `deck-sources.yml` descontinuado.
- **Nenhuma dependência nova de runtime**: o gate usa `requests` (já em
  `requirements.txt`) no provedor `http` e `subprocess` no provedor `command`.
