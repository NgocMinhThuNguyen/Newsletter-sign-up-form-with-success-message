const signUpForm = document.querySelector(".sign-up-form");
const signUpWrapper = document.querySelector(".sign-up-wrapper");
const successWrapper = document.querySelector(".success-wrapper");
const error = document.querySelector("label span");
const email = document.querySelector(".input-email");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
  if(validateEmail()) {
    signUpWrapper.setAttribute("data-visible", false);
    successWrapper.setAttribute("data-visible", true);
  }
})

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email.value === "") {
    return showError();
  } else {
    if(!(emailRegex.test(email.value))) {
      return showError();
    } else {
      return showSucces();
    }
  }
}

function showError() {
  email.classList.add("error");
  error.setAttribute("data-visible", true);
  return false;
}

function showSucces() {
  email.classList.remove("error");
  error.setAttribute("data-visible", false);
  return true;
}