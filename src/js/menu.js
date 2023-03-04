const menu = () => {

    const menu = document.querySelector('.site-menu')
    const menuButton = document.getElementById('btn')
    
    const toggleMenu = () => {
        menu.classList.toggle('site-menu--visible');

        if (menuButton.innerText == "MENU") {
            menuButton.innerText = "CLOSE"
        } else {
            menuButton.innerText = "MENU"
        }
    }   

    menuButton.addEventListener('click', toggleMenu);   
   
}

menu()