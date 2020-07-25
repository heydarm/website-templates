var burger = document.querySelector('.header__burger');
var nav = document.querySelector('.header__nav');

burger.addEventListener('mouseenter', function() {
    nav.classList.add('header__nav_active');
})

burger.addEventListener('mouseleave', function() {
    nav.classList.remove('header__nav_active');
})

nav.addEventListener('mouseenter', function() {
    nav.classList.add('header__nav_active');
})

nav.addEventListener('mouseleave', function() {
    nav.classList.remove('header__nav_active');
})