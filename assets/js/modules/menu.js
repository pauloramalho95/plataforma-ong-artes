/* ================================================= */
/* MÓDULO: MENU.JS - MENU HAMBÚRGUER */
/* Requisito: Implementar navegação mobile com menu hambúrguer (funcionalidade) */
/* ================================================= */

// Função que será exportada e chamada em main.js
export function initMenuMobile() {
    // 1. Seleciona os elementos do DOM
    const menuToggle = document.querySelector('.js-menu-toggle');
    const menuNav = document.querySelector('.js-menu');
    const html = document.documentElement; // Usado para travar o scroll

    if (menuToggle && menuNav) {
        // 2. Adiciona o evento de clique ao botão
        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'is-open' no botão (para animação do ícone)
            menuToggle.classList.toggle('is-open');

            // Alterna a classe 'is-open' no menu de navegação (para visibilidade e animação)
            menuNav.classList.toggle('is-open');

            // Trava/Destrava o scroll do body/html quando o menu está aberto (melhor UX)
            if (menuNav.classList.contains('is-open')) {
                html.style.overflowY = 'hidden';
            } else {
                html.style.overflowY = 'initial';
            }
        });

        // Opcional: Fechar o menu ao clicar em um link (se for navegação dentro da mesma página)
        menuNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-open');
                menuNav.classList.remove('is-open');
                html.style.overflowY = 'initial';
            });
        });

    } else {
        console.warn("Elemento de Menu Mobile (js-menu-toggle ou js-menu) não encontrado no HTML.");
    }
}