//example multiple pointers (refactor)

//must be sorted in this case
let arr = [-4, -3, 2, -1, 0, 3.5, 5, 6, 10];

function sumZero(arr) {
  //initialize multipointer
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    //check apakah sum zero terpenuhi
    if (sum === 0) {
      return [arr[left], arr[right]];
      //apabila sum masih lebih besar, maka mundurkan index right
    } else if (sum > 0) {
      right--;
      //majukan index left
    } else {
      left++;
    }
  }
}

const x = sumZero(arr);
console.log(x);

function countUniqueValues(arr) {
  let left = 0;
  let right = left + 1;
  let count = 1;

  if (arr.length <= 0) {
    return 0;
  }

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      count++;
      left = right;
      right++;
    } else {
      right++;
    }
  }
  return count;
}

let arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
let y = countUniqueValues(arr2);
console.log(y);

//refactor version to save space complexity
function countUniqueValuesRefactor(arr) {
  let left = 0;
  let right = left + 1;

  if (arr.length <= 0) {
    return 0;
  }

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left = left + 1;
      arr[left] = arr[right];
      right = right + 1;
    } else {
      right++;
    }
  }
  return left + 1;
}

let z = countUniqueValuesRefactor(arr2);
console.log(z);
