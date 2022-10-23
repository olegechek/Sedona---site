var enterForm = document.querySelector('.feedback__form');
var successBox = document.querySelector('.success-box--wrapper');
var failureBox = document.querySelector('.failure-box--wrapper');
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
  successBox.classList.add('cutout');

  pageHeader.classList.remove('dimmer');
  pageMain.classList.remove('dimmer');
  pageFooter.classList.remove('dimmer');


});

failureBoxClose.addEventListener('click', function (evt) {
  failureBox.classList.add('cutout');

  pageHeader.classList.remove('dimmer');
  pageMain.classList.remove('dimmer');
  pageFooter.classList.remove('dimmer');
});
