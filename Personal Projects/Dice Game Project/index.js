function winner() {
  const player1 = Math.floor(Math.random() * 6 + 1);
  const player2 = Math.floor(Math.random() * 6 + 1);

  document
    .querySelector("#player1")
    .setAttribute("src", `./images/dice${player1}.png`);

  document
    .querySelector("#player2")
    .setAttribute("src", `./images/dice${player2}.png`);

  if (player1 > player2) {
    document.querySelector(".header").innerHTML = "🚩 Player 1 Wins ";
  } else if (player2 > player1) {
    document.querySelector(".header").innerHTML = "Player 2 Wins 🚩";
  } else {
    document.querySelector(".header").innerHTML = "Draw";
  }
}

winner();
