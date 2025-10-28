/* ================================================= */
/* MÓDULO: TEMA.JS - MODO ESCURO (ACESSÍVEL) */
/* Requisito: Criar versão de alto contraste e modo escuro acessível. */
/* ================================================= */

export function initThemeToggle() {
    const toggleButton = document.querySelector('#theme-toggle');
    const html = document.documentElement; // Usamos <html> para aplicar a classe

    // 1. Carrega a preferência do usuário (localStorage)
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        // Se houver preferência salva, aplica-a
        html.classList.add(currentTheme);
        // Atualiza o ícone do botão
        updateToggleButton(currentTheme);
    } else {
        // Se não houver, verifica a preferência do sistema operacional (apenas ao carregar)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            html.classList.add('dark-mode');
            updateToggleButton('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    }

    // 2. Adiciona o evento de clique ao botão
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (html.classList.contains('dark-mode')) {
                // Mudar para Light Mode
                html.classList.remove('dark-mode');
                html.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
                updateToggleButton('light-mode');
            } else {
                // Mudar para Dark Mode
                html.classList.remove('light-mode');
                html.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
                updateToggleButton('dark-mode');
            }
        });
    }
}

// 3. Função Helper para atualizar o ícone do botão
function updateToggleButton(theme) {
    const toggleButton = document.querySelector('#theme-toggle');
    if (toggleButton) {
        if (theme === 'dark-mode') {
            toggleButton.textContent = '☀️'; // Sol quando estiver no modo escuro
        } else {
            toggleButton.textContent = '🌙'; // Lua quando estiver no modo claro
        }
    }
}