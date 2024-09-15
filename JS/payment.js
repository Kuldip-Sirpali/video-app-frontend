
const creditButton = document.querySelector("#credit-button");
const payPalButton = document.querySelector("#paypal-button");

const useCredit = () => {


  window.location.href = "creditOption.html";
}
const usePaypal = () => {
  window.location.href = "payPalOption.html";
}
creditButton.addEventListener("click", useCredit);
payPalButton.addEventListener("click", usePaypal);

