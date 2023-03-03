const headerScroll = () => {

    const header = document.querySelector('.site-header')

    const toggleHeaderClass = () => {

        
        if ( window.scrollY > 200 ) {

            header.classList.add('site-header--scroll')

        } else {

            header.classList.remove('site-header--scroll')

        }

    }

    window.addEventListener('scroll', toggleHeaderClass)


}

headerScroll()