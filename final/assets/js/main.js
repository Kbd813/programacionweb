const openMenu = document.querySelector('.responsive-menu');
const closeMenu = document.querySelector('.responsive-menu__close');
const menu = document.querySelector('.navigation__menu');

openMenu.addEventListener('click', () => {
  menu.classList.toggle('flex');
  openMenu.classList.toggle('none');
});

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('flex');
  openMenu.classList.toggle('none');
});