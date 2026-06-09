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
