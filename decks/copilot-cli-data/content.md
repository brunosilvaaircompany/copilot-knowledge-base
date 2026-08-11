---
slide_id: copilot-cli-data/cover
template: cover
eyebrow: Treinamento de 60 minutos
title: GitHub Copilot CLI com dados
subtitle: "Exploração, notebooks, visualização, SQL e telemetria — com o terminal no centro."
meta: "pt-BR · data-with-copilot · Agosto 2026"
---

---
slide_id: copilot-cli-data/agenda
template: timeline
kicker: Roteiro
title: Uma hora, cinco movimentos
subtitle: O relógio orienta a demonstração; a validação decide o que entra no resultado.
items:
  - date: "00–03"
    title: "Alinhamento"
    desc: "Expectativas, responsabilidades e ambiente seguro."
  - date: "03–06"
    title: "Papel do CLI"
    desc: "Copilot conversa e propõe; as ferramentas executam."
  - date: "06–10"
    title: "Casos de uso"
    desc: "Dados, notebooks, gráficos, SQL e investigação."
  - date: "10–13"
    title: "Evidência"
    desc: "Revisão, validação e possível automação."
  - date: "13–15"
    title: "Transição"
    desc: "Do contexto para o laboratório no terminal."
---

---
slide_id: copilot-cli-data/preparation
template: icon_list
kicker: Antes do cronômetro
title: Preparação e ensaio
subtitle: Tudo que pode falhar deve ter um plano B antes de começar.
items:
  - icon: check
    text: "Repositório de teste ou Codespace separado; `git status` limpo e sem dados sensíveis."
  - icon: terminal
    text: "Copilot CLI instalado, versão conferida com `copilot version` e conta Copilot habilitada."
  - icon: code
    text: "Python, Jupyter, pandas, matplotlib e seaborn disponíveis no devcontainer."
  - icon: workflow
    text: "Docker em execução para o módulo 5; duas abas de terminal e um cronômetro visível."
  - icon: verified
    text: "Ensaiar 15 + 10 + 10 + 8 + 4 + 10 + 3 minutos; interromper uma etapa quando o tempo acabar."
source: github-docs/content/copilot/how-tos/copilot-cli/cli-getting-started.md
---

---
slide_id: copilot-cli-data/alignment
template: header_body
kicker: 00–03 min · alinhamento
title: O contrato da sessão
subtitle: IA acelera o trabalho; a pessoa responsável continua respondendo pelo resultado.
source: github-docs/content/copilot/concepts/agents/copilot-cli/about-copilot-cli.md
---
- **Copilot CLI**: entende o pedido, pergunta, planeja, escreve e sugere comandos no terminal.
- **Ferramentas determinísticas**: Python/pandas, Jupyter, matplotlib/seaborn, SQL e Docker fazem o processamento.
- **Analista**: fornece contexto, revisa o diff, executa, confere números e decide se a interpretação é defensável.
- **Ambiente**: use uma cópia de teste, Codespace ou devcontainer; nunca experimente a primeira vez em um projeto real.
- **Regra de ouro**: nenhuma alteração, comando destrutivo ou conclusão segue adiante sem aprovação e validação humana.

---
slide_id: copilot-cli-data/cli-role
template: comparison
kicker: 03–06 min · terminal nativo
title: Copilot CLI não é o executor dos dados
subtitle: A resposta pode ser plausível; o cálculo executado é a evidência.
bad_label: "Confundir"
bad_code: "Copilot disse que a receita é R$ 278 mil\nLogo, o número está correto."
good_label: "Separar papéis"
good_code: "Copilot gera o código\npandas executa o cálculo\nanalista revisa a saída"
source: github-docs/content/copilot/how-tos/copilot-cli/cli-getting-started.md
---

---
slide_id: copilot-cli-data/gh-vs-copilot
template: cards_2col
kicker: 03–06 min · nomenclatura
title: "`copilot` e `gh` têm escopos diferentes"
subtitle: Não trate uma autenticação como se fosse a outra.
cards:
  - icon: terminal
    title: "GitHub Copilot CLI"
    desc: "O comando `copilot` inicia o assistente, usa `/login`, `/user` e conversa com ferramentas aprovadas."
  - icon: workflow
    title: "GitHub CLI"
    desc: "O comando `gh` opera recursos do GitHub; `gh auth status` só verifica a sessão do gh."
  - icon: verified
    title: "Fallback documentado"
    desc: "O Copilot CLI pode usar o token do `gh` apenas como fallback, quando não há outra credencial."
  - icon: x
    title: "Não é automático"
    desc: "`gh` e `copilot` mantêm escopos, contas e prioridades de credencial que precisam ser conferidos."
source: github-docs/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli.md
---

---
slide_id: copilot-cli-data/authentication
template: terminal_demo
kicker: 03–06 min · acesso
title: Autenticar antes de demonstrar
subtitle: Prefira o fluxo interativo; em Codespaces ou SSH, force o device flow quando necessário.
code: |
  copilot login
  copilot login --device-code
  copilot login --host https://SUBDOMINIO.ghe.com

  # Dentro de uma sessão interativa
  copilot
  /login
  /user
  /user list
  /user switch
  /logout
source: github-docs/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli.md
---

---
slide_id: copilot-cli-data/use-cases
template: icon_list
kicker: 06–10 min · casos de uso
title: Onde o terminal ajuda quem trabalha com dados
subtitle: O prompt é a interface; o repositório e as ferramentas são o contexto operacional.
items:
  - icon: book
    text: "Explorar CSV/JSON: shape, tipos, nulos, duplicidades, datas e normalização."
  - icon: book
    text: "Construir um notebook: alternar Markdown e Python, executar célula a célula e documentar."
  - icon: workflow
    text: "Visualizar: gerar gráficos, escolher encodings acessíveis e separar sugestão de interpretação."
  - icon: code
    text: "Revisar SQL: explicar anti-padrões, preservar semântica e pedir plano de execução."
  - icon: terminal
    text: "Investigar telemetria: conectar um MCP local, consultar ferramentas e registrar evidências."
---

---
slide_id: copilot-cli-data/evidence-loop
template: architecture
kicker: 10–13 min · método
title: Contexto → proposta → execução → evidência
subtitle: Um ciclo curto evita transformar uma hipótese em fato.
---
**Contexto:** dicionário de dados, schema, instruções, arquivos e objetivo de negócio.

**Proposta:** peça ao `copilot` um plano pequeno e um artefato revisável; delimite arquivos e permissões.

**Execução:** rode `python`, Jupyter, SQL, Docker ou uma consulta MCP fora da imaginação do modelo.

**Evidência:** compare saída, diff, logs e plano; registre o que foi observado, inferido e ainda não testado.

---
slide_id: copilot-cli-data/actions-integration
template: header_body
kicker: 13–15 min · fechamento do contexto
title: Resultado validado pode virar automação
subtitle: Primeiro reproduza manualmente; só depois pense em um job ou GitHub Actions.
source:
  - github-docs/content/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically.md
  - github-docs/content/copilot/how-tos/copilot-cli/use-copilot-cli-in-actions.md
---
- **Interativo**: `copilot` permite perguntas, aprovações e correções durante a sessão.
- **Prompt mode**: `copilot -p "..." -s` serve para uma saída reproduzível, desde que o contexto e as permissões sejam explícitos.
- **Automação**: em CI, use token/`GITHUB_TOKEN` e permissões mínimas; nunca copie credenciais para o prompt ou para um log.
- **Guardrail**: mantenha revisão humana para números, alterações de arquivos, chamadas externas e conclusões de negócio.
- **Transição**: agora a mesma disciplina será aplicada aos cinco módulos do repositório [`data-with-copilot`](https://github.com/brunosilvaaircompany/data-with-copilot).

---
slide_id: copilot-cli-data/hands-on-map
template: divider
index: 15–57 min
title: Laboratório no terminal
note: "Cinco módulos independentes; cada um tem contexto, passos, comandos, resultado esperado e um limite claro."
---

---
slide_id: copilot-cli-data/module1-context
template: exercise
kicker: 15–25 min · módulo 1
title: Exploração de dados
subtitle: Comece pelos arquivos reais e pelo dicionário — não pelos números que você espera encontrar.
source: github-docs/content/copilot/how-tos/copilot-cli/cli-best-practices.md
---
**Contexto:** o gerador determinístico cria `clientes.csv`, `produtos.csv`, `vendas.csv` e `pedidos.json` na pasta `data/ecommerce`.

**Passos:** leia o README e o gerador com `@`; peça um plano para `explorar.py`; confira nomes reais de colunas; aceite somente mudanças revisadas; execute pelo shell.

**Comandos:** use `copilot` no modo interativo para criar o script e `git diff`, `python` e inspeção de saída para validar.

**Resultado esperado:** um relatório de estrutura e qualidade, sem inventar colunas, tipos ou problemas não observados.

---
slide_id: copilot-cli-data/module1-commands
template: terminal_demo
kicker: 15–25 min · execução
title: Gerar, explorar, revisar
subtitle: O shell executa Python; o CLI ajuda a escrever e explicar o script.
code: |
  cd "$(git rev-parse --show-toplevel)"
  python data/ecommerce/gerar_dados.py

  copilot
  > Leia @data/ecommerce/README.md e @data/ecommerce/gerar_dados.py.
  > Planeje e crie modulos/01-exploracao-de-dados/explorar.py
  > para CSV/JSON, shape, tipos, nulos, duplicidades e datas.
  > Não execute nem altere outros arquivos sem me perguntar.

  git status --short
  git diff -- modulos/01-exploracao-de-dados/explorar.py
  python modulos/01-exploracao-de-dados/explorar.py
source: github-docs/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli.md
---

---
slide_id: copilot-cli-data/module1-result
template: stats
kicker: 15–25 min · saída observada no ensaio
title: O que a execução atual encontrou
subtitle: Gerador na revisão atual, semente 42; rode novamente e registre sua própria saída.
stats:
  - value: "20 × 6"
    label: "clientes.csv"
  - value: "21 × 5"
    label: "produtos.csv"
  - value: "290 × 7"
    label: "vendas.csv"
  - value: "120"
    label: "pedidos.json"
---
**Confirmado:** 2 e-mails vazios; datas em `YYYY-MM-DD` e `YYYY-MM-DDTHH:MM:SS`; statuses variados, incluindo `cancelado`.

**Também confirmado:** não apareceram duplicidades, valores negativos ou valores zerados nas colunas de quantidade, preço e subtotal nessa execução.

**Revisão humana:** “nulo”, “vazio” e “zero” dependem da leitura e da coluna; não generalize um achado para todo o dataset.

---
slide_id: copilot-cli-data/module2-context
template: exercise
kicker: 25–35 min · módulo 2
title: Jupyter Notebook no terminal
subtitle: Código gerado é proposta; cada célula executada é uma medição que precisa ficar registrada.
source: github-docs/content/copilot/how-tos/copilot-cli/cli-getting-started.md
---
**Contexto:** crie `modulos/02-jupyter-notebook/minha_analise.ipynb` com células Markdown e Python que carreguem os quatro arquivos.

**Passos:** peça ao `copilot` uma estrutura; gere uma célula por pergunta de negócio; execute cada célula; registre em Markdown o cálculo e a interpretação; compare com a saída do kernel.

**Comandos:** abra o notebook com Jupyter ou execute-o com `jupyter nbconvert`; não trate uma sugestão do CLI como uma execução do pandas.

**Resultado esperado:** notebook executável de ponta a ponta, com faturamento, produtos mais vendidos, categoria, status e cidades documentados.

---
slide_id: copilot-cli-data/module2-commands
template: terminal_demo
kicker: 25–35 min · células
title: Pedir estrutura, executar célula a célula
subtitle: Inclua caminhos e critérios de ordenação no prompt para reduzir ambiguidade.
code: |
  copilot
  > Crie um plano para @modulos/02-jupyter-notebook/minha_analise.ipynb.
  > Gere células Markdown e Python com pandas para carregar clientes,
  > produtos, vendas e pedidos; responda as cinco perguntas do README.
  > Não fixe números: cada célula deve calcular e depois interpretar a saída.

  jupyter lab modulos/02-jupyter-notebook/minha_analise.ipynb
  # Alternativa sem interface gráfica:
  jupyter nbconvert --to notebook --execute --inplace \
    modulos/02-jupyter-notebook/minha_analise.ipynb

  git diff --stat
source: github-docs/content/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically.md
---

---
slide_id: copilot-cli-data/module2-result
template: header_body
kicker: 25–35 min · interpretação
title: Resultados são da execução, não do prompt
subtitle: Use estes valores apenas como conferência do ensaio; o notebook deve recalcular tudo.
---
- **Faturamento**: `R$ 278.469,60` pela soma de `vendas.subtotal`.
- **Mais unidades**: Luminária LED (40), Bola de Futebol (40), Aspirador de Pó (38), Halteres 5kg (35) e Jaqueta Jeans (33).
- **Categoria líder em receita**: Eletrônicos (`R$ 62.565,57`) na execução de referência.
- **Pedidos por status**: entregue 71, enviado 26, processando 15, cancelado 8.
- **Pergunta de controle**: confirme moeda, arredondamento, joins e se itens cancelados foram incluídos antes de concluir.

---
slide_id: copilot-cli-data/module3-context
template: exercise
kicker: 35–43 min · módulo 3
title: Visualizar sem terceirizar a análise
subtitle: Um gráfico comunica uma decisão; não transforma uma correlação em causalidade.
source: github-docs/content/copilot/how-tos/copilot-cli/cli-best-practices.md
---
**Contexto:** use pandas para juntar vendas e produtos e matplotlib/seaborn para receita por categoria e pedidos por status.

**Passos:** peça ao `copilot` alternativas de gráfico; explique público e pergunta; execute; escolha títulos, eixos, paleta e ordem; escreva uma interpretação em Markdown.

**Comandos:** gere o código no CLI, rode o notebook e abra os artefatos; compare a visualização com a tabela agregada.

**Resultado esperado:** gráficos legíveis e acessíveis, com a distinção explícita entre visualização sugerida e conclusão validada.

---
slide_id: copilot-cli-data/module3-commands
template: terminal_demo
kicker: 35–43 min · gráficos
title: Gerar e executar a visualização
subtitle: "Peça também testes simples: categorias ausentes, escala, rótulos e formato de data."
code: |
  copilot
  > Em @modulos/03-visualizacao-de-dados/meus_graficos.ipynb,
  > gere Python com pandas, matplotlib e seaborn para receita por categoria
  > e pedidos por status. Inclua títulos, eixos, paleta acessível
  > e uma célula Markdown de interpretação após cada gráfico.

  jupyter nbconvert --to notebook --execute --inplace \
    modulos/03-visualizacao-de-dados/meus_graficos.ipynb
  python -c "import matplotlib, seaborn; print('bibliotecas OK')"
source: github-docs/content/copilot/how-tos/copilot-cli/cli-getting-started.md
---

---
slide_id: copilot-cli-data/module3-result
template: comparison
kicker: 35–43 min · revisão
title: Visualização sugerida vs. conclusão validada
subtitle: A aparência do gráfico não valida a agregação nem a pergunta de negócio.
bad_label: "Pular a validação"
bad_code: "A categoria parece maior\nlogo é a mais rentável."
good_label: "Conferir"
good_code: "Tabela agregada + gráfico\nunidade e período explícitos\ninterpretação com ressalvas"
---

---
slide_id: copilot-cli-data/module4-context
template: exercise
kicker: 43–47 min · módulo 4
title: Refatoração SQL com ressalvas
subtitle: Sem banco e plano de execução, a otimização é uma hipótese conceitual.
source: github-docs/content/copilot/how-tos/copilot-cli/cli-best-practices.md
---
**Contexto:** cada exercício traz schema, query original e resultado esperado em `modulos/04-refatoracao-sql/exercicios`.

**Passos:** peça ao `copilot` uma alternativa e a explicação dos anti-padrões; compare colunas, joins, nulos, duplicidades, filtros e equivalência semântica.

**Comandos:** use `copilot -p` para obter uma revisão textual ou a sessão interativa; não peça que ele declare ganho de performance sem um banco real.

**Resultado esperado:** query proposta, justificativa e lista de índices/hipóteses que serão testadas depois com `EXPLAIN` ou `EXPLAIN ANALYZE`.

---
slide_id: copilot-cli-data/module4-commands
template: code_demo
kicker: 43–47 min · prompt de SQL
title: Fornecer o contexto certo
subtitle: O schema e o resultado esperado são parte do contrato da refatoração.
language: text
code: |
  copilot -p 'Leia @modulos/04-refatoracao-sql/exercicios/exercicio_1.sql.
  Explique os anti-padrões e proponha uma alternativa equivalente.
  Compare a query original e a proposta quanto a joins, nulos,
  duplicidades e resultado esperado. Não alegue ganho de performance:
  indique quais EXPLAIN/EXPLAIN ANALYZE e benchmarks faltam.' -s

  # Depois, em um banco de teste compatível:
  EXPLAIN <query original>;
  EXPLAIN ANALYZE <query original>;
  EXPLAIN <query proposta>;
  EXPLAIN ANALYZE <query proposta>;
source: github-docs/content/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically.md
---

---
slide_id: copilot-cli-data/module4-result
template: quote
kicker: 43–47 min · critério de aceite
title: “Mais curto” não significa “mais rápido”
subtitle: Equivalência e plano precisam ser demonstrados no banco alvo.
quote: A refatoração só vira uma melhoria quando retorna o mesmo resultado e o plano/benchmark sustentam a afirmação.
cite: "Schema + EXPLAIN/EXPLAIN ANALYZE + validação humana"
---

---
slide_id: copilot-cli-data/module5-context
template: exercise
kicker: 47–57 min · módulo 5
title: Telemetria com MCP no Copilot CLI
subtitle: O servidor expõe ferramentas; o CLI precisa de configuração própria, permissões e confiança no diretório.
source:
  - github-docs/content/copilot/concepts/context/mcp.md
  - github-docs/content/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers.md
---
**Contexto:** o módulo sobe `telemetria-lojaapi` em Docker e expõe `list_services`, `list_incidents`, `query_logs` e `get_metrics` em `http://localhost:8000/mcp`.

**Passos:** suba e verifique o container; registre o servidor no Copilot CLI; confira descoberta/status/ferramentas; mantenha aprovações explícitas; consulte o incidente `INC-1042`.

**Comandos:** use `docker compose`, `copilot mcp add/list/get`, `/mcp show` e prompts que nomeiam o servidor; encerre com `docker compose down`.

**Resultado esperado:** relatório `relatorio_incidente.md` que separa logs/métricas observados, correlação temporal, hipótese de causa raiz e limitações.

---
slide_id: copilot-cli-data/module5-commands
template: terminal_demo
kicker: 47–57 min · servidor
title: Subir e testar o transporte
subtitle: Primeiro prove que o MCP responde; depois peça ao agente para usá-lo.
code: |
  cd modulos/05-telemetria-mcp
  docker compose up -d --build
  docker compose ps
  sleep 2  # aguarde o status "Up" antes da primeira chamada
  curl -s -X POST http://localhost:8000/mcp \
    -H "Content-Type: application/json" \
    -H "Accept: application/json, text/event-stream" \
    -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"curl","version":"1.0"}}}'

  copilot mcp add --transport http telemetria http://localhost:8000/mcp
  copilot mcp list
  copilot mcp get telemetria
source: github-docs/content/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers.md
---

---
slide_id: copilot-cli-data/module5-config
template: code_demo
kicker: 47–57 min · compatibilidade
title: "`.vscode/mcp.json` não é configuração do CLI"
subtitle: "A entrada `servers` do VS Code é ignorada pelo Copilot CLI; migre para o formato suportado."
language: json
code: |
  {
    "mcpServers": {
      "telemetria": {
        "type": "http",
        "url": "http://localhost:8000/mcp",
        "tools": ["*"]
      }
    }
  }

  # Alternativas suportadas:
  copilot mcp add --transport http telemetria http://localhost:8000/mcp
  # arquivo por repositório: .mcp.json ou .github/mcp.json
source: github-docs/content/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers.md
---

---
slide_id: copilot-cli-data/module5-interactive
template: terminal_demo
kicker: 47–57 min · descoberta e permissões
title: Conferir ferramentas antes de consultar
subtitle: Em prompt mode, a confiança do workspace e a variável de MCP precisam ser explícitas.
code: |
  copilot
  /mcp show
  /mcp show telemetria
  > Use somente o servidor telemetria para listar serviços e incidentes.
  > Não altere arquivos nem execute comandos sem minha aprovação.

  # Se usar .mcp.json com copilot -p em um workspace já confiável:
  GITHUB_COPILOT_PROMPT_MODE_WORKSPACE_MCP=true \
    copilot -p 'Use telemetria para listar os incidentes.' -s

  # Permissão estreita, apenas se o ambiente exigir:
  copilot --allow-tool='telemetria'
source:
  - github-docs/content/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers.md
  - github-docs/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli.md
---

---
slide_id: copilot-cli-data/module5-investigation
template: architecture
kicker: 47–57 min · evidência
title: "Investigar `INC-1042` sem confundir evidência e hipótese"
subtitle: A correlação é um achado; a causa raiz continua sendo uma hipótese até haver confirmação adicional.
---
**Observado nos dados sintéticos:** `checkout-service` registra HTTP 500 e mensagens de timeout entre 14:00 e 15:30 de 15/06/2024; `payment-gateway` apresenta latência e erros elevados no mesmo intervalo.

**Correlação temporal:** os picos aparecem juntos nas consultas de `query_logs` e `get_metrics`; compare também o período anterior e o `auth-service`.

**Hipótese provável:** timeout do provedor externo de pagamento degradou o `payment-gateway`, que propagou falhas para o checkout.

**Limitação:** o servidor é determinístico e fictício; sem traces, deploys, dependências e teste de causalidade, o resultado não comprova a causa em produção.

---
slide_id: copilot-cli-data/module5-report
template: terminal_demo
kicker: 47–57 min · entregável
title: Escrever, revisar e encerrar
subtitle: Rotule cada afirmação para que o relatório continue auditável depois da demonstração.
code: |
  copilot
  > Use telemetria para investigar INC-1042.
  > Gere relatorio_incidente.md com resumo, impacto, linha do tempo,
  > logs e métricas observados, hipótese de causa, limitações e ações.
  > Marque cada item como Observado, Inferência ou Lacuna.
  > Não invente timestamps, métricas ou ações já executadas.

  git diff -- relatorio_incidente.md
  docker compose logs --tail=30
  docker compose down
source: github-docs/content/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers.md
---

---
slide_id: copilot-cli-data/plan-b
template: faq
kicker: Plano B · sem parar o relógio
title: Se o ambiente falhar
subtitle: Registre a limitação; não substitua uma execução ausente por uma afirmação inventada.
items:
  - question: "Copilot não autentica ou a conta está errada?"
    answer: "Use `copilot login --device-code`, confira `/user` e `/user list`; para CI, use COPILOT_GITHUB_TOKEN/GH_TOKEN/GITHUB_TOKEN sem exibir o valor. `gh auth status` só verifica o gh."
  - question: "O que foi validado antes da sessão?"
    answer: "O gerador determinístico e o container MCP foram executados e o endpoint respondeu ao initialize. Este ambiente não tinha o `copilot` instalado/autenticado; confirme a descoberta com `copilot mcp get` no Codespace e não apresente essa etapa como ensaiada aqui."
  - question: "Python/Jupyter ou dependências não estão prontas?"
    answer: "Mude para o Codespace/devcontainer, rode o gerador e execute células com nbconvert; se não houver kernel, demonstre o prompt e marque o cálculo como não executado."
  - question: "Docker ou MCP não sobe?"
    answer: "Confira `docker compose ps` e logs; valide o endpoint com curl; use `.mcp.json`/`copilot mcp get` em vez de `.vscode/mcp.json`. Se continuar indisponível, faça os módulos 1–4 e declare a limitação."
  - question: "O tempo acabou?"
    answer: "Pare no último resultado validado, deixe o próximo comando anotado e não pule a revisão de números, permissões ou `docker compose down`."
source:
  - github-docs/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli.md
  - github-docs/content/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers.md
---

---
slide_id: copilot-cli-data/conclusion
template: header_body
kicker: 57–60 min · conclusão
title: Acelerar não é delegar a responsabilidade
subtitle: "Copilot CLI reduz o atrito entre pergunta, plano, código e documentação — a evidência fecha o ciclo."
---
Leve três hábitos: dê contexto verificável, execute com ferramentas determinísticas e rotule evidência versus hipótese.

---
slide_id: copilot-cli-data/takeaways
template: cards_2col
kicker: 57–60 min · síntese
title: Seis ideias para repetir amanhã
subtitle: O padrão vale para dados, código e operações.
cards:
  - icon: terminal
    title: "CLI primeiro"
    desc: "Converse no terminal; escolha entre interativo e `-p` conforme a necessidade de supervisão."
  - icon: book
    title: "Contexto explícito"
    desc: "Dicionário, schema, caminhos, instruções e documentação reduzem suposições."
  - icon: code
    title: "Ferramenta executa"
    desc: "pandas, Jupyter, gráficos, banco, Docker e MCP produzem a saída verificável."
  - icon: verified
    title: "Permissões mínimas"
    desc: "Confie só no diretório de teste e aprove ferramentas/servidores com escopo estreito."
  - icon: people
    title: "Pessoa decide"
    desc: "Revisão, equivalência semântica, acessibilidade e validação continuam obrigatórias."
  - icon: workflow
    title: "Automatize depois"
    desc: "Só leve um prompt para Actions quando a execução manual for reproduzível e auditável."
source:
  - github-docs/content/copilot/concepts/agents/copilot-cli/about-copilot-cli.md
  - github-docs/content/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically.md
---

---
slide_id: copilot-cli-data/resources
template: resources
kicker: Referências
title: Continue no repositório de laboratório
subtitle: Fontes oficiais sincronizadas e material do hands-on para repetir a sessão.
source:
  - github-docs/content/copilot/how-tos/copilot-cli/cli-getting-started.md
  - github-docs/content/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers.md
---
- [Hands-on `data-with-copilot`](https://github.com/brunosilvaaircompany/data-with-copilot): cinco módulos, gerador e MCP fictício.
- [Instalar e autenticar o Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).
- [Visão geral do Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview).
- [Adicionar servidores MCP ao Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).
- [Executar o CLI programaticamente](https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically).
