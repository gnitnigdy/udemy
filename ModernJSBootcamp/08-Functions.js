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
