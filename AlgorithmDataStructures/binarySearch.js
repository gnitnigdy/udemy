function binarySearch(arr, val) {
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  console.log(middle, arr[middle]);
  if (val === arr[middle]) {
    return middle;
  }

  while (left <= right) {
    if (val > arr[middle]) {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    }

    if (val < arr[middle]) {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
    }

    if (val === arr[middle]) {
      return middle;
    }
  }

  return -1;
}

// let x = binarySearch([1, 2, 3, 4, 5], 6);
// console.log(x);

function binarySearchRefactor(arr, val) {
  arr = arr.sort((a, b) => a - b);
  //let arrMap = arr.map((item) => item).sort((a, b) => a - b);
  console.log(arr);
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  // if (arr[middle] === val) {
  //   return middle;
  // } else {
  //   return -1;
  // }
  return arr[middle] === val ? middle : -1;
}

let z = binarySearchRefactor([5, 3, 2, 4, 1], 2);
console.log(z);
