//functions -> reusable procedures
//allow us to write reusable, modular code
//define a chunk of code that we can then execute at a later point

//function definition
/*
    function funcName(parameters/arguments){
        do something
        return something -> not returning value means void functions
    }
*/

//function execution : funcName(args) => if function not followed by parentheses it means not to be executed but referenced

function rollDice() {
  let values = Math.floor(Math.random() * 6) + 1;
  return values;
}

let rollDiceValues = rollDice();

for (let i = 0; i < 6; i++) {
  console.log(`Rolled ${i + 1} : ${rollDice()}`);
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("damenta");
//if function have argument, then you do not pass anything it will give you undefined, not error
//but it maybe not work in any other programming language
greet();

//parameter is when you defined that function expect value, when passed to logic inside function the name is arguments
//order in parameters/arguments is matter, it defined each value to be passed on logic inside the function

function divideNumbers(num1, num2) {
  return num1 / num2;
}

let divideNumbers1 = divideNumbers(4, 2);
let divideNumbers2 = divideNumbers(2, 4);
//order creating different results
console.log(divideNumbers1, divideNumbers2);

//code after return keyword will not be executed
function isPurple(color) {
  console.log(`before return`);
  return color.toLowerCase() === "purple" ? true : false;
  console.log(`after return`);
}

let resultColor = isPurple("Purple");
console.log(resultColor);

//practice section

//function challenge 2 -> average numbers

function averageNumbersOfArray(arr) {
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
  }

  return tempSum / arr.length;
}

let resultOfaverageNumbersOfArray = averageNumbersOfArray([
  75, 76, 80, 95, 100,
]);

let resultOfaverageNumbersOfArray2 = averageNumbersOfArray([0, 50]);
console.log(resultOfaverageNumbersOfArray);
console.log(resultOfaverageNumbersOfArray2);

//function challenge 4 -> get Playing Cards

function getPlayingCard() {
  let valueOfCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let suitOfCard = ["spade", "heart", "diamonds", "clubs"];

  function getRandomCard() {
    let randomValueNumber = Math.floor(Math.random() * valueOfCard.length);
    let randSuitNumber = Math.floor(Math.random() * suitOfCard.length);

    return [randomValueNumber, randSuitNumber];
  }

  let objCard = getRandomCard();

  return { value: valueOfCard[objCard[0]], suit: suitOfCard[objCard[1]] };
}

let playingCards = getPlayingCard();
console.log(playingCards);
