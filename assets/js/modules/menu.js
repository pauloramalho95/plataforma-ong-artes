export function initMenuMobile() {
    const menuToggle = document.querySelector('.js-menu-toggle');
    const menuNav = document.querySelector('.js-menu');
    const html = document.documentElement;

    if (menuToggle && menuNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-open');
            menuNav.classList.toggle('is-open');

            if (menuNav.classList.contains('is-open')) {
                html.style.overflowY = 'hidden';
            } else {
                html.style.overflowY = 'initial';
            }
        });

        menuNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-open');
                menuNav.classList.remove('is-open');
                html.style.overflowY = 'initial';
            });
        });
    }
}