let sampleArray = [4, 8, 2, 1, 5, 7, 6, 3];

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  let pivotPoint = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotPoint > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      console.log(arr);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort(sampleArray));
