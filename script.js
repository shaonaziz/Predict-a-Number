"use strict";
let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const showMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", () => {
  const predict = Number(document.querySelector(".guess").value);

  if (!predict) {
    showMessage("🚫 Predict a Number ");
  } else if (predict === hiddenNumber) {
    document.querySelector(
      ".message"
    ).textContent = `🎉Congratulations ${hiddenNumber} is Correct ! `;
    document.querySelector(".number").textContent = hiddenNumber;
    document.querySelector("body").style.backgroundColor = "#74992e";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (predict !== hiddenNumber) {
    if (score > 0) {
      showMessage(
        predict < hiddenNumber ? "Too low predict ⬇" : "Too High predict ⬆"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      showMessage("You Lost the Game ! 😥");
    }
  }
});

// Reset Game
document.querySelector(".replay").addEventListener("click", () => {
  score = 20;
  hiddenNumber = Math.trunc(Math.random() * 20 + 1);
  showMessage("Start Guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#30343a";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});
//delete Number
document.querySelector(".remove").addEventListener("click", () => {
  document.querySelector(".guess").value = "";
});
