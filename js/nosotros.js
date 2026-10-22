const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('is-dark');
    themeButton.setAttribute('aria-pressed', String(isDark));
    themeButton.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
});