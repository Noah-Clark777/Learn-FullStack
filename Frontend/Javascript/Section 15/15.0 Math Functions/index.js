//  num between 0 - .99

var n = Math.random();
n = n * 6;
// your num rounded down
n = Math.floor(n) + 1;
console.log(n);

var firstPerson = prompt("what is your name?");
var secondPerson = prompt("what is the other persons name?");

function calculateLoveScore() {
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;
}

calculateLoveScore();
