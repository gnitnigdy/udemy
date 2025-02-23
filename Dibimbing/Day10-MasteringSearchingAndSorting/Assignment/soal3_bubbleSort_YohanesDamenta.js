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

let dataCollection = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
console.log(`Sebelum di sort : ${dataCollection}`);
bubbleSort(dataCollection);
console.log(`Setelah di sort : ${dataCollection}`);
