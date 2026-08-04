# Plano de implementação — personalização de layout (todas as opções oficiais)

Baseado em `opcoes-oficiais-github-brand.md`. Cobre as 3 áreas do painel de estilo atual (`_shared/core.js`) mais o que ainda não existe. Nada foi implementado — isto é só o plano.

---

## 0. Decisões que preciso da sua confirmação antes de começar

1. **Paleta de Marca/Marketing (verde/Copilot/Security) entra ou fica de fora?** É um sistema de cor diferente do Primer (hero color + neutros, não "accent/success/danger"). Dá pra implementar como uma 4ª dimensão no painel ("Paleta: Primer padrão / Verde GitHub / Copilot / Security"), mas é trabalho extra e uma lógica de aplicação diferente da que já existe.
2. **Vale vendorizar as 4 fontes Monaspace que faltam (Argon, Xenon, Radon, Krypton) + Mona Sans Mono?** São ~10 arquivos de fonte novos (variable woff2), aumenta o peso da página. Ou prefere só ampliar as combinações usando o que já está no projeto (Mona Sans + Hubot Sans + Monaspace Neon)?
3. **Texturas de fundo (contribution graph em tira, dithering)** — vale confirmar: são geráveis por CSS/SVG puro (sem baixar arte da GitHub), então não têm risco de licença. Ilustrações maiores (key art, building blocks, spot icons, mascotes) **não entram no escopo de implementação automática** — são assets proprietários do GitHub que exigiriam baixar arquivos oficiais (com licença/aprovação da marca) em vez de gerar por código. Só seguimos com isso se você tiver os arquivos oficiais para eu importar.

Assumindo "sim" para 1 e 2 e a limitação já explicada em 3, o plano abaixo cobre tudo que sobra.

---

## 1. Arquitetura — como estender o `core.js` atual

Hoje existem 3 arrays de dados simples (`ACCENT_HUES`, `COLOR_MODES`, `FONT_PAIRS`) + 3 chaves de `localStorage`, cada uma aplicada via `document.documentElement.style.setProperty`. O plano mantém exatamente esse padrão — só aumenta os arrays e adiciona uma 4ª dimensão (`PALETTE_MODES` para Marca/Marketing). Nenhuma mudança estrutural é necessária, o que reduz risco de regressão no que já funciona.

Novo estado persistido: 4 chaves independentes em vez de 3 (`slide-layouts:accent`, `:mode`, `:font`, `:palette`).

---

## 2. Fase 1 — Completar cores Product UI (Primer) — risco baixo, só dados

**2.1 Tons semânticos**: hoje `ACCENT_HUES` tem 3 (azul/verde/vermelho). Adicionar 5: `attention` (amarelo), `severe` (laranja), `done` (roxo), `sponsors` (rosa), `neutral` (cinza). Hex dark/light de cada um já estão levantados no documento de opções — só copiar para o array. Zero risco, mesma lógica que já existe e já foi testada.

**2.2 Modos de cor**: hoje `COLOR_MODES` tem 4 (`padrao`, `dimmed`, `contraste`). Adicionar 4: `light_colorblind`, `dark_colorblind`, `light_tritanopia`, `dark_tritanopia`. Já tenho os hex de 3 desses 4 (falta só buscar o JSON de `dark_tritanopia`, uma chamada rápida). Mesma estrutura scheme-aware que `contraste` já usa hoje.

**2.3 Escalas cruas (tingir fundo)**: aqui é uma feature nova, não só dado. Proposta: um controle extra "Intensidade do tom" (3 botões: Neutro / Leve / Forte) que, quando uma cor de destaque está selecionada, aplica um leve tingimento de `--surface`/`--surface-strong` usando os degraus 8–9 da escala daquela cor (em vez do cinza padrão). Precisa de uma função de mistura ou dos 10 hex de cada uma das 9 escalas (já levantados). Complexidade média — é a única parte da Fase 1 que não é só "adicionar linha no array".

**Entregável da Fase 1**: painel com 8 cores de destaque, 8 modos de fundo (linha "Acessibilidade" separada da linha "Padrão"), e o controle de intensidade do tom. Testável com o mesmo script jsdom já usado antes.

---

## 3. Fase 2 — Paleta de Marca/Marketing (só se confirmado no item 0.1)

Sistema novo, paralelo ao Primer. Proposta técnica:

- Novo array `BRAND_PALETTES`: `github-green` (verde `#0FBF3E` + neutros Gray 1–6), `copilot` (roxo `#8534F3` + laranja de apoio), `security` (azul `#3094FF` + lime de apoio).
- Cada paleta define: `hero` (cor principal), `neutralLight`/`neutralDark` (para escolher o degrau certo do ramp de cinza conforme o esquema claro/escuro atual), `accentSecondary` (laranja no Copilot, lime no Security — usado com moderação, não como accent principal).
- Aplicação: quando uma paleta de marca está ativa, ela **substitui** a seleção de "cor de destaque" (não faz sentido ter Primer-azul + paleta Copilot ao mesmo tempo) — via `--accent`/`--accent-light` apontando pro `hero`, e ajusta `--bg`/`--surface` para os neutros da paleta em vez dos tokens Primer padrão. Guarda a proporção sugerida pela marca (80% neutro/preto/branco, 5% verde, 5% acento) deixando o hero restrito a elementos pequenos (kicker, linha divisória, ícones) em vez de fundo inteiro.
- UI: 4ª seção no painel, "Paleta de marca", com os 3 botões + "Nenhuma (usar Primer)". Ativar uma paleta desabilita visualmente a seção "Cor de destaque" (evita conflito).

**Risco/esforço**: médio-alto — é a única parte que introduz uma lógica de aplicação genuinamente nova (substituição em vez de sobreposição), então precisa de mais teste manual visual além do jsdom.

---

## 4. Fase 3 — Tipografia completa (só se confirmado no item 0.2)

**4.1 Sem custo de asset** (imediato): ampliar `FONT_PAIRS` — hoje só 3 combinações (Padrão/Editorial/Técnico), usando só Mona Sans + Hubot Sans + Monaspace Neon (já vendorizados). Dá pra criar mais combinações só reorganizando essas 3 fontes sem baixar nada novo. Baixo esforço.

**4.2 Com novo asset** (precisa das 4 fontes Monaspace que faltam): baixar Argon/Xenon/Radon/Krypton (variable woff2, do repositório oficial `githubnext/monaspace`) para `_shared/vendor/fonts/monaspace-{argon,xenon,radon,krypton}/`, declarar `@font-face` pra cada uma em `slides-anchored.css` (seguindo o padrão já usado pra Neon), e adicionar ao array de fontes embutidas no modo `--standalone` do `build.js` (hoje só embute Mona/Hubot/Monaspace Neon). Cada fonte tem uma "personalidade" diferente (Argon = humanista, Xenon = slab serif, Radon = manuscrita, Krypton = mecânica), então dá pra oferecer isso como 4 opções extras de "Fonte de título" no lugar de só 1 "Técnico" genérico.

**4.3 Mona Sans Mono**: mesmo processo — baixar o arquivo, declarar `@font-face`, oferecer como alternativa ao Monaspace Neon pro `--font-mono` (código).

**Entregável da Fase 3**: até 8 combinações de fonte no painel, todas dentro da marca.

---

## 5. Fase 4 — Texturas de fundo geráveis por código

Só as duas texturas que **não dependem de asset proprietário**, porque são padrões geométricos simples, não ilustração:

**5.1 Tira do contribution graph** (a que a própria marca recomenda para apresentações): implementar como um componente CSS/SVG — 4 a 7 quadrados em linha, cada um com uma opacidade/tom diferente da escala de verde (ou da cor de destaque ativa, pra ficar coerente com o resto do tema), posicionado como detalhe decorativo (canto do slide, rodapé), nunca espalhado pela tela toda. Esforço baixo: é HTML/CSS gerado, sem arquivo externo.

**5.2 Dithering**: um padrão pontilhado sutil, gerável via SVG `feTurbulence`/`feColorMatrix` ou um `background-image` de `radial-gradient` repetido em baixa opacidade. Aplicável como textura de fundo geral. Esforço baixo-médio (ajuste fino pra não ficar poluído visualmente).

**Fora do escopo desta fase** (precisam de asset oficial, não geráveis por código): key art isométrica, building blocks, spot icons, screenshots reais de produto. Ver decisão 0.3.

**Entregável da Fase 4**: 2 novos controles no painel — "Detalhe" (tira do contribution graph, liga/desliga) e "Textura de fundo" (nenhuma / dithering sutil).

---

## 6. Mudanças de UI no painel de estilo

Painel atual tem 3 seções (Cor de destaque, Fundo, Fonte) + reset único. Proposta final com todas as fases:

1. **Cor de destaque** — 8 opções (era 3), agrupadas por "Comuns" (azul/verde/vermelho/amarelo) e "Adicionais" (laranja/roxo/rosa/cinza).
2. **Fundo** — 2 grupos: "Padrão" (claro/escuro/dimmed/alto contraste) e "Acessibilidade" (colorblind/tritanopia claro/escuro).
3. **Intensidade do tom** — novo, 3 botões (Neutro/Leve/Forte), só ativo quando uma cor de destaque não-padrão está selecionada.
4. **Paleta de marca** — novo, 4 botões (Nenhuma/Verde GitHub/Copilot/Security), com aviso curto de que ativar isso substitui a cor de destaque.
5. **Fonte** — até 8 combinações (era 3), mesma lógica de agrupar.
6. **Detalhe de fundo** — novo, tira do contribution graph (liga/desliga).
7. **Textura** — novo, dithering (nenhuma/sutil).
8. Botão único "Restaurar tudo ao padrão" — já existe, só passa a limpar as 4 chaves de storage em vez de 3.

O painel cresce bastante (de 3 pra 8 blocos) — vale considerar transformar em abas ou em um accordion pra não virar uma lista enorme de rolagem. Aviso porque muda a estrutura HTML do painel, não só os dados.

---

## 7. Ordem sugerida de implementação

1. Fase 1 (tons semânticos + modos de cor) — menor risco, maior cobertura do levantamento, reaproveita 100% do código já testado.
2. Fase 4.1 (tira do contribution graph) — alto valor visual, baixo esforço, sem dependência de asset.
3. Fase 3.1 (recombinar fontes já vendorizadas) — baixo esforço.
4. Reorganizar o painel (item 6) — precisa acontecer antes de fases 2/3.2/4.2 pra não ficar remendando a UI a cada fase.
5. Fase 2 (paleta de marca) — maior esforço de lógica nova.
6. Fase 3.2/3.3 (fontes novas) — depende de decisão 0.2, esforço de asset.
7. Fase 4.2 (dithering) — ajuste fino visual, pode vir por último.

## 8. Testes por fase

Mesmo padrão já usado: script Node + jsdom simulando aplicar/persistir/recarregar cada opção nova, mais uma checagem visual manual via `python -m http.server` antes de considerar cada fase pronta — principalmente a Fase 2, que muda a lógica de aplicação (substituição, não só troca de variável).
