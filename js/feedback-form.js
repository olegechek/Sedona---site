var enterForm = document.querySelector('.feedback__form');
var popupBlock = document.querySelector('.popup-block');
var successBox = document.querySelector('.success-box');
var failureBox = document.querySelector('.failure-box');
var successBoxClose = document.querySelector('.success-box__button');
var failureBoxClose = document.querySelector('.failure-box__button');
var nameData = document.querySelector('[name=name]');
var surnameData = document.querySelector('[name=surname]');
var telData = document.querySelector('[name=tel]');
var emailData = document.querySelector('[name=email]');


var pageHeader = document.querySelector('.page-header');
var pageMain = document.querySelector('.page-main');
var pageFooter = document.querySelector('.page-footer');



enterForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  popupBlock.classList.remove('cutout');

  if (!nameData.value || !surnameData.value || !telData.value || !emailData.value) {

    failureBox.classList.remove('cutout');

    pageHeader.classList.add('dimmer');
    pageMain.classList.add('dimmer');
    pageFooter.classList.add('dimmer');

    nameData.classList.add('personal__data--failure');
    surnameData.classList.add('personal__data--failure');
    telData.classList.add('contact__data--failure');
    emailData.classList.add('contact__data--failure');

  } else {

    successBox.classList.remove('cutout');

    pageHeader.classList.add('dimmer');
    pageMain.classList.add('dimmer');
    pageFooter.classList.add('dimmer');

    nameData.classList.remove('personal__data--failure');
    surnameData.classList.remove('personal__data--failure');
    telData.classList.remove('contact__data--failure');
    emailData.classList.remove('contact__data--failure');
  }
});

successBoxClose.addEventListener('click', function (evt) {
  popupBlock.classList.add('cutout');
  successBox.classList.add('cutout');

  pageHeader.classList.remove('dimmer');
  pageMain.classList.remove('dimmer');
  pageFooter.classList.remove('dimmer');


});

failureBoxClose.addEventListener('click', function (evt) {
  popupBlock.classList.add('cutout');
  failureBox.classList.add('cutout');

  pageHeader.classList.remove('dimmer');
  pageMain.classList.remove('dimmer');
  pageFooter.classList.remove('dimmer');
});
