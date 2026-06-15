const green = document.querySelector("#green");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");
const btn = document.querySelectorAll(".btn");

const greenSound = new Audio("./sounds/green.mp3");
const redSound = new Audio("./sounds/red.mp3");
const yellowSound = new Audio("./sounds/yellow.mp3");
const blueSound = new Audio("./sounds/blue.mp3");
const wrongSound = new Audio("./sounds/wrong.mp3");

const soundMap = {
  green: greenSound,
  red: redSound,
  yellow: yellowSound,
  blue: blueSound,
};

function playSound(color) {
  const sound = soundMap[color];
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
}

let playerAnswer = [];
let simonArray = [];
let round = 0;

function getColor() {
  const color = Math.floor(Math.random() * 4) + 1;
  if (color === 1) simonArray.push(green);
  if (color === 2) simonArray.push(red);
  if (color === 3) simonArray.push(yellow);
  if (color === 4) simonArray.push(blue);
}

function displaySimon(arr) {
  arr.forEach((btn, index) => {
    setTimeout(() => {
      const color = btn.id;
      btn.classList.add("blink-animation");
      playSound(color);
      setTimeout(() => {
        btn.classList.remove("blink-animation");
      }, 300);
    }, index * 600);
  });
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    const color = e.target.id;
    playSound(color);
    e.target.classList.add("pressed");
    setTimeout(() => {
      e.target.classList.remove("pressed");
    }, 300);
    playerAnswer.push(e.target);

    const currentIndex = playerAnswer.length - 1;
    if (playerAnswer[currentIndex] !== simonArray[currentIndex]) {
      handleFail();
      return;
    }
    if (playerAnswer.length === simonArray.length) {
      setTimeout(handleSuccess, 1000);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "a" && round === 0) {
    document.querySelector("body").classList.remove("game-over");
    handleSuccess();
  }
});

function handleSuccess() {
  round++;
  document.querySelector("h1").innerHTML = "Round " + round;
  playerAnswer = [];
  getColor();
  displaySimon(simonArray);
}

function handleFail() {
  wrongSound.play();
  document.querySelector("body").classList.add("game-over");
  document.querySelector("h1").innerHTML = "Game Over, Press A to Restart";
  round = 0;
  simonArray = [];
  playerAnswer = [];
}
