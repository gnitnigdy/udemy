//function for swapping the elements

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

//es2015 example

function bubbleSortES2015(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

//optimization bubble sort with no swap variable
function bubbleSortOptimization(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
}

let arr = [5, 3, 8, 2, 1, 9, 4, 7, 6];

let arr2015 = [
  5, 3, 8, 2, 1, 9, 4, 7, 6, -3, -2, 5, 10, 1, 2, 1, 3, 11, 4, 7, 6, 9, 0,
];
// bubbleSort(arr);
// bubbleSortES2015(arr2015);
bubbleSortOptimization(arr);
console.log(arr);
console.log(arr2015);
