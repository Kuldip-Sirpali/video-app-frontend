// // for sign up validation sample
const setEmailInput = document.querySelector(".get-email");
const validateEmailButton = document.querySelector(".email-validate-jump");
//we cannot access the value of email if it is defined inside function
let emailValue;
validateEmailButton.addEventListener("click", (evt) => {
  emailValue = setEmailInput.value;
  const isValidEmail = /\S+@\S+\.\S+/.test(emailValue);
  if (isValidEmail) {
    window.location.href = "https://kuldip-sirpali.github.io/video-app-frontend/HTML/signUp.html";
    sessionStorage.setItem("email", emailValue); //to store data in session storage
  } else {
    alert("Invalid email. Please enter a valid email address.");
  }
});

//This function is used to automatically show email when user input email in landing page
const changePassword = () => {
  const getEmailInput = document.querySelector(".db-email ");
  let userEmail = sessionStorage.getItem("email", emailValue); //to get data form session
  getEmailInput.value = userEmail;
};
window.addEventListener("load", changePassword());

//for show and hide password
const showPassEle = document.querySelector(".show-hide-pw-box");
const passwordInputEle = document.querySelector("#user-pw");

let showPw = true;
showPassEle.addEventListener("click", (evt) => {
  if (showPw) {
    showPassEle.innerHTML = `<i class="fa-regular   fa-eye"></i>`;
    passwordInputEle.type = "password";
    showPw = false;
  } else {
    showPassEle.innerHTML = `<i class="fa-regular  fa-eye-slash"></i>`;
    passwordInputEle.type = "text";
    showPw = true;
  }
});

//for next page after setting password
let pwAfterBtn = document.querySelector(".get-pw-and-next");
let userPassword;
const criteriaContainer = document.querySelector(".pw-criteria-text p");
pwAfterBtn.addEventListener("click", () => {
  userPassword = passwordInputEle.value;
  let storeUserPw = sessionStorage.setItem("Password", userPassword);
  const passwordCriteria =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordCriteria.test(userPassword)) {
    criteriaContainer.innerHTML =
      "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character";
    return;
  }
  alert("Password is valid!");
  window.location.href = "getPlans.html";
});

// const changePassword = () => {
//   const dataBasedEmailEle = document.querySelector("#data-based-email");
//   dataBasedEmailEle.value = emailInput.value;
//   console.log(dataBasedEmailEle.value);
// }

// Event Listener for Email Validation
// const emailInput = document.querySelector(".get-email");
// const validateEmailButton = document.querySelector(".email-validate-jump");

// validateEmailButton.addEventListener('click', (evt) => {
//   const emailValue = emailInput.value; // Declare emailValue using const or let
//   const isValidEmail = /\S+@\S+\.\S+/.test(emailValue);

//   if (isValidEmail) {
//     // If email is valid, proceed with sign-up
//     window.location.href = "signUP.html";
//     changePassword(); // Call changePassword only if email is valid
//   } else {
//     alert('Invalid email. Please enter a valid email address.');
//   }
// });
