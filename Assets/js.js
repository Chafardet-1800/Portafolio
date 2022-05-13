const NavButton = document.querySelector('.Icon-Menu');
const NavMenu = document.querySelector('.nav-menu');
    
NavButton.addEventListener("click", () => {
    NavMenu.classList.toggle('nav-menu_visible')
})