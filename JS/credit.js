//input fields
const cardInputField = document.querySelector("#card-num-input");
const expirationDateField = document.querySelector("#exp");
const cvvField = document.querySelector("#user-cvv");
const fnameField = document.querySelector(".f-name-field");
const lnameField = document.querySelector(".l-name-field");
//required texts
const cardInputText = document.querySelector(".card");
const expireText = document.querySelector(".expire");
const cvvText = document.querySelector(".cvv-text");
const fnameText = document.querySelector(".fname");
const lnameText = document.querySelector(".lname");

let userCardValue; //users cards value
const checkCardField = () => {
  userCardValue = cardInputField.value;
  window.sessionStorage.setItem("Card-No", userCardValue); ///store cardvalue in session storage
  if (cardInputField.value === "") {
    cardInputText.style.visibility = "visible";
  } else {
    cardInputText.style.visibility = "hidden";
  }
};

let expireDate; //user expire date values
const checkExpireDateField = () => {
  expireDate = expirationDateField.value;
  window.sessionStorage.setItem("Expire_date", expireDate);
  if (expirationDateField.value === "") {
    expireText.style.visibility = "visible";
  } else {
    expireText.style.visibility = "hidden";
  }
};

let userCvv; //user Cvv
const checkCvvField = () => {
  userCvv = cvvField.value;
  window.sessionStorage.setItem("UserCvv", userCvv);
  if (cvvField.value === "") {
    cvvText.style.visibility = "visible";
  } else {
    cvvText.style.visibility = "hidden";
  }
};

let userFname; //user first name
const checkFnameField = () => {
  userFname = fnameField.value;
  window.sessionStorage.setItem("Fname", userFname);
  if (fnameField.value === "") {
    fnameText.style.visibility = "visible";
  } else {
    fnameText.style.visibility = "hidden";
  }
};

let userLname; //user last name
const checkLname = () => {
  userLname = lnameField.value;
  window.sessionStorage.setItem("Lname", userLname);
  if (lnameField.value === "") {
    lnameText.style.visibility = "visible";
  } else {
    lnameText.style.visibility = "hidden";
  }
};

const startMembershipBtn = document.querySelector(".start-membership-btn");
startMembershipBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  checkCardField();
  checkExpireDateField();
  checkCvvField();
  checkFnameField();
  checkLname();
  if (
    fnameField.value &&
    fnameField.value &&
    cardInputField.value &&
    expirationDateField.value &&
    cvvField.value
  ) {
    window.location.href = "https://www.youtube.com/";
  } else {
    console.error("Fill all the data correctly");
  }
});
