

// for showing data on the basis of radio btn value 
const checkedHtml = document.querySelector(".change-data-checked");
checkedHtml.innerHTML = `<p>We will send you an email with instructions on how to reset your password.</p>
    <input type="email" placeholder="name@example.com" class="fill-email">
    <button>Email Me</button>
    <p class="not-rem"><a href="remember.html">I don't remember my email or phone.</a></p>`;

let inputDataElement = document.querySelector('.input-check');
let emailBtn = document.querySelector('#click-email');
let smsBtn = document.querySelector('#click-sms')

emailBtn.addEventListener("click", (evt) => {
  console.log(emailBtn.value);
  if (inputDataElement.value) {
    checkedHtml.innerHTML = `<p>We will send you an email with instructions on how to reset your password.</p>
    <input type="email" placeholder="name@example.com" class="fill-email">
    <button>Email Me</button>
    <p class="not-rem"><a href="remember.html">I don't remember my email or phone.</a></p>`;
  }
  else {
    console.error("Not responding");
  }
})

smsBtn.addEventListener("click", (evt) => {
  console.log(smsBtn.value);
  if (inputDataElement.value) {
    checkedHtml.innerHTML = `<p>We will text you a verification code to reset your password. Message and data rates may apply.</p>
    <div class="js-number-with-code">
    <div class="country-box">
    <img class="country-images">
    <select class="country-codes-select">
    </select>
    </div>
    <input type="number" class="fill-email"  id="fill-sms-in">
    </div>
    <button>Text Me</button>
    <p class="not-rem"><a href="remember.html">I don't remember my email or phone.</a></p>`;
  }
  else {
    console.error("Not responding");
  }
  let countryCodeEle = document.querySelector('.country-codes-select');
  for (const country of countryData) {
    for (const countryCode in country) {
      const countryInfo = country[countryCode];

      let newOption = document.createElement("option");
      newOption.innerHTML = countryInfo.name+ " " + countryInfo.phone;
      newOption.value = countryInfo.phone;
      countryCodeEle.append(newOption);
      
      countryCodeEle.addEventListener
        ("change", (evt) => {
          updateFlag(evt.target);
      
        })


      const updateFlag = (element) => {
        let currCodeElement = element.value;

        let flagImg = `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${countryCode}.svg`;
        let img = document.querySelector(".country-images");
        img.src = flagImg;
      }
    }

  }
});













// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


// console.log(BASE_URL);










// const updateFlag = (element) => {
//   let img = element.parentElement.querySelector("img");
//   console.log(img);
//   img.src = flagImg;

// }

// window.onload=updateFlag();



