//traditional example of recursive
function CountDown(num) {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  CountDown(num);
}

//iteration for factorial
let number = 5;
let temp = "";
for (let i = number; i > 0; i--) {
  temp += `${i} `;
}
console.log(temp);

//recursive factorial
function FactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * FactorialRecursive(number - 1);
}

let x = FactorialRecursive(3);
console.log(x);

//power function

function Power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base * exponent;
  }

  return base * Power(base, exponent - 1);
}

let z = Power(3, 3);
console.log(z);

//recursive with helper function

function outer(input) {
  let outerScopeVariable = [];

  function helper(helperInput) {
    //modifying the outerScopeVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopeVariable;
}

//recursive pure

function getOddPureRecursion(arr) {
  //tampung hasil untuk return
  let newArr = [];

  //false condition
  if (arr.length <= 0) {
    return newArr;
  }

  //logic pertama
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  //untuk mereturn array yang akan diconcat selama recursion
  newArr = newArr.concat(getOddPureRecursion(arr.slice(1)));

  //return hasil dari recursion
  return newArr;
}

//create productofArray
function productOfArray(arr) {
  let temp = 0;
  if (arr.length <= 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  function getSubsArr(arr) {
    temp += arr[0];
    arr.shift();
  }

  return temp;
}
