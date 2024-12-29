//example in searching

function Search(arr, valToSearch) {
  let min = 0;
  let max = arr.length - 1;

  //It must be Sorted first!!!!

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let curr = arr[middle];

    if (arr[middle] < valToSearch) {
      min = middle + 1;
    } else if (arr[middle] > valToSearch) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

let x = Search([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 7);
console.log(x);
