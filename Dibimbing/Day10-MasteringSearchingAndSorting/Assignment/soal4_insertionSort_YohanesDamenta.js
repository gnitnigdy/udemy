function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j > -1 && arr[j] > currVal; j--) {
      if (currVal < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = currVal;
      }
    }
  }
  return arr;
}

let dataCollection = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
console.log(`Sebelum di sort : ${dataCollection}`);
insertionSort(dataCollection);
console.log(`Setelah di sort : ${dataCollection}`);
