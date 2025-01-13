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

//index of -> returning array index, if there is not element return -1
console.log(fruits.indexOf("lemon")); //return -1
console.log(fruits.indexOf("banana", 0)); //return 1

//reverse -> reversing array from the last index
console.log(fruits.reverse());

//join -> merge all elements in array
console.log(fruits.join("+"));
console.log(counts.join("")); //-1 element cause pop in line 38

//sort -> default sort by string
let counts2 = [1, 2, 3, 5, 7, 0, 9, 8, 6, 4];
console.log(counts2.sort((a, b) => b - a));

//slice -> copy portion of an array, creating new array
let animals = ["a", "b", "c", "d", "e"];

//start from index 3 to last
let animalSlice = animals.slice(3);

//start from index 1 to 2
let animalSlice2 = animals.slice(1, 3);

//start from last index as much as 3 elements
let animalSlice3 = animals.slice(-3);

console.log(animalSlice);
console.log(animalSlice2);
console.log(animalSlice3);

//splice -> adding/removing element in middle of array
let animalsSplice = ["a", "b", "c", "d", "e"];
//splice(startIndex, deleteItems, replacementElements)
animalsSplice.splice(animalsSplice.length, 0, ...counts);
console.log(animalsSplice);

//reference type
//primitive data type => storing value in variable => value type variable
//modern data type => store reference/ address that pointing to memory that hold the value/elements

let numReference = [5, 6, 7, 8, 9];
let otherNumReference = numReference;

console.log(numReference);
console.log(otherNumReference);

//using const for arrays
//we cant change value of const, since primitive data type storing value in variables, cannot change the value
//when working with arrays, value can change because we are not change the reference value, but the value inside the reference
const arrayConst = [1, 2, 3, 4];
arrayConst.push(5); //works
//arrayConst = [] => not working
