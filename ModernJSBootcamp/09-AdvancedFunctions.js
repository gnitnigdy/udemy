//function scope
/*
    function helpMe(){
        let msg = 'iam number 5';
        console.log(msg);
    }
    console.log(msg) // msg is not defined because out of function scope
*/

//function can be added in array / objects
/*
    const divide = function(x,y){return x/y};
    const multipy = function(x,y){return x*y};

    const operations = [divide,multipy];

    const things = {
        doSomething: divide;
    }
    
    this.doSomething(3,4)
*/

//higher order functions -> function that operate on/with other functions.
//example: accept other functions as arguments, function return a function

//function as arguments

function laugh() {
  console.log(`hahaha`);
}

function cry() {
  console.log(`hihihi`);
}

function callTwice(func) {
  func();
  func();
}

//callTwice(laugh);

function repeatNTimes(func, nums) {
  for (let i = 0; i < nums; i++) {
    func();
  }
}

//repeatNTimes(laugh, 10);

//function as returning value

function pickOne(func1, func2, nums) {
  if (nums === 1) {
    return func1();
  } else {
    return func2();
  }
}

pickOne(laugh, cry, 3);

//function return as function factory

function multiplyBy(num) {
  return function (num2) {
    return num * num2;
  };
}

const triple = multiplyBy(3);
console.log(triple(5));

function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);
console.log(isChild(17));

//Callbacks Function -? a function passed into another function as an argument. which is then invoked inside the outer function
