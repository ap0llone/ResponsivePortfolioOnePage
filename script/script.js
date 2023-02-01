const menu = document.querySelector('#menu-icon');
const headerList = document.querySelector('.header-list');
const header = document.querySelector('header');

menu.addEventListener('click', function(){
    menu.classList.toggle('bx-x');
    headerList.classList.toggle('open');
});

menu.addEventListener('click', function(){
    header.classList.toggle('header-open');
});

window.addEventListener('scroll', function(){
    menu.classList.remove('bx-x');
    headerList.classList.remove('open');
    header.classList.remove('header-open')
});