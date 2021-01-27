// HAMBURGER MENU
const openBurgerNav = document.querySelector('.hamburger-menu');

openBurgerNav.addEventListener('click', () => {
  const headerNav = document.querySelector('header');

  if (openBurgerNav.classList.contains('open')) {
    openBurgerNav.classList.remove('open');
    headerNav.classList.remove('open');
  } else {
    openBurgerNav.classList.add('open');
    headerNav.classList.add('open');
  }
});
