let output = [];
let count = 1;

function fizzBuzzV2() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      count.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(ouput);
}

function beer() {
  let bottles = 100;
  while (bottles > 0) {
    console.log(
      `${bottles} bottles of beer on the wall, take one down pass it around ${bottles - 1} bottles of beer on the wall`,
    );
    bottles--;
  }
}

function fizzBuzzV3() {
  for (let i = 0; i <= 100; i++) {
    if (count % 3 === 0 && count % 5 === 0) {
      count.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}

var output = [];

if (n === 1) {
  output = [0];
} else if (n === 2) {
  ouput = [0, 1];
} else {
  for (let i = 2; i < n; i++) {
    output.push(output[output.length - 1] + output[output.length - 2]);
  }
}

return output;
