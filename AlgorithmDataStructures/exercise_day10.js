/* 1. Find the unique values.
 */
function unique(arr) {
  /* your code */
  let arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (arrResult.indexOf(arr[i]) === -1) {
      arrResult.push(arr[i]);
    } else {
      continue;
    }
  }
  return arrResult;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O

/*
2. Write a function aclean(arr) that returns an array cleaned from anagrams.
*/
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function checkAnagram(str1, str2) {
  //check same length of two params
  if (str1.length !== str2.length) {
    return false;
  } else {
    //initialize object to store frequencies
    let freqCounter1 = {};
    let freqCounter2 = {};

    //storing key value from array1 to object1
    for (let char of str1) {
      freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }
    //storing key value from array2 to object2
    for (let char of str2) {
      freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    }
    console.log(freqCounter1);
    console.log(freqCounter2);

    for (let key in freqCounter1) {
      if (!(key in freqCounter2)) {
        return false;
      }
      if (freqCounter1[key] !== freqCounter2[key]) {
        return false;
      }
    }
  }
  return true;
}

function aclean(arr) {
  let left = 0;
  let right = left + 1;
  let result = [];

  while (left < right) {
    if (arr[left].length !== arr[right].length) {
      if ((right = arr.length - 1)) {
        left = left + 1;
        right = left + 1;
      } else {
        right = left + 1;
      }
    } else {
      let x = checkAnagram(arr[left], arr[right]);
      if (x == true) {
        x.push();
      }
    }
  }
}

console.log(aclean(arr)); // "nap,cteachers, ear" or "PAN, cheaters, era"

/*
3. Solve the error!
*/
// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();
// keys.return;
// keys.next("more"); // Error: keys.push is not a function

// console.log(keys);
