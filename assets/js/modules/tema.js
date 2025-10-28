function updateToggleButton(theme) {
    const toggleButton = document.querySelector('#theme-toggle');
    if (toggleButton) {
        if (theme === 'dark-mode') {
            toggleButton.textContent = '☀️'; 
        } else {
            toggleButton.textContent = '🌙'; 
        }
    }
}

export function initThemeToggle() {
    const toggleButton = document.querySelector('#theme-toggle');
    const html = document.documentElement;

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        html.classList.add(currentTheme);
        updateToggleButton(currentTheme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            html.classList.add('dark-mode');
            updateToggleButton('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (html.classList.contains('dark-mode')) {
                html.classList.remove('dark-mode');
                html.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
                updateToggleButton('light-mode');
            } else {
                html.classList.remove('light-mode');
                html.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
                updateToggleButton('dark-mode');
            }
        });
    }
}