/*start of recursive binary searching */
//sorting function with bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function sorting(arrCollection) {
  for (let i = arrCollection.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arrCollection[j] > arrCollection[j + 1]) {
        swap(arrCollection, j, j + 1);
      }
    }
  }
}

const dataCollection = [1, 7, 9, 12, 23, 30, 55, 93];

function binarySearching(arr, searchValue) {
  sorting(arr);
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  //kalo array nya kosong return -1
  if (arr.length === 0) {
    return false;
  }

  if (searchValue === arr[mid]) {
    return true;
  }

  while (left <= right) {
    if (searchValue > arr[mid]) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }

    if (searchValue < arr[mid]) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    }

    if (searchValue === arr[mid]) {
      return true;
    }
  }
  return false;
}

let resultBinarySearch1 = binarySearching(dataCollection, 93);
console.log(resultBinarySearch1);
let resultBinarySearch2 = binarySearching(dataCollection, 17);
console.log(resultBinarySearch2);

/*start of recursive binary searching */

function recursiveBinarySearch(
  arr,
  searchValue,
  left = 0,
  right = arr.length - 1
) {
  sorting(arr);

  if (left > right) {
    return false;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === searchValue) {
    return true;
  } else if (arr[mid] > searchValue) {
    return recursiveBinarySearch(arr, searchValue, left, mid - 1);
  } else {
    return recursiveBinarySearch(arr, searchValue, mid + 1, right);
  }
}

let resultRecursiveBinarySearch = recursiveBinarySearch(dataCollection, 93);
console.log(resultRecursiveBinarySearch);

let resultRecursiveBinarySearch2 = recursiveBinarySearch(dataCollection, 17);
console.log(resultRecursiveBinarySearch2);
