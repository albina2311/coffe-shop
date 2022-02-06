const burger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navlist = document.querySelector('.nav_list');

burger.addEventListener('click', () => {
    navlist.classList.add('active');
    close.classList.add('active');
    document.body.style.overflow = 'hidden';

    close.addEventListener('click', () => {
        navlist.classList.remove('active');
        close.classList.remove('active');
        document.body.style.overflow = 'visible';
    })
})