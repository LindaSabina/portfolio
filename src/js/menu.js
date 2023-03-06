const menu = () => {

    const menu = document.querySelector('.site-menu')
    const menuButton = document.getElementById('btn')
    const menuLinks = document.querySelectorAll('.site-menu__link')
    const header = document.querySelector('.site-header')
    
    const toggleMenu = () => {
        menu.classList.toggle('site-menu--visible');

        if (menuButton.innerText == "MENU") {
            menuButton.innerText = "CLOSE"
        } else {
            menuButton.innerText = "MENU"
        }
    }   

    menuButton.addEventListener('click', toggleMenu);   
   
    const removeClassWhenClickOnLink = () => {
        menu.classList.remove('site-menu--visible')
        if (menuButton.innerText == "CLOSE") {
            menuButton.innerText = 'MENU'
        }
    }

    menuLinks.forEach(link => link.addEventListener('click', removeClassWhenClickOnLink))
    
}

menu()