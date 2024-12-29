function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j > -1 && arr[j] > currVal; j--) {
      if (currVal < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = currVal;
        console.log(arr);
      }
    }
  }
  return arr;
}

let results = insertionSort([2, 1, 9, 76, 0]);
console.log(results);
