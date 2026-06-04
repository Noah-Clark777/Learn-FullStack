const numberOfDrums = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        let kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
      case "s":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
}

function BellBoy(name, age, languages) {
  this.name = name;
  this.age = age;
  this.languages = languages;
}

let bellboy1 = new BellBoy("timmy", 19, ["english", "spanish"]);

function HouseKeeper(name, experence, skill) {
  this.name = name;
  this.experence = experence;
  this.skill = skill;
  this.clean = function () {
    alert("cleaning the room");
  };
}

let houseKeeper1 = new HouseKeeper("lulu", 2, ["beds", "bathrooms"]);
houseKeeper1.clean();
