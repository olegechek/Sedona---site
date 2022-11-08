

var navMain = document.querySelector('.page-header__navigation');
var openButton = document.querySelector('.page-header__button');
var closeButton = document.querySelector('.page-header__close-button');

navMain.classList.remove('page-header__navigation--no-js');
openButton.classList.remove('page-header__button--no-js');
closeButton.classList.remove('page-header__close-button--no-js');

openButton.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__navigation--mobile-closed')) {
    navMain.classList.remove('page-header__navigation--mobile-closed');
    openButton.classList.add('cutout');
  }
});

closeButton.addEventListener('click', function () {
  if (!navMain.classList.contains('page-header__navigation--mobile-closed')) {
    navMain.classList.add('page-header__navigation--mobile-closed');
    openButton.classList.remove('cutout');
  }
});
