function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

let result = linearSearch([1, 2, 3, 4, 5, 3, 2, 4, 9, 7], 9);
console.log(result);
