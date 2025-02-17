//forEach -> looping on array but not returning a new array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

numbers.forEach((item) => console.log(item ** 2));
console.log(numbers);

//map -> create a new array with the results of calling a callback on every element in the array
const mappedArray = numbers.map((item) => item ** 3);
console.log(mappedArray);

const mappedDetailArray = numbers.map((item, index) => {
  return {
    number: item,
    indexValue: index,
    isEven: item % 2 === 0,
  };
});

console.log(mappedDetailArray);

const mappedOddEvenArray = numbers.map((item) =>
  item % 2 == 0 ? "Even" : "Odd"
);
console.log(mappedOddEvenArray);

//find -> returns the value of the first element in the array that satisfies the provided testing function
const movies = [
  "Harry Potter and The Goblet of Fire",
  "Mr and Mrs Smith",
  "Mrs Doubtfire",
  "2 Fast 2 Furious",
  "2 Gether",
];

const movie1 = movies.find((item) => item.includes("2"));
const movie2 = movies.find((item) => item.indexOf("2") === 0);
console.log(movie1);
console.log(movie2);

//filter -> create a new array with all elements that pass the test implemented by the provided function
const filteredNumberArray = numbers.filter((item) => item % 2 > 0);
console.log(filteredNumberArray);

//every -> test whether ALL elements in the array pass the provided function. it returns a boolean value
const words = ["dog", "dig", "log", "bag", "wag"];

let testEvery1 = words.every((word) => word.length === 3);
console.log(testEvery1);

//every -> test whether ANY elements in the array pass the provided function. it returns a boolean value
let testSome1 = words.some((word) => word[1] === "o");
console.log(testSome1);

//reduce -> providing single value from array
//test case using reduce to find max value of array

const arrayReduce = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxArrayReduce = arrayReduce.reduce((max, currValue) => {
  if (currValue > max) {
    return currValue;
  }
  return max;
});

console.log(`hasil max array adalah : ${maxArrayReduce}`);

//tallying using reduce
const votes = ["y", "y", "y", "n", "n"];

const votesReduce = votes.reduce((accumulator, current) => {
  accumulator[current] = (accumulator[current] || 0) + 1;
  return accumulator;
}, {});

console.log(votesReduce);
