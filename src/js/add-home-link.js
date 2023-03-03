const addHomeLink = () => {

    const heroMenu = document.querySelector('.hero__menu')
    const homeButton = document.querySelector('.home-button')

    const toggleHomeButtonClass = () => {
        if ( window.scrollY > 500 ) {
            homeButton.classList.add('home-button--visible')
        } else {
            homeButton.classList.remove('home-button--visible')
        }
    }

    window.addEventListener('scroll', toggleHomeButtonClass)

    const toggleHeroMenuClass = () => {
        if ( window.scrollY > 500 ) {
            heroMenu.classList.add('hero__menu-home-button')
        } else {
            heroMenu.classList.remove('hero__menu-home-button')
        }
    }

    window.addEventListener('scroll', toggleHeroMenuClass)

}

addHomeLink()