const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

if (menuIcon && navMenu) {
    menuIcon.addEventListener('click', () => {
    
        navMenu.classList.toggle('active');
    });
}