function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 5, 6, 8, 1, 4, 3, 9, 0]));
