
const payWithPaypalBtn = document.querySelector(".continue-with-paypal-btn");
payWithPaypalBtn.addEventListener("click", () => {
  window.location.href = "https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-9JB47851GR146725A";
})