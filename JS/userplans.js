
const premiumPackage = document.querySelector("#premium-package");

premiumPackage.innerHTML = ` <div class="plan-info head-title">Most Popular</div>
<div class="plan-info text-one ">
  <span>Premium</span>
  <p>4K + HDR <span><i class="fa-regular fa-square-check package-checked premium-checked"></i><span></p>
 
</div>
<div class="plan-info   mini-texts-info">
  <span>Monthly price</span>
  <p>USD 9.99</p>
</div>
<div class="plan-info  mini-texts-info">
  <span>Video and sound quality</span>
  <p>Best</p>
</div>
<div class="plan-info  mini-texts-info">
  <span>Resolution</span>
  <p>4K (Ultra HD) + HDR</p>
</div>
<div class="plan-info   mini-texts-info">
  <span>Spatial audio (immersive sound)</span>
  <p>Included</p>
</div>
<div class="plan-info  mini-texts-info">
  <span>Supported devices</span>
  <p>TV, computer, mobile phone, tablet</p>
</div>
<div class="plan-info  mini-texts-info">
  <span>Devices your household can watch at the same time</span>
  <p>2</p>
</div>
<div class="plan-info  mini-texts-info">
  <span>Download devices</span>
  <p>6</p>
</div>`;

const standardPackage = document.querySelector("#standard-package");

standardPackage.innerHTML = `<div class="plan-info text-one">
<span>Standard</span>
<p>1080p <span><i class="fa-regular fa-square-check package-checked standard-checked"></i><span></p>
</div>


<div class="plan-info   mini-texts-info">
<span>Monthly price</span>
<p>USD 7.99</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Video and sound quality</span>
<p>Great</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Resolution</span>
<p>1080p (Full HD)</p>
</div>
<div class="plan-info   mini-texts-info">
<span>Supported devices</span>
<p>TV, computer, mobile phone, table</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Devices your household can watch at the same time</span>
<p>2</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Download devices</span>
<p>2</p>
</div>`;





const basicPackage = document.querySelector("#basic-packgage");

basicPackage.innerHTML = `<div class="plan-info text-one">
<span>Basic</span>
<p>720p <span><i class="fa-regular fa-square-check package-checked basic-checked"></i><span></p>
</div>
<div class="plan-info   mini-texts-info">
<span>Monthly price</span>
<p>USD 3.99</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Video and sound quality</span>
<p>Good</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Resolution</span>
<p>720p (HD)</p>
</div>
<div class="plan-info   mini-texts-info">
<span>Supported devices</span>
<p>TV, computer, mobile phone, tablet</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Devices your household can watch at the same time</span>
<p>1</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Download devices</span>
<p>1</p>
</div>`;






const mobilePackage = document.querySelector("#mobile-package");

mobilePackage.innerHTML = `<div class="plan-info text-one">
<span>Mobile</span>
<p>480p <span><i class="fa-regular fa-square-check package-checked mobile-checked"></i><span></p>
</div>
<div class="plan-info   mini-texts-info">
<span>Monthly price</span>
<p>USD 2.99</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Video and sound quality</span>
<p>Fair</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Resolution</span>
<p>480p</p>
</div>
<div class="plan-info   mini-texts-info">
<span>Supported devices</span>
<p>Mobile phone, tablet</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Devices your household can watch at the same time</span>
<p>1</p>
</div>
<div class="plan-info  mini-texts-info">
<span>Download devices</span>
<p>1</p>
</div>
`;






const premiumSelectedSign = document.querySelector(".head-title");
// const mainPremiumChec=document.querySelector('.package-checked');
const packageCheckedElePre = document.querySelector(".premium-checked");
const packageCheckedEleSta = document.querySelector(".standard-checked");
const packageCheckedEleBas = document.querySelector(".basic-checked");
const packageCheckedEleMob = document.querySelector(".mobile-checked");
let userPackage;//this is the value of the package that user has selected;
let package;//this is name of the package that user can select;




const selectPremiumPackage = (evt) => {
  premiumSelectedSign.style.backgroundColor = "#E50914";
  packageCheckedElePre.style.display = "inline"//added premium
  // hiding checkboxes of standard basic and mobile;
  packageCheckedEleSta.style.display = "none";
  packageCheckedEleBas.style.display = "none";
  packageCheckedEleMob.style.display = "none";
  package = "premium";
  userPackage = sessionStorage.setItem("Package", package);

}

const selectStandardPackage = (evt) => {
  premiumSelectedSign.style.backgroundColor = "#2c2b2b";
  packageCheckedEleSta.style.display = "inline"//added standard
  // hiding checkboxes of premium basic and mobile;
  packageCheckedElePre.style.display = "none";
  packageCheckedEleBas.style.display = "none";
  packageCheckedEleMob.style.display = "none";
  package = "standard";
  userPackage = sessionStorage.setItem("Package", package);

}
const selectBasicPackage = (evt) => {
  premiumSelectedSign.style.backgroundColor = "#2c2b2b";
  packageCheckedEleBas.style.display = "inline"//added basic
  // hiding checkboxes of  premium standard and mobile;
  packageCheckedElePre.style.display = "none";
  packageCheckedEleSta.style.display = "none";
  packageCheckedEleMob.style.display = "none";
  package = "basic";
  userPackage = sessionStorage.setItem("Package", package);
}

const selectMobilePackage = (evt) => {
  premiumSelectedSign.style.backgroundColor = "#2c2b2b";
  packageCheckedEleMob.style.display = "inline"//added  mobile
  // hiding checkboxes of  premium standard and basic ;
  packageCheckedElePre.style.display = "none";
  packageCheckedEleSta.style.display = "none";
  packageCheckedEleBas.style.display = "none";
  package = "mobile";
  userPackage = sessionStorage.setItem("Package", package);
}

const getPaymentPageBtn = document.querySelector(".js-get-payment-option");

const getPaymentPage = (evt) => {

  if (package == undefined) {
    alert("No package is selected");
  }
  else {
    window.location.href = 'paymentPicker.html';
  }
}


// calling functions with events

standardPackage.addEventListener("click", selectStandardPackage);
premiumPackage.addEventListener("click", selectPremiumPackage);
basicPackage.addEventListener("click", selectBasicPackage);
mobilePackage.addEventListener("click", selectMobilePackage);

getPaymentPageBtn.addEventListener("click", getPaymentPage);
