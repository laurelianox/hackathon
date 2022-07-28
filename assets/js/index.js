const iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click',()=>{

    let menu = document.querySelector('#menu');
    let main = document.querySelector('main')

    if (menu.classList.contains('hide')){
        menu.classList.add('show');
        menu.classList.remove('hide');
        main.classList.add('menu-ativado')
        main.classList.remove('menu-desativado')
    } else {
        menu.classList.add('hide');
        menu.classList.remove('show');
        main.classList.add('menu-desativado')
        menu.classList.remove('menu-activeted')
    }
})