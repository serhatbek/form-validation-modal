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

// SIGNIN SIGNUP MODALS
const signinModalBtn = document.querySelector('.sign-btns__login');
const signupModalBtn = document.querySelector('.sign-btns__signup');
const closeModalBtn = document.querySelector('.close-modal-btn');

const modal = document.querySelector('.modal');

const loginForm = document.querySelector('.signin-form');
const signupForm = document.querySelector('.signup-form');

signinModalBtn.addEventListener('click', () => openLoginModal());
signupModalBtn.addEventListener('click', () => openSignupModal());
closeModalBtn.addEventListener('click', () => closeModal());

function openLoginModal() {
  modal.classList.add('open');
  loginForm.classList.add('open');
}

function openSignupModal() {
  modal.classList.add('open');
  signupForm.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
  loginForm.classList.remove('open');
  signupForm.classList.remove('open');
}

// FORM VALIDATION

var pristine;
var pristine2;
window.onload = function () {
  var formLog = document.getElementById('form1');
  var form = document.getElementById('form2');

  pristine = new Pristine(form, {
    classTo: 'form-group',
    errorClass: 'has-danger',
    successClass: 'has-success',
    errorTextParent: 'form-group',
    errorTextTag: 'div',
    errorTextClass: 'text-help',
  });

  pristine2 = new Pristine(formLog, {
    classTo: 'form-group',
    errorClass: 'has-danger',
    successClass: 'has-success',
    errorTextParent: 'form-group',
    errorTextTag: 'div',
    errorTextClass: 'text-help',
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = pristine.validate();
    // alert('Form is valid: ' + valid);
  });

  formLog.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = pristine2.validate();
    // alert('Form is valid: ' + valid);
  });
};
