# Opções oficiais GitHub/Primer para personalização de decks

Levantamento de tudo que é permitido pelas diretrizes oficiais do GitHub (Primer — Product UI, e Brand Toolkit — brand.github.com) para cor, fonte e imagem de fundo. Isto é só um **levantamento de referência** — nada aqui foi implementado no projeto. Hoje o seletor de estilo usa apenas uma fração pequena do que existe abaixo (3 tons de destaque, 4 modos de cor, 3 combinações de fonte).

Fontes consultadas: `primer.style` (primitives, foundations, octicons), pacote `@primer/primitives` (hex reais extraídos dos JSON de cada modo de cor), `brand.github.com` (guias de marca 2026), `monaspace.githubnext.com`.

---

## 1. Cores — Product UI (Primer)

Este é o sistema usado hoje no projeto (`slides-anchored.css`, `gallery.css`).

### 1.1 Modos de cor completos

O Primer define 9 modos de cor oficiais. Hoje o projeto usa 4 (claro, escuro, dark dimmed, alto contraste claro/escuro). Ficam de fora:

| Modo | Uso oficial | canvas.default | fg.default | accent.fg |
|---|---|---|---|---|
| `light` (implementado) | padrão claro | `#ffffff` | `#1f2328` | `#0969da` |
| `dark` (implementado) | padrão escuro | `#0d1117` | `#e6edf3` | `#4493f8` |
| `dark_dimmed` (implementado) | escuro "suave", menos contraste que o dark puro | `#22272e` | `#adbac7` | `#539bf5` |
| `light_high_contrast` (implementado) | acessibilidade — contraste máximo claro | `#ffffff` | `#0e1116` | `#0349b4` |
| `dark_high_contrast` (implementado) | acessibilidade — contraste máximo escuro | `#0a0c10` | `#f0f3f6` | `#71b7ff` |
| `light_colorblind` | daltonismo (deuteranopia/protanopia) claro — sucesso passa a usar azul em vez de verde | `#ffffff` | `#24292f` | `#0969da` |
| `dark_colorblind` | idem, escuro | `#0d1117` | `#c9d1d9` | `#58a6ff` |
| `light_tritanopia` | daltonismo tritanopia claro (eixo azul-amarelo) | `#ffffff` | `#24292f` | `#0969da` |
| `dark_tritanopia` | idem, escuro | (mesma lógica do dark, ajustando amarelo/azul) | — | — |

Cada modo já vem com fundo, texto, bordas e todos os tons semânticos abaixo prontos e testados para contraste — dá pra oferecer qualquer um deles como opção de "fundo" no seletor, do mesmo jeito que Dark Dimmed e Alto Contraste já foram implementados.

### 1.2 Tons semânticos (para "cor de destaque")

Hoje só usamos 3 (accent/azul, success/verde, danger/vermelho). O Primer define 8 papéis semânticos, cada um com hex próprio por modo de cor:

| Papel | Cor | fg (dark) | fg (light) |
|---|---|---|---|
| `accent` (implementado) | azul | `#4493f8` | `#0969da` |
| `success` (implementado) | verde | `#3fb950` | `#1a7f37` |
| `danger` (implementado) | vermelho | `#f85149` | `#d1242f` |
| `attention` | amarelo/âmbar | `#d29922` | `#9a6700` |
| `severe` | laranja | `#db6d28`¹ | `#bc4c00`¹ |
| `done` | roxo | `#a371f7` | `#8250df` |
| `sponsors` | rosa | `#db61a2` | `#bf3989` |
| `neutral` / `closed` | cinza | `#6e7681`¹ | `#6e7781`¹ |

¹ valores aproximados por família de cor; hex exato por modo disponível no pacote `@primer/primitives`.

Isso daria um seletor de destaque com **8 opções** em vez das 3 atuais (Azul, Verde, Vermelho, Amarelo, Laranja, Roxo, Rosa, Cinza).

### 1.3 Escalas cruas (10 tons cada)

Além dos tokens semânticos, o Primer expõe 9 escalas de cor completas (gray, blue, green, yellow, orange, red, purple, pink, coral), cada uma com 10 degraus do mais claro ao mais escuro. Isso permite tingir fundo/superfície com uma variação mais sutil do que só "accent x fundo neutro" — por exemplo, um fundo com leve tom de roxo (`purple[8]`/`purple[9]`) em vez do cinza neutro padrão, mantendo o texto nos tokens de contraste testados.

---

## 2. Cores — Marca/Marketing (Brand Toolkit, brand.github.com)

Esse é um sistema **diferente** do Primer/Product UI acima — é a paleta oficial para material de marca e apresentações (2026), centrada no verde do GitHub. Nada disso está implementado hoje; é uma família de cores paralela, não vendorizada no projeto.

### 2.1 Paleta primária

- **GitHub Green** `#0FBF3E` — cor-herói, deve dominar a maioria das aplicações de marca.
- **Neutros**: Gray 1 `#F2F5F3` → Gray 6 `#101411` (6 degraus, do quase-branco ao quase-preto).
- **Escala de verde**: Green 1 `#BFFFD1` → Green 6 `#0A241B` (6 degraus).
- Uso recomendado: majoritariamente preto/branco/neutro, com verde como "momento" de destaque — não fundo inteiro.

### 2.2 Tema Copilot (paleta secundária temática)

- **Copilot Purple** `#8534F3` + escala Purple 1–6 (`#C898FD` → `#160048`).
- **Orange** de apoio 1–6 (`#F4A876` → `#500A00`).
- Proporção sugerida pela marca: 80% preto/branco, 10% neutro, 5% verde, 5% roxo.

### 2.3 Tema Security (paleta secundária temática)

- **Security Blue** `#3094FF` + escala Blue 1–6 (`#9EECFF` → `#001C4D`).
- **Lime** de apoio 1–6 (`#DCFF96` → `#703100`).
- Mesma lógica de proporção do tema Copilot, trocando roxo por azul.

Isso daria, por exemplo, "temas de fundo" adicionais no estilo Marketing: **Verde GitHub** (o padrão de marca), **Copilot** (preto/branco + roxo) e **Security** (preto/branco + azul) — visualmente diferentes dos modos Primer porque usam a lógica "hero color sobre neutro", não fundo colorido inteiro.

---

## 3. Tipografia

### 3.1 Já vendorizado no projeto (Product UI)

- **Mona Sans** — corpo/título (`--font-sans`).
- **Hubot Sans** — rótulos/kickers (`--font-label`).
- **Monaspace Neon** — código (`--font-mono`).

### 3.2 Disponível mas não vendorizado

- **Mona Sans — eixos variáveis completos**: a fonte suporta 5 larguras (condensada → expandida), itálico real e tamanho óptico. O próprio guia de marca recomenda **não usar as larguras alternativas fora de eventos especiais tipo Universe** — ou seja, mesmo oficialmente, variar a largura da Mona Sans não é recomendado para um deck comum.
- **Mona Sans Mono** — variante monoespaçada da própria Mona Sans (mencionada no Brand Toolkit ao lado da Mona Sans; distinta da família Monaspace).
- **Monaspace — as outras 4 fontes da superfamília** (hoje só usamos Neon):
  - **Neon** (implementado) — sans neo-grotesca, a mais "neutra".
  - **Argon** — sans humanista, mais orgânica.
  - **Xenon** — slab serif, com serifas quadradas — dá um ar "técnico-editorial".
  - **Radon** — estilo manuscrito/handwriting — uso decorativo, não para blocos longos de código.
  - **Krypton** — sans mecânica, geométrica.
  - Todas são variáveis (peso 200–800, largura 100–125, inclinação 0 a -11°), foram desenhadas para **combinar entre si** (ex.: título em Krypton + código em Neon) e têm "texture healing" (ajuste automático de espaçamento) e ligaduras de código configuráveis por linguagem.

Isso abriria a opção "Técnico" atual (que hoje só troca para Monaspace Neon) para 5 sabores diferentes de Monaspace, cada um com uma personalidade visual distinta, todos igualmente oficiais.

---

## 4. Imagens e texturas de fundo

Nada disso está implementado — é o que a marca permite usar como fundo/textura decorativa.

- **Contribution graph** (grade de contribuições) — o elemento de marca mais reconhecível. Existe em variações: verde clássico, "parrots and symbols" (símbolos no lugar dos quadrados), negative space. **O próprio guia recomenda a versão simplificada — uma tira de 4 quadrados em linha ou coluna — especificamente para "speaker cards ou apresentações"**, ou seja, é literalmente pensado para slides. Regra: nunca usar como textura de fundo espalhada nem redimensionar elementos dentro da grade — deve parecer "papel de parede" sutil, não arte principal.
- **Dithering** (dithering/pontilhado) — textura mais nova da marca, abstração binária (0/1) do contribution graph, também pensada para uso tipo "papel de parede" em várias escalas. Não deve ser combinada com o padrão de contribution graph na mesma peça.
- **Key art** — ilustrações isométricas 3D elaboradas (mascotes sobre uma "paisagem" do contribution graph, com cubos e ícones de produto). Reservada para "grandes momentos de marca" — pesada demais para um deck de treinamento recorrente, exigiria arte encomendada.
- **Building blocks** — cubos com textura de vidro/"criptografia", marcados com ícones, representando contribuições. Meio-termo entre ícone e ilustração.
- **Screenshots de produto (Product UI)** — usar a UI real do GitHub como fundo, com fade em gradiente ou borda com o mesmo peso da textura de dithering. Indicado para dar contexto de produto atrás de conteúdo hero.
- **Spot icons** — ícones maiores e mais ilustrativos que os Octicons, construídos a partir da "gitline" (formas de timeline/commit). Bom para destacar um card ou seção sem ir até ilustração completa.
- **Octicons** (já usado no projeto via sprite) — biblioteca de ícones pequenos, oficial, open-source, integrada ao Primer. Pode ser usada decorativamente como marcador de bullet, "flair" em cards, etc.

---

## 5. Mascotes

Existem, são oficiais, mas com regras de uso rígidas — **não são pensados como elemento de fundo**, e sim como destaque pontual:

- **Mona** — mascote principal (Octocat), aparece quando o assunto é comunidade open source.
- **Copilot** — mascote de IA, sombreado roxo/azul com toque de rosa, aparece quando o assunto é GitHub Copilot.
- **Ducky** — o "rubber duck" de debugging, representa o desenvolvedor; usado com menos frequência que os outros dois.
- Estilos alternativos/legados (uso mais restrito, nostálgico ou interno): Octocat original (Octodex), Octocat 2.0, estilo Outline (em descontinuação), Monamoji (emojis customizados, só para engajamento tipo reação, não para "falar" pela marca).
- **Regra explícita da marca**: mascotes não devem ser usados para assuntos sérios (segurança, vendas, dinheiro, pedidos de desculpa, crises) nem como substituto do logo. Todo uso público exige aprovação do time de Brand & Marketing Design do GitHub.

---

## 6. Logo / Invertocat — por que não entra como fundo

O Invertocat (o logo) é regido por regras bem mais rígidas que cor/fonte, e o próprio guia deixa explícito: **não** colocar o logo sobre fundo "concorrido", **não** usar como marca d'água, **não** recolorir fora de branco/preto/cinza/verde, **não** usar mascote/ilustração como substituto do logo. GITHUB®, INVERTOCAT e OCTOCAT® são marcas registradas — uso público de qualquer variação exige permissão por escrito do GitHub. Ou seja: dá para *referenciar* a existência do logo no levantamento, mas ele não é um candidato razoável a "imagem de fundo" de um deck, mesmo dentro da marca.

---

## 7. Layout / grid (fora do escopo de cor/fonte, mas é "oficial")

- Grid rígido com margens consistentes; ocasionalmente revelado com bordas, na maior parte do tempo só sugerido por espaço negativo.
- 3 "temas de fundo de texto" oficiais para separar texto de visual: **Branco, Cinza, Preto** — cada um com uma linha verde sólida separando a zona de texto da zona de imagem/ilustração.
- Fotos podem ser tratadas em escala de cinza quando competem visualmente com outros elementos.
- Todo texto deve atingir contraste WCAG AA em tamanho normal — restrição de acessibilidade que já vem embutida em qualquer combinação de tokens Primer, mas que limitaria combinações "livres" de cor de fundo x texto se algum dia isso for liberado.

---

## 8. Coisas a observar antes de implementar qualquer item acima

- Há um **template oficial de PowerPoint** do GitHub (`gh.io/github_ppt_template`), mas a própria página do Brand Toolkit marca como **"For GitHub Staff only"** — provavelmente não acessível/licenciado para este projeto se ele não for um repositório interno do GitHub.
- A paleta de Marca/Marketing (seção 2) e a paleta de Product UI/Primer (seção 1) são **dois sistemas diferentes** com propósitos diferentes — vale decidir explicitamente qual dos dois (ou os dois, em seletores separados) faz sentido para os decks antes de implementar, porque misturá-los sem critério foge do próprio guia.
- Mascotes e key art dependem de aprovação do time de marca do GitHub para uso público — não são "plug and play" como cor ou fonte.
