# Sistema de Templates de Slides

Selecione templates pré-definidos ao criar novos slides ou crie personalizados conforme necessário.

---

## 🎯 Templates Pré-Definidos

Ao clicar em **"após"** ou **"antes"**, aparecem templates organizados por categoria:

### Estrutura
- **Capa** — Slide inicial com título grande, subtítulo e metadados
- **Divisor de Seção** — Separa seções principais da apresentação
- **Encerramento** — Slide final com Q&A ou contato
- **Exercício Prático** — Bloco de "mão na massa" com passos e código
- **Recursos e Links** — Lista de links úteis para fechar um módulo

### Padrão
- **Cabeçalho + Corpo** — Slide clássico (kicker, h2, subtitle, + conteúdo + marca)

### Layouts
- **Cards (2 colunas)** — Grade de cards com ícones e descrições
- **Figura + Texto** — Imagem lado a lado com explicação
- **Comparação (Sim/Não)** — Lado a lado mostrando bom vs ruim
- **Arquitetura / Diagrama** — Diagrama full-bleed com legenda ao lado

### Listas
- **Lista Numerada** — Agenda ou passos numerados (01, 02, 03...)
- **Lista com Ícones** — Tópicos marcados com Octicons

### Código
- **Código em Destaque** — Bloco de código grande com explicação
- **Terminal / CLI** — Simulação de comandos em um terminal

### Destaques
- **Citação** — Citação grande com atribuição
- **Perguntas Frequentes** — Pares de pergunta e resposta empilhados

### Dados
- **Métricas em Destaque** — Grid com números grandes e rótulos
- **Linha do Tempo** — Marcos verticais com data, título e descrição

---

## 📋 Como Usar Templates

### 1. Adicione um Novo Slide
Clique em **"após"** ou **"antes"** no painel do editor.

### 2. Escolha um Template
Um modal aparece mostrando todos os templates disponíveis, organizados por categoria.

Cada template mostra:
- **Nome** — Título do template
- **Descrição** — Breve explicação do uso
- **Badge** — "Padrão" ou "Personalizado"

### 3. Customize o Conteúdo
O slide é criado com o template. Clique em **"Editar"** para mudar:
- Títulos, descrições
- Conteúdo (texto, listas, etc.)
- Ícones e estilos

---

## 🎨 Criar Novos Templates

### Opção 1: Via JavaScript (Recomendado)

```javascript
SlideTemplates.addCustomTemplate(
  "meu-template",                    // ID único (sem espaços, sem caracteres especiais)
  "Meu Template Customizado",        // Nome exibido
  "Descrição breve do template",     // Descrição
  `<section>
    <div class="slide-head">
      <p class="kicker">Categoria</p>
      <h2>Título</h2>
    </div>
    <!-- seu HTML aqui -->
  </section>`
);
```

### Opção 2: Duplicar um Existente

```javascript
SlideTemplates.duplicateTemplate(
  "header_body",        // Template original
  "meu-custom",         // Novo ID
  "Meu Header Customizado"  // Novo nome
);
```

Depois edite o template conforme necessário.

---

## 💾 Persistência

Todos os templates personalizados são **salvos em `localStorage`** automaticamente.

### Limpar Templates Personalizados
```javascript
localStorage.removeItem("slide-templates:custom");
location.reload();
```

### Exportar Templates
```javascript
const json = SlideTemplates.exportTemplates();
console.log(json);
```

### Importar Templates
```javascript
const json = '{"meu-template": {...}}';
SlideTemplates.importTemplates(json);
```

---

## 🔧 API de Templates

### Obter um Template
```javascript
const template = SlideTemplates.getTemplate("cover");
// Retorna: {id, name, description, html, builtin}
```

### Listar Todos
```javascript
const templates = SlideTemplates.listTemplates();
// Retorna: {Estrutura: [...], Padrão: [...], ...}
```

### Adicionar Template Personalizado
```javascript
SlideTemplates.addCustomTemplate(id, name, description, html);
```

### Atualizar Template
```javascript
SlideTemplates.updateCustomTemplate("meu-template", {
  name: "Novo Nome",
  description: "Nova descrição",
  html: "<section>...</section>"
});
```

### Deletar Template
```javascript
SlideTemplates.deleteCustomTemplate("meu-template");
```

### Duplicar
```javascript
SlideTemplates.duplicateTemplate(sourceId, newId, newName);
```

---

## 📚 IDs dos Templates Pré-Definidos

Use estes IDs ao trabalhar com templates via JavaScript:

| ID | Nome |
|----|------|
| `cover` | Capa |
| `header_body` | Cabeçalho + Corpo |
| `cards_2col` | Cards (2 colunas) |
| `list_numbered` | Lista Numerada |
| `icon_list` | Lista com Ícones |
| `comparison` | Comparação (Sim/Não) |
| `quote` | Citação |
| `figure` | Figura + Texto |
| `divider` | Divisor de Seção |
| `closing` | Encerramento |
| `code_demo` | Código em Destaque |
| `terminal_demo` | Terminal / CLI |
| `architecture` | Arquitetura / Diagrama |
| `stats` | Métricas em Destaque |
| `timeline` | Linha do Tempo |
| `faq` | Perguntas Frequentes |
| `exercise` | Exercício Prático |
| `resources` | Recursos e Links |

---

## 🎓 Exemplos Práticos

### Criar Template para Equação Matemática
```javascript
SlideTemplates.addCustomTemplate(
  "equation",
  "Equação Matemática",
  "Slide com destaque para fórmula",
  `<section>
    <div class="slide-head">
      <p class="kicker">Fórmula</p>
      <h2>Equação</h2>
    </div>
    <div class="slide-body">
      <pre class="code-wrapper"><code>f(x) = x² + 2x + 1</code></pre>
      <p>Coloque a explicação aqui.</p>
    </div>
    <div class="slide-mark">
      <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true">
        <use href="#oc-mark-github"></use>
      </svg>
      <span>GitHub</span>
    </div>
  </section>`
);
```

### Criar Template com Video
```javascript
SlideTemplates.addCustomTemplate(
  "video-slide",
  "Slide com Vídeo",
  "Incorpora um vídeo do YouTube ou Vimeo",
  `<section>
    <div class="slide-head">
      <p class="kicker">Demonstração</p>
      <h2>Título do Vídeo</h2>
    </div>
    <div class="slide-body">
      <iframe width="100%" height="400" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="slide-mark">
      <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true">
        <use href="#oc-mark-github"></use>
      </svg>
      <span>GitHub</span>
    </div>
  </section>`
);
```

---

## ⚡ Dicas

- **Reutilize**: Crie templates para padrões que se repetem na apresentação
- **Organize**: Use IDs descritivos (`agenda-item`, `code-example`, etc.)
- **Documente**: Coloque descrições úteis para que outros entendam quando usá-lo
- **Backup**: Periodicamente exporte seus templates customizados:
  ```javascript
  copy(SlideTemplates.exportTemplates());
  ```

---

## 🚀 Futuro

Funcionalidades planejadas:
- [ ] UI visual para criar templates (sem editar HTML)
- [ ] Importar/exportar templates via arquivo JSON
- [ ] Compartilhar templates entre apresentações
- [ ] Prévia ao vivo do template antes de aplicar
- [ ] Versionamento de templates

---

## Suporte

Para dúvidas ou sugestões de novos templates, consulte:
- `slide-templates.js` — código fonte
- `slide-editor.js` — integração com editor
- `EDITOR_GUIDE.md` — guia geral do editor
