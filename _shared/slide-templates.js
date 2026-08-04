/**
 * slide-templates.js
 * 
 * Sistema de templates de slides:
 *   - Templates pré-definidos (cover, header, cards, etc.)
 *   - Criar, editar, deletar templates personalizados
 *   - Persistir em localStorage
 * 
 * Uso:
 *   SlideTemplates.getTemplate("cover")
 *   SlideTemplates.addCustomTemplate("meu-template", html)
 *   SlideTemplates.listTemplates()
 */

window.SlideTemplates = (() => {
  "use strict";

  const STORAGE_KEY = "slide-templates:custom";

  // Templates pré-definidos (imutáveis)
  const BUILTIN_TEMPLATES = {
    cover: {
      name: "Capa",
      category: "Estrutura",
      description: "Capa com título, subtítulo e metadados",
      html: `<section class="anchored-cover">
  <p class="cover-eyebrow">Seu Contexto</p>
  <h1>Título Principal</h1>
  <p class="cover-sub">Uma frase que descreve o tema.</p>
  <div class="cover-meta">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>Time &nbsp;·&nbsp; Mês Ano</span>
  </div>
</section>`
    },

    header_body: {
      name: "Cabeçalho + Corpo",
      category: "Padrão",
      description: "Slide padrão com kicker, título, descrição e conteúdo",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Categoria</p>
    <h2>Título do Slide</h2>
    <p class="subtitle">Descrição breve ou contexto</p>
  </div>
  <div class="slide-body">
    <ul>
      <li>Ponto 1</li>
      <li>Ponto 2</li>
      <li>Ponto 3</li>
    </ul>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    cards_2col: {
      name: "Cards (2 colunas)",
      category: "Layouts",
      description: "Grade de cards com ícones e descrições",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Benefícios</p>
    <h2>Título</h2>
    <p class="subtitle">Descrição dos tópicos</p>
  </div>
  <div class="slide-body">
    <div class="anchored-grid">
      <div class="anchored-card">
        <span class="card-ic"><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-zap"></use></svg></span>
        <h3>Velocidade</h3>
        <p>Descrição do primeiro card</p>
      </div>
      <div class="anchored-card">
        <span class="card-ic"><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-book"></use></svg></span>
        <h3>Aprendizado</h3>
        <p>Descrição do segundo card</p>
      </div>
      <div class="anchored-card">
        <span class="card-ic"><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-verified"></use></svg></span>
        <h3>Qualidade</h3>
        <p>Descrição do terceiro card</p>
      </div>
      <div class="anchored-card">
        <span class="card-ic"><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-people"></use></svg></span>
        <h3>Colaboração</h3>
        <p>Descrição do quarto card</p>
      </div>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    list_numbered: {
      name: "Lista Numerada",
      category: "Listas",
      description: "Agenda ou passos numerados",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Visão geral</p>
    <h2>Agenda</h2>
    <p class="subtitle">O que vamos cobrir</p>
  </div>
  <div class="slide-body">
    <div class="anchored-list">
      <div class="anchored-list-item">
        <span class="num">01</span>
        <span class="txt"><strong>Primeiro Ponto</strong><span>Descrição do primeiro tópico</span></span>
      </div>
      <div class="anchored-list-item">
        <span class="num">02</span>
        <span class="txt"><strong>Segundo Ponto</strong><span>Descrição do segundo tópico</span></span>
      </div>
      <div class="anchored-list-item">
        <span class="num">03</span>
        <span class="txt"><strong>Terceiro Ponto</strong><span>Descrição do terceiro tópico</span></span>
      </div>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    icon_list: {
      name: "Lista com Ícones",
      category: "Listas",
      description: "Lista de tópicos com Octicons",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Recursos</p>
    <h2>Características</h2>
    <p class="subtitle">O que está disponível</p>
  </div>
  <div class="slide-body">
    <ul class="icon-list">
      <li><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-check"></use></svg><span>Item 1</span></li>
      <li><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-check"></use></svg><span>Item 2</span></li>
      <li><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-check"></use></svg><span>Item 3</span></li>
      <li><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-check"></use></svg><span>Item 4</span></li>
    </ul>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    code_demo: {
      name: "Código em Destaque",
      category: "Código",
      description: "Bloco de código grande com explicação",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Código</p>
    <h2>Título do Exemplo</h2>
    <p class="subtitle">O que este trecho de código demonstra</p>
  </div>
  <div class="slide-body">
    <pre class="code-wrapper"><code>function saudacao(nome) {
  return \`Olá, \${nome}!\`;
}

console.log(saudacao("mundo"));</code></pre>
    <p>Explique aqui o que o código faz e por que isso importa.</p>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    terminal_demo: {
      name: "Terminal / CLI",
      category: "Código",
      description: "Simulação de comandos em um terminal",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Código</p>
    <h2>GitHub Copilot CLI em Ação</h2>
    <p class="subtitle">Comandos reais executados no terminal</p>
  </div>
  <div class="slide-body">
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span>
        <span class="terminal-dot dot-yellow"></span>
        <span class="terminal-dot dot-green"></span>
      </div>
      <pre class="terminal-body"><code><span class="terminal-prompt">$</span> gh copilot suggest "listar arquivos modificados"
<span class="terminal-out">git status --short</span>

<span class="terminal-prompt">$</span> git status --short
<span class="terminal-out"> M src/app.js
 M README.md</span></code></pre>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    comparison: {
      name: "Comparação (Sim/Não)",
      category: "Layouts",
      description: "Lado a lado comparando bom vs ruim",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Prática</p>
    <h2>Bom vs Ruim</h2>
    <p class="subtitle">O que fazer e o que evitar</p>
  </div>
  <div class="slide-body">
    <div class="anchored-split">
      <div>
        <p class="split-label bad">
          <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-x"></use></svg>
          Evitar
        </p>
        <pre class="code-wrapper"><code>console.log("ruim")</code></pre>
      </div>
      <div>
        <p class="split-label good">
          <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-check"></use></svg>
          Melhor
        </p>
        <pre class="code-wrapper"><code>console.log("bom")</code></pre>
      </div>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    quote: {
      name: "Citação",
      category: "Destaques",
      description: "Slide com citação em destaque",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Insight</p>
    <h2>Uma ideia importante</h2>
  </div>
  <div class="slide-body">
    <p class="anchored-quote">Coloque aqui uma citação inspiradora ou um ponto-chave da apresentação.</p>
    <p class="anchored-quote-cite">Atribuição ou Fonte — Ano</p>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    faq: {
      name: "Perguntas Frequentes",
      category: "Destaques",
      description: "Pares de pergunta e resposta empilhados",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Dúvidas comuns</p>
    <h2>Perguntas Frequentes</h2>
  </div>
  <div class="slide-body">
    <div class="faq-list">
      <div class="faq-item">
        <p class="faq-q"><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-comment-discussion"></use></svg>Pergunta 1?</p>
        <p class="faq-a">Resposta objetiva para a primeira pergunta.</p>
      </div>
      <div class="faq-item">
        <p class="faq-q"><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-comment-discussion"></use></svg>Pergunta 2?</p>
        <p class="faq-a">Resposta objetiva para a segunda pergunta.</p>
      </div>
      <div class="faq-item">
        <p class="faq-q"><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-comment-discussion"></use></svg>Pergunta 3?</p>
        <p class="faq-a">Resposta objetiva para a terceira pergunta.</p>
      </div>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    figure: {
      name: "Figura + Texto",
      category: "Layouts",
      description: "Imagem lado a lado com texto",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Exemplo</p>
    <h2>Título</h2>
    <p class="subtitle">Descrição</p>
  </div>
  <div class="slide-body">
    <div class="anchored-figure">
      <img src="https://octodex.github.com/images/codercat.jpg" alt="Descrição da imagem" loading="lazy" />
      <div class="figure-text">
        <p>Adicione seu texto explicativo aqui.</p>
        <ul>
          <li>Ponto 1</li>
          <li>Ponto 2</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    architecture: {
      name: "Arquitetura / Diagrama",
      category: "Layouts",
      description: "Diagrama full-bleed com legenda ao lado",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Arquitetura</p>
    <h2>Visão Geral do Sistema</h2>
    <p class="subtitle">Como os componentes se conectam</p>
  </div>
  <div class="slide-body">
    <div class="anchored-figure">
      <img src="https://octodex.github.com/images/founderoctocat.jpg" alt="Substitua pela imagem do diagrama de arquitetura" loading="lazy" style="width: 60%; max-height: 13em;" />
      <div class="figure-text">
        <p>Substitua a imagem acima pelo diagrama de arquitetura do seu sistema.</p>
        <ul>
          <li>Componente 1 — responsabilidade</li>
          <li>Componente 2 — responsabilidade</li>
          <li>Fluxo de dados entre eles</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    stats: {
      name: "Métricas em Destaque",
      category: "Dados",
      description: "Grid com números grandes e rótulos",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Métricas</p>
    <h2>Resultados em Números</h2>
    <p class="subtitle">Impacto medido após a adoção</p>
  </div>
  <div class="slide-body">
    <div class="stat-grid">
      <div class="stat-item">
        <p class="stat-number">85%</p>
        <p class="stat-label">Redução no tempo de código repetitivo</p>
      </div>
      <div class="stat-item">
        <p class="stat-number">3x</p>
        <p class="stat-label">Mais rápido para revisar PRs</p>
      </div>
      <div class="stat-item">
        <p class="stat-number">10k+</p>
        <p class="stat-label">Sugestões aceitas por mês</p>
      </div>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    timeline: {
      name: "Linha do Tempo",
      category: "Dados",
      description: "Marcos verticais com data, título e descrição",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Trajetória</p>
    <h2>Linha do Tempo</h2>
    <p class="subtitle">Principais marcos do projeto</p>
  </div>
  <div class="slide-body">
    <div class="anchored-timeline">
      <div class="timeline-item">
        <span class="timeline-dot"></span>
        <div class="timeline-content">
          <p class="timeline-phase">Fase 1 · Jan</p>
          <h3>Início</h3>
          <p>Descrição breve do primeiro marco.</p>
        </div>
      </div>
      <div class="timeline-item">
        <span class="timeline-dot"></span>
        <div class="timeline-content">
          <p class="timeline-phase">Fase 2 · Mar</p>
          <h3>Expansão</h3>
          <p>Descrição breve do segundo marco.</p>
        </div>
      </div>
      <div class="timeline-item">
        <span class="timeline-dot"></span>
        <div class="timeline-content">
          <p class="timeline-phase">Fase 3 · Jun</p>
          <h3>Consolidação</h3>
          <p>Descrição breve do terceiro marco.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    divider: {
      name: "Divisor de Seção",
      category: "Estrutura",
      description: "Separa seções da apresentação",
      html: `<section class="anchored-divider">
  <p class="divider-index">Parte um</p>
  <h2>Nome da Seção</h2>
  <p class="divider-note">Descrição breve desta parte da apresentação.</p>
</section>`
    },

    closing: {
      name: "Encerramento",
      category: "Estrutura",
      description: "Slide final (Q&A, contato)",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Encerramento</p>
    <h2>Perguntas?</h2>
    <p class="subtitle">Dúvidas, comentários ou próximos passos</p>
  </div>
  <div class="slide-body">
    <ul>
      <li><strong>Email:</strong> seu@email.com</li>
      <li><strong>GitHub:</strong> github.com/seu-usuario</li>
      <li><strong>LinkedIn:</strong> seu-perfil</li>
    </ul>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    exercise: {
      name: "Exercício Prático",
      category: "Estrutura",
      description: "Bloco de mão na massa com passos e código",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Prática</p>
    <h2>Mão na Massa</h2>
    <p class="subtitle">Aplique o que você acabou de aprender</p>
  </div>
  <div class="slide-body">
    <div class="exercise-box">
      <p class="exercise-title">
        <svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-zap"></use></svg>
        Mão na massa
      </p>
      <p>Descreva aqui o enunciado: o que o participante deve fazer.</p>
      <div class="anchored-list">
        <div class="anchored-list-item">
          <span class="num">01</span>
          <span class="txt"><strong>Passo 1</strong><span>Descrição do primeiro passo</span></span>
        </div>
        <div class="anchored-list-item">
          <span class="num">02</span>
          <span class="txt"><strong>Passo 2</strong><span>Descrição do segundo passo</span></span>
        </div>
      </div>
      <pre class="code-wrapper"><code>// Complete o código abaixo
function resolver() {
  // seu código aqui
}</code></pre>
    </div>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    },

    resources: {
      name: "Recursos e Links",
      category: "Estrutura",
      description: "Lista de links úteis para fechar um módulo",
      html: `<section>
  <div class="slide-head">
    <p class="kicker">Para saber mais</p>
    <h2>Recursos e Links</h2>
    <p class="subtitle">Continue aprendendo além deste módulo</p>
  </div>
  <div class="slide-body">
    <ul class="icon-list">
      <li><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-book"></use></svg><span><a href="https://docs.github.com/copilot" target="_blank" rel="noopener">Documentação do GitHub Copilot</a></span></li>
      <li><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-terminal"></use></svg><span><a href="https://github.com/github/copilot-cli" target="_blank" rel="noopener">GitHub Copilot CLI</a></span></li>
      <li><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-code"></use></svg><span><a href="https://github.com" target="_blank" rel="noopener">Repositório do projeto</a></span></li>
      <li><svg class="oc" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-comment-discussion"></use></svg><span><a href="https://github.com/orgs/community/discussions" target="_blank" rel="noopener">Comunidade e discussões</a></span></li>
    </ul>
  </div>
  <div class="slide-mark">
    <svg class="oc mark" viewBox="0 0 16 16" aria-hidden="true"><use href="#oc-mark-github"></use></svg>
    <span>GitHub</span>
  </div>
</section>`
    }
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Armazenamento de Templates Personalizados
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function loadCustomTemplates() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      console.warn("Erro ao carregar templates personalizados:", err);
      return {};
    }
  }

  function saveCustomTemplates(templates) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
    } catch (err) {
      console.warn("Erro ao salvar templates personalizados:", err);
    }
  }

  let customTemplates = loadCustomTemplates();

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // API Pública
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  function getTemplate(templateId) {
    // Primeiro, procura em templates pré-definidos
    if (BUILTIN_TEMPLATES[templateId]) {
      return { ...BUILTIN_TEMPLATES[templateId], builtin: true, id: templateId };
    }
    // Depois, procura em templates personalizados
    if (customTemplates[templateId]) {
      return { ...customTemplates[templateId], builtin: false, id: templateId };
    }
    return null;
  }

  function listTemplates() {
    const result = {};
    
    // Agrupar built-in por categoria
    for (const [id, template] of Object.entries(BUILTIN_TEMPLATES)) {
      const category = template.category || "Diversos";
      if (!result[category]) result[category] = [];
      result[category].push({
        id,
        name: template.name,
        description: template.description,
        builtin: true
      });
    }

    // Adicionar personalizados (categoria "Personalizados")
    if (Object.keys(customTemplates).length > 0) {
      if (!result["Personalizados"]) result["Personalizados"] = [];
      for (const [id, template] of Object.entries(customTemplates)) {
        result["Personalizados"].push({
          id,
          name: template.name,
          description: template.description,
          builtin: false
        });
      }
    }

    return result;
  }

  function addCustomTemplate(id, name, description, html) {
    if (!id || !name || !html) {
      throw new Error("Template requer: id, name, html");
    }
    // Validar que ID é válido (sem caracteres especiais)
    if (!/^[a-z0-9_-]+$/.test(id)) {
      throw new Error("ID deve conter apenas letras, números, _ ou -");
    }

    customTemplates[id] = { name, description: description || "", html };
    saveCustomTemplates(customTemplates);
    return { id, name, description, html, builtin: false };
  }

  function updateCustomTemplate(id, updates) {
    if (!customTemplates[id]) {
      throw new Error(`Template '${id}' não encontrado`);
    }
    customTemplates[id] = { ...customTemplates[id], ...updates };
    saveCustomTemplates(customTemplates);
    return customTemplates[id];
  }

  function deleteCustomTemplate(id) {
    if (!customTemplates[id]) {
      throw new Error(`Template '${id}' não encontrado`);
    }
    delete customTemplates[id];
    saveCustomTemplates(customTemplates);
    return true;
  }

  function duplicateTemplate(sourceId, newId, newName) {
    const source = getTemplate(sourceId);
    if (!source) {
      throw new Error(`Não foi possível encontrar template '${sourceId}'`);
    }
    return addCustomTemplate(newId, newName || `Cópia de ${source.name}`, source.description, source.html);
  }

  function exportTemplates() {
    return JSON.stringify(customTemplates, null, 2);
  }

  function importTemplates(json) {
    try {
      const imported = JSON.parse(json);
      customTemplates = { ...customTemplates, ...imported };
      saveCustomTemplates(customTemplates);
      return Object.keys(imported).length;
    } catch (err) {
      throw new Error(`Erro ao importar templates: ${err.message}`);
    }
  }

  // API pública
  return {
    getTemplate,
    listTemplates,
    addCustomTemplate,
    updateCustomTemplate,
    deleteCustomTemplate,
    duplicateTemplate,
    exportTemplates,
    importTemplates,
    BUILTIN_TEMPLATES
  };
})();
