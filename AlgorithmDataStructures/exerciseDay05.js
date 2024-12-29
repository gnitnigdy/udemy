// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

console.log("==========");
console.log("Answer 1:");
console.log("==========");
function getCalcResults(arr) {
  let arrTemp = arr.sort((a, b) => a - b);
  let avgArr = arrTemp.reduce((acc, curr) => acc + curr) / arrTemp.length;
  return {
    lowest: arrTemp[0],
    highest: arrTemp[arrTemp.length - 1],
    average: avgArr,
  };
  console.log(arrTemp);
}

function getCalcResultsWithoutSort(arr) {
  let arrTemp = arr;
  let avgArr = arrTemp.reduce((acc, curr) => acc + curr) / arrTemp.length;
  return {
    lowest: arr.min(),
    highest: arr.max(),
    average: avgArr,
  };
  console.log(arrTemp);
}

let x = getCalcResults([12, 5, 23, 18, 4, 45, 32]);
console.log(x);

let xWithoutSort = getCalcResults([12, 5, 23, 18, 4, 45, 32]);
console.log(xWithoutSort);
console.log("");

console.log("==========");
console.log("Answer 2:");
console.log("==========");

let arrFruits = ["apple", "banana", "cherry", "date"];
let tempStr = "";
for (let i = 0; i < arrFruits.length; i++) {
  if (i === arrFruits.length - 1) {
    tempStr += `and ${arrFruits[i]}`;
  } else {
    tempStr += `${arrFruits[i]}, `;
  }
}
console.log(tempStr);
console.log("");

console.log("==========");
console.log("Answer 3:");
console.log("==========");

let coba = [0, 2, 1, 5, 3, 4];
// coba.forEach((num, index, arr) => (num = arr[arr[index]]));
// console.log(coba);

coba.map(function (part, index, theArray) {
  theArray[index] = part;
});

console.log(coba);

var getConcatenation = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length * 2; i++) {
    nums.push(nums[counter]);
    counter++;
  }
  return nums;
};

let getConcatenationResult = getConcatenation([1, 2, 1]);
console.log(getConcatenationResult);
