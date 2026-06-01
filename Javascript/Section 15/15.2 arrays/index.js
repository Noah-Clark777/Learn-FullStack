let names = ["noah", "jay", "james", "angela", "lara"];

console.log(names[0]);
let x = prompt("what is your name ");

if (names.includes(x)) {
  alert("welcome to the party " + x);
} else {
  alert("you are not on the guest list ");
}

let output = [];
let count = 1;

function fizzBuzz() {
  count++;
  if (count % 3 === 0 && count % 5 === 0) {
    count.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  console.log(output);
}
