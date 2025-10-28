# 🎨 Plataforma Web para ONGs: Círculo das Artes

**Repositório Oficial para a Entrega Final (Experiências Práticas I a IV)**

Este projeto consiste no desenvolvimento de uma plataforma web completa e profissional para a ONG fictícia **"Círculo das Artes"**, focada em transformação social através da cultura (música, teatro e artes visuais).

O desenvolvimento seguiu um processo profissional que priorizou o design **Mobile-First**, a **Modularidade** do código e a **Acessibilidade (WCAG 2.1)**.

---

## 💻 1. Estrutura e Tecnologias

### Arquitetura de Pastas
plataforma-ong-artes/ ├── index.html ├── projetos.html ├── cadastro.html ├── blog.html ├── assets/ │ ├── css/ # Módulos de Estilo (Base, Layout, Components) │ ├── js/ # Código JS Modular (main.js e módulos) │ └── imagens/ # Imagens otimizadas └── README.md # Documentação Técnica

### Tecnologias Principais

* **HTML5:** Estrutura semântica e acessível (WCAG).
* **CSS3:** Variáveis CSS (Design System), Flexbox, CSS Grid, Mobile-First.
* **JavaScript (ESM):** Modularização (`import`/`export`), manipulação do DOM e lógica da aplicação.

---

## ✅ 2. Requisitos Cumpridos por Entrega

### 🎨 Design & Estilização (Entrega I e II)

* **Design System:** Uso de Variáveis CSS (`:root`) para cores, tipografia e espaçamento modular.
* **Mobile-First:** A estilização foi desenvolvida priorizando telas pequenas, com uso de Média Queries para adaptações em tablets e desktops.
* **Leiaute:** Combinação de CSS Grid (estrutura principal) e Flexbox (componentes internos e cards).
* **Modularidade CSS:** Estilos divididos em arquivos menores (`base/`, `layout/`, `components/`) e consolidados via `@import`.

### 🚀 Interatividade e Funcionalidade (Entrega III)

* **Código Modular (JS):** Implementação de funcionalidades separadas em módulos (`menu.js`, `validacao.js`, etc.).
* **Funcionalidades:** Menu Hambúrguer interativo, Máscaras de Input (CPF, Telefone, CEP) e Validação de Formulário.
* **SPA Básico:** Uso de JavaScript para injeção dinâmica de Cards de Projeto (Templates) na página `projetos.html`.

### 🔒 Acessibilidade e Otimização (Entrega IV)

* **Modo Escuro (WCAG AA):** Implementação do toggle de tema via JavaScript e reescrita de variáveis CSS para garantir alto contraste.
* **Acessibilidade:** Uso de atributos **ARIA** e foco de teclado testado.
* **Otimização de Imagens:** Imagens comprimidas e responsivas.
* **Decisão Técnica (Minificação JS):** A tentativa de minificação e concatenação do JavaScript (`main.min.js`) resultou em erros de sintaxe irrecuperáveis (`ts(1005): ':' expected`). Optou-se por **manter os arquivos JS originais e modulares** (`main.js`), priorizando a **funcionalidade total da aplicação e os requisitos de acessibilidade** sobre a otimização de performance (minificação).
    * *Nota:* O **CSS minificado** (`estilo.min.css`) foi mantido.

---