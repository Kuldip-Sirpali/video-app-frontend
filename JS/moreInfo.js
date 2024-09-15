let moreBtn = document.querySelector('.more-btn');
let moreTexts = document.querySelector('.more-texts');
moreBtn.addEventListener("click", (evt) => {

  if (moreBtn) {

    moreTexts.classList.toggle('js-more-texts');
  }
  else {

    console.error("Error");
  }
});