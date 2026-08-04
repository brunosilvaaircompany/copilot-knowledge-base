# Editor de Slides — Guia de Uso

Edite seus slides **diretamente no navegador** como se estivesse no PowerPoint.

---

## ✨ Recursos

- ✅ **Adicionar slides** (antes, depois, acima ou abaixo do slide atual)
- ✅ **Resetar slides** (volta o deck para a versão original, descartando edições)
- ✅ **Editar na página** (clique e digite direto no slide, sem abrir HTML)
- ✅ **Desfazer / Refazer** (histórico de edições com Ctrl+Z / Ctrl+Y)
- ✅ **Ícones e imagens oficiais** (Octicons do deck + mascotes do Octodex)
- ✅ **Editar conteúdo** (HTML bruto para mudanças estruturais)
- ✅ **Duplicar slides** (cópia completa com um clique)
- ✅ **Deletar slides** (com confirmação)
- ✅ **Persistência** — mudanças salvas em `localStorage`
- ✅ **Tema integrado** — o editor segue o tema claro/escuro
- ✅ **Acessibilidade** — navegação por teclado, foco visível

---

## 🎯 Como Usar

### 1. Abra o Editor
Clique no botão **⚙️ (engrenagem)** no canto **superior esquerdo**.

O painel deslizará da esquerda com as opções de edição.

### 2. Adicione um Slide
Clique em:
- **após** — insere slide na sequência principal, depois do atual (navega-se com ← →)
- **antes** — insere slide na sequência principal, antes do atual
- **acima** — insere um slide **acima** do atual, criando (ou estendendo) uma
  **pilha vertical** — navega-se com ↑ ↓ dentro do mesmo tema
- **abaixo** — insere um slide **abaixo** do atual, na mesma pilha vertical

Use acima/abaixo para agrupar sub-tópicos dentro de um mesmo assunto (ex.: um
divisor de seção seguido de vários slides de detalhe) sem criar itens novos na
sequência horizontal principal. Se o slide atual ainda não fizer parte de uma
pilha, a primeira vez que você usar "acima" ou "abaixo" o
transforma em pilha automaticamente — o conteúdo dele é preservado, só muda de
posição para dentro da pilha.

Todas as opções abrem um modal para escolher o template do slide novo:
```html
<div class="slide-head">
  <p class="kicker">Novo</p>
  <h2>Sem título</h2>
  <p class="subtitle">Clique para editar</p>
</div>
<div class="slide-body">
  <p>Adicione conteúdo aqui</p>
</div>
<div class="slide-mark">
  <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true">
    <use href="#oc-mark-github"></use>
  </svg>
  <span>GitHub</span>
</div>
```

### 3. Edite o Slide Atual

**Opção A — Editar na página (recomendado)**
Clique em **Editar na página** → o slide atual fica editável direto na tela, como um documento:
- Clique em qualquer texto e digite
- As mudanças são salvas automaticamente enquanto você edita
- Os atalhos do Reveal ficam suspensos durante a edição (digitar não troca de slide)
- Para encerrar: clique em **Parar edição**, pressione `Esc`, ou navegue para outro slide

**Opção B — Editar HTML**
Clique em **Editar HTML** → abre um modal com um **textarea** contendo o HTML do slide, para mudanças estruturais:
- Mude o `kicker`, `h2`, `subtitle`
- Edite o corpo (`.slide-body`)
- Adicione Octicons, listas, cards, etc.

Clique **Salvar** para confirmar.

### 4. Duplique um Slide
Clique em **Duplicar** → cria uma cópia exata do slide atual, inserida logo após.

Ideal para manter a mesma estrutura/layout em múltiplos slides.

### 5. Insira Ícones e Imagens Oficiais
Clique em **Ícone / imagem** → abre um catálogo com duas seções:

- **Octicons oficiais** — os ícones do sprite do deck (o catálogo lê o sprite
  da página automaticamente; adicione um `<symbol id="oc-...">` e ele aparece)
- **Imagens oficiais (Octodex)** — 8 mascotes oficiais do GitHub, por URL
  do octodex.github.com

Onde o item entra:
- **Durante a edição na página** → na posição do cursor
- **Fora da edição** → no final do `.slide-body` do slide atual

Toda inserção entra no histórico — dá para desfazer com `Ctrl+Z`.

### 6. Resete os Slides
Clique em **Resetar slides** → pede confirmação e, se aceita, volta **todo o
deck** para a versão original (o HTML tal como foi publicado), descartando:
texto editado, slides adicionados/duplicados, ícones/imagens inseridos e o
histórico de desfazer/refazer.

⚠️ Não é possível desfazer o reset — é a única ação do editor que não entra
no histórico, porque ela própria zera o histórico. Use quando quiser
recomeçar do zero neste navegador (o HTML do repositório nunca muda).

### 7. Exclua um Slide
Clique em **Excluir slide** (dentro da **Zona de risco**, dividida do resto do
painel) → solicita confirmação para evitar acidentes.

⚠️ Não é possível desfazer — use com cuidado!

---

## 🗂️ Painel Organizado por Grupos

O painel do editor agrupa as ações por função, com o contador **Slide atual**
fixo no topo:

| Grupo | Contém |
|-------|--------|
| **Editar** | Editar na página, Editar HTML, Ícone/imagem |
| **Adicionar slide** | Após, Antes, Acima, Abaixo (grade 2×2) + Duplicar |
| **Histórico** | Desfazer, Refazer |
| **Templates** | Gerenciar templates personalizados (criar, editar, duplicar, excluir) |
| **Zona de risco** | Excluir slide, Resetar slides — isoladas com destaque vermelho |

Excluir e Resetar ficam sempre juntas e separadas das demais ações, já que são
as únicas que não podem ser desfeitas.

---

## 🎨 Componentes Disponíveis

Ao editar, você pode usar qualquer classe CSS definida em `slides-anchored.css`:

### Cabeçalho + Corpo
```html
<div class="slide-head">
  <p class="kicker">Categoria</p>
  <h2>Título</h2>
  <p class="subtitle">Descrição</p>
</div>
<div class="slide-body">
  <ul>
    <li>Ponto 1</li>
    <li>Ponto 2</li>
  </ul>
</div>
```

### Grade de Cards
```html
<div class="anchored-grid">
  <div class="anchored-card">
    <span class="card-ic">
      <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
        <use href="#oc-zap"></use>
      </svg>
    </span>
    <h3>Velocidade</h3>
    <p>Descrição</p>
  </div>
  <!-- Mais cards... -->
</div>
```

### Lista com Ícones
```html
<ul class="icon-list">
  <li>
    <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
      <use href="#oc-code"></use>
    </svg>
    <span>Código</span>
  </li>
  <!-- Mais itens... -->
</ul>
```

### Comparação (Sim/Não)
```html
<div class="anchored-split">
  <div>
    <p class="split-label bad">
      <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
        <use href="#oc-x"></use>
      </svg>
      Errado
    </p>
    <pre class="code-wrapper"><code>console.log("bad");</code></pre>
  </div>
  <div>
    <p class="split-label good">
      <svg class="oc" viewBox="0 0 16 16" aria-hidden="true">
        <use href="#oc-check"></use>
      </svg>
      Certo
    </p>
    <pre class="code-wrapper"><code>console.log("good");</code></pre>
  </div>
</div>
```

### Octicons Disponíveis

Use `<use href="#oc-NOME">` para inserir ícones:

- `oc-mark-github` — Logo
- `oc-check` ✓
- `oc-x` ✕
- `oc-plus` ➕
- `oc-copy` 📋
- `oc-pencil` ✏️
- `oc-trash` 🗑️
- `oc-zap` ⚡
- `oc-book` 📚
- `oc-verified` ✓
- `oc-people` 👥
- `oc-comment-discussion` 💬
- `oc-code` </> 
- `oc-terminal` ⌨️
- `oc-workflow` ⚙️
- `oc-sun` ☀️
- `oc-moon` 🌙

---

## 💾 Salvamento Automático

As mudanças são **automaticamente persistidas** em `localStorage` sob a chave `slide-editor:content`.

Isso significa:
- Feche e abra a apresentação — seus slides editados permanecem
- Compartilhe o link da página — cada visitante tem sua própria cópia (localStorage é por domínio/navegador)
- **Exporte** as mudanças (opção futura: gerar JSON ou HTML)

### Limpar Histórico
Para resetar os slides para o original:
```javascript
localStorage.removeItem("slide-editor:content");
location.reload();
```

---

## ⌨️ Atalhos do Teclado

| Ação | Tecla |
|------|-------|
| Desfazer edição | `Ctrl+Z` (fora de campos de texto) |
| Refazer edição | `Ctrl+Y` ou `Ctrl+Shift+Z` |
| Encerrar edição na página | `Esc` |
| Abrir/Fechar editor | `Ctrl+Shift+E` (futuro) |
| Foco no painel | `Tab` |

Dentro do textarea do modal e durante a digitação na página, o desfazer
nativo do navegador continua valendo para o texto em curso; os botões
**Desfazer/Refazer** do painel navegam entre os passos salvos (cada pausa
de digitação e cada operação estrutural é um passo, até 50 níveis).

---

## 🔧 API Programática

Se quiser controlar o editor via JavaScript:

```javascript
// Adicionar slide após o atual
SlideEditor.addSlide("after");

// Duplicar o slide atual
const currentIdx = Reveal.getState().indexh;
SlideEditor.duplicateSlide(currentIdx);

// Editar conteúdo de um slide (índice 0)
SlideEditor.updateSlideContent(0, "<h2>Novo conteúdo</h2>");

// Deletar o slide no índice 2
SlideEditor.deleteSlide(2);

// Sincronizar slides do DOM
SlideEditor.syncSlidesFromDOM();

// Exportar como JSON
SlideEditor.exportAsJSON();

// Exportar como HTML
SlideEditor.exportAsHTML();

// Abrir/Fechar painel
SlideEditor.openPanel();
SlideEditor.closePanel();
SlideEditor.togglePanel();
```

---

## ⚠️ Limitações

- **Storage local**: dados salvos em `localStorage` (limite ~5-10MB por domínio)
- **Sem versioning**: não há histórico de versões — sempre sobrescreve
- **HTML bruto**: não há validação; HTML malformado pode quebrar o slide
- **Sem undo/redo**: edições são diretas; use Ctrl+Z do navegador se necessário

---

## 🐛 Troubleshooting

**❌ O editor não abre (botão ⚙️ não aparece)**
- Certifique-se de que `slide-editor.js` está carregado
- Verifique o console do navegador (`F12`) para erros

**❌ Slides não salvam**
- Verifique se localStorage está ativado (não use modo privado)
- Tente limpar `localStorage.removeItem("slide-editor:content")` e recarregue

**❌ Tema do editor não muda quando clico no toggle claro/escuro**
- O editor segue o tema global — verifique se `core.js` está carregado
- Recarregue a página

**❌ Ícones não aparecem no slide novo**
- Verifique se a sprite (`<svg class="oc-sprite">`) está no HTML
- Confirme que o `viewBox="0 0 16 16"` está correto

---

## 📱 Dispositivos Móveis

O editor funciona em mobile, mas é **otimizado para desktop**:
- Painel lateral é reduzido para 280px em telas pequenas
- Modal de edição fica responsivo (90% da largura)
- Use um teclado externo para melhor experiência

---

## 🔮 Futuro

Recursos planejados:
- [ ] Atalhos de teclado (Ctrl+Shift+E para abrir)
- [ ] Histórico de versões (stack de undo/redo)
- [ ] Preview ao vivo enquanto edita
- [ ] Gerenciador de mídia (upload de imagens)
- [ ] Validação de HTML
- [ ] Exportar como PDF
- [ ] Colaboração em tempo real (via WebSocket)

---

## Suporte

Para dúvidas ou bugs, consulte o código em `slide-editor.js` ou abra uma issue.
