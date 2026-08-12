---
slide_id: copilot-training/cover
template: cover
eyebrow: Treinamento interno
title: GitHub Copilot na prática
subtitle: "Fundamentos, fluxo de trabalho e boas práticas para times de engenharia."
meta: "Time de Evangelistas \u00A0·\u00A0 Agosto 2026"
---

---
slide_id: copilot-training/agenda
template: list_numbered
kicker: Visão geral
title: Agenda
subtitle: O que vamos cobrir na sessão de hoje.
items:
  - title: "Abertura & alinhamento"
    desc: "Expectativas, nível da turma e ambiente."
  - title: "Conceitos e casos de uso"
    desc: "Como o Copilot funciona e onde ele entra no dia a dia."
  - title: Hands-on
    desc: "Chat, inline, terminal e instruções customizadas."
  - title: "Boas práticas & Q&A"
    desc: "Contexto, revisão humana e próximos passos."
---

---
slide_id: copilot-training/part1-divider
template: divider
stack: copilot-training/block1
index: Parte um
title: "Conceitos & casos de uso"
note: "O que o Copilot é, o que ele não é, e onde ele gera valor real."
---

---
slide_id: copilot-training/what-is-copilot
template: header_body
stack: copilot-training/block1
kicker: Fundamentos
title: O que é o GitHub Copilot
subtitle: Um assistente de programação com IA integrado ao seu fluxo.
source: github-docs/content/copilot/get-started/what-is-github-copilot.md
---
- Sugere código e testes direto no editor, no chat e no terminal
- Não entende o contexto do repositório aberto
- Funciona com poucas linguagens e frameworks
- Disponível apenas no JetBrains

---
slide_id: copilot-training/why-adopt
template: cards_2col
stack: copilot-training/block1
kicker: Valor
title: Por que adotar
subtitle: Quatro ganhos que aparecem já nas primeiras semanas.
source: github-docs/content/copilot/get-started/features.md
cards:
  - icon: zap
    title: Velocidade
    desc: "Menos boilerplate escrito à mão, mais tempo em lógica de negócio."
  - icon: book
    title: Contexto
    desc: "Explicações sobre código legado sem sair do editor."
  - icon: verified
    title: Qualidade
    desc: "Testes e casos de borda sugeridos junto com a implementação."
  - icon: people
    title: Onboarding
    desc: "Pessoas novas navegam bases desconhecidas com mais autonomia."
---

---
slide_id: copilot-training/generic-vs-specific
template: comparison
stack: copilot-training/block1
kicker: Prompt
title: "Genérico vs. específico"
subtitle: A qualidade da resposta acompanha a qualidade do pedido.
bad_label: "Genérico"
bad_code: "Crie um endpoint REST"
good_label: "Específico"
good_code: "Crie um endpoint POST /users\ncom validação de e-mail\ne retorno 201"
source: github-docs/content/copilot/concepts/prompting/prompt-engineering.md
---

---
slide_id: copilot-training/human-in-the-loop
template: quote
stack: copilot-training/block1
kicker: Princípio
title: Human in the loop
subtitle: "Autonomia com responsabilidade."
quote: Todo código gerado passa por revisão humana antes de ir para produção.
cite: "GitHub Docs — Responsible AI"
source: github-docs/content/copilot/get-started/best-practices.md
---

---
slide_id: copilot-training/part2-divider
template: divider
stack: copilot-training/block2
index: Parte dois
title: Hands-on
note: "Do autocomplete às instruções customizadas do repositório."
---

---
slide_id: copilot-training/where-copilot-appears
template: figure
stack: copilot-training/block2
kicker: "Superfícies"
title: Onde o Copilot aparece
subtitle: "Três pontos de entrada no fluxo de trabalho."
image: https://octodex.github.com/images/codercat.jpg
image_alt: "Codercat — GitHub Octodex"
source: github-docs/content/copilot/get-started/features.md
items:
  - icon: comment-discussion
    text: "Chat — perguntas e explicações sobre o código"
  - icon: code
    text: "Inline no editor — sugestões enquanto você digita"
  - icon: terminal
    text: "Terminal — geração e explicação de comandos"
  - icon: workflow
    text: "Agentes — não disponível"
---

---
slide_id: copilot-training/custom-instructions
template: code_demo
stack: copilot-training/block2
kicker: "Configuração"
title: Instruções padronizadas
subtitle: "`.github/copilot-instruct.md` aplica as regras do projeto a toda sugestão."
language: markdown
code: |
  # .github/copilot-instructions.md
  - Use TypeScript com strict mode habilitado
  - Siga o padrão REST para APIs
  - Documente funções públicas com JSDoc
sources:
  - path: github-docs/content/copilot/concepts/prompting/response-customization.md
    headings:
      - About repository custom instructions
  - path: github-docs/content/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide.md
  - path: vscode-docs/agent-customization/custom-instructions.md
    headings:
      - "Use a `.github/copilot-instructions.md` file"
---

---
slide_id: copilot-training/part3-divider
template: divider
stack: copilot-training/block3
index: Parte três
title: Boas práticas
note: "Hábitos que aumentam a precisão das respostas."
---

---
slide_id: copilot-training/context-economy
template: header_body
stack: copilot-training/block3
kicker: Contexto
title: Economia de contexto
subtitle: "Menos ruído no contexto, mais precisão na resposta."
source: github-docs/content/copilot/get-started/best-practices.md
---
- Feche arquivos que não são relevantes para a tarefa
- Limpe conversas antigas antes de iniciar um novo assunto
- Prefira autocomplete para tarefas simples
- Nomeie variáveis e escreva comentários com clareza

---
slide_id: copilot-training/closing
template: closing
kicker: Encerramento
title: Perguntas
subtitle: "Dúvidas, cenários do seu time e próximos passos."
image: https://octodex.github.com/images/neurocats_FULL.png
image_alt: "Neurocats — GitHub Octodex"
---
Traga um caso real do seu repositório — a gente resolve junto agora.
