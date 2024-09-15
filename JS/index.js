
let faqButton1 = document.querySelector('.btn-one');
let faqButton2 = document.querySelector('.btn-two');
let faqButton3 = document.querySelector('.btn-three');
let faqButton4 = document.querySelector('.btn-four');
let faqButton5 = document.querySelector('.btn-five');
let faqButton6 = document.querySelector('.btn-six');

let dropAnswerOne = document.querySelector('.drop-answer-one ');
let dropAnswerTwo = document.querySelector('.drop-answer-two ');
let dropAnswerThree = document.querySelector('.drop-answer-three ');
let dropAnswerFour = document.querySelector('.drop-answer-four ');
let dropAnswerFive = document.querySelector('.drop-answer-five ');
let dropAnswerSix = document.querySelector('.drop-answer-six ');
let faqBody = document.querySelector(".hero6");

faqButton1.addEventListener("click", (evt) => {
  dropAnswerOne.classList.toggle("js-drop-answer");
});

faqButton2.addEventListener("click", (evt) => {
  dropAnswerTwo.classList.toggle("js-drop-answer");
});
faqButton3.addEventListener("click", (evt) => {
  dropAnswerThree.classList.toggle("js-drop-answer");
});

faqButton4.addEventListener("click", (evt) => {
  dropAnswerFour.classList.toggle("js-drop-answer");
});
faqButton5.addEventListener("click", (evt) => {
  dropAnswerFive.classList.toggle("js-drop-answer");
});
faqButton6.addEventListener("click", (evt) => {
  dropAnswerSix.classList.toggle("js-drop-answer");
  faqBody.classList.toggle('js-hero-6');

});









