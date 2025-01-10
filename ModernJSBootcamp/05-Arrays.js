let lotto = [1, 2, 3, 4, 5, 6, 7, 8];

//accessing array
console.log(lotto[0]);

//accessing undefined index
console.log(lotto[10]);

//create a new array using Array objects
let arrNew = new Array(1, 2, 3, 4, 5);
console.log(arrNew);

//modyfing array
let strToTest = "Hello";
strToTest[0] = "h";
console.log(strToTest); // not changin
let strArrToTest = ["H", "e", "l", "l", "o"];
strArrToTest[0] = "h";
console.log(strArrToTest); // changing

//adding and removing elements in arrays
lotto.push(9, 15, 16, 17);
console.log(lotto);
lotto.pop();
console.log(lotto);
lotto.unshift(10, 11, 12);
console.log(lotto);
lotto.shift();
console.log(lotto);

//array concats -> merging two array
let fruits = ["apple", "banana", "strawberry"];
let counts = [1, 2, 3];

let fruitCounts = fruits.concat(counts).concat(strArrToTest);
console.log(fruitCounts);

counts.pop();

console.log(fruitCounts);
console.log(counts);

//includes => check if the array have elements that passed in parameter, have to match with element
console.log(fruitCounts.includes("apple")); //will return true
console.log(fruitCounts.includes(1)); //will return true
