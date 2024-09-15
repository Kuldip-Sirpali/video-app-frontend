const checkedHtml = document.querySelector(".change-data-checked");
checkedHtml.innerHTML = `<p>We will send you an email with instructions on how to reset your password.</p>
    <input type="email" placeholder="name@example.com" class="fill-email">
    <button>Email Me</button>
    <p class="not-rem"><a href="remember.html">I don't remember my email or phone.</a></p>`;

const updateFlag = (countryCode) => {
  let flagImg = `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${countryCode}.svg`;
  let img = document.querySelector(".country-images");
  img.src = flagImg;
};


let inputDataElement = document.querySelector('.input-check');
let emailBtn = document.querySelector('#click-email');
let smsBtn = document.querySelector('#click-sms');
const handleEmailButtonClick = () => {
  // console.log(emailBtn.value);
  if (inputDataElement.value) {
    checkedHtml.innerHTML = `<p>We will send you an email with instructions on how to reset your password.</p>
            <input type="email" placeholder="name@example.com" class="fill-email">
            <button>Email Me</button>
            <p class="not-rem"><a href="remember.html">I don't remember my email or phone.</a></p>`;
  } else {
    console.error("Email input is empty");
  }
};

const handleSmsButtonClick = () => {
  // console.log(smsBtn.value);
  if (inputDataElement.value) {
    checkedHtml.innerHTML = `<p>We will text you a verification code to reset your password. Message and data rates may apply.</p>
            <div class="js-number-with-code">
                <div class="country-box">
                    <img class="country-images" alt="Flag" src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg">
                    <select class="country-codes-select">
                    <option value="NP">Nepal +977 </option>
                    </select>
                </div>
                <input type="number" class="fill-email" id="fill-sms-in">
            </div>
            <button>Text Me</button>
            <p class="not-rem"><a href="remember.html">I don't remember my email or phone.</a></p>`;

    const countryCodeEle = document.querySelector('.country-codes-select');
    for (const country of countryData) {
      for (const countryCode in country) {
        const countryInfo = country[countryCode];
        // console.log(countryInfo);
        let newOption = document.createElement("option");
        newOption.innerHTML = countryInfo.name + " " + countryInfo.phone;
        newOption.value = countryCode; // Update to use countryCode
        countryCodeEle.append(newOption);
      }
    }

    // updateFlag(countryCodeEle.value); // Initial flag update based on default value

    countryCodeEle.addEventListener("change", (evt) => {
      updateFlag(evt.target.value); // Update flag on change
    });
  } 
  else {
    console.error("SMS input is empty");
  }
};
emailBtn.addEventListener("click", handleEmailButtonClick);
smsBtn.addEventListener("click", handleSmsButtonClick);
