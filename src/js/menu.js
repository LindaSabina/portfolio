const menu = () => {

    const menu = document.querySelector('.site-menu')
    const menuButton = document.getElementById('btn')
    const menuLink = document.querySelectorAll('.site-menu__link')
    
    const toggleMenu = () => {
        menu.classList.toggle('site-menu--visible');

        if (menuButton.innerText == "MENU") {
            menuButton.innerText = "CLOSE"
        } else {
            menuButton.innerText = "MENU"
        }
    }   

    menuButton.addEventListener('click', toggleMenu);
    
    const addClassWhenClickOnLink = () => {
        menu.classList.add('.site.menu--close')
    }

    menuLink.addEventListener('click', addClassWhenClickOnLink)
}

menu()