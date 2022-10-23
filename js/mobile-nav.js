

var navMain = document.querySelector('.page-header__navigation');
var openButton = document.querySelector('.page-header__button');
var closeButton = document.querySelector('.page-header__close-button');

navMain.classList.remove('page-header__navigation--no-js');

openButton.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__navigation--mobile-closed')) {
      navMain.classList.remove('page-header__navigation--mobile-closed');
      }
    });

closeButton.addEventListener('click', function () {
    if (!navMain.classList.contains('page-header__navigation--mobile-closed')) {
       navMain.classList.add('page-header__navigation--mobile-closed');
      }
    });
