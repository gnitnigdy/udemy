function selectionSort(arr) {
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

let dataCollection = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
console.log(`Sebelum di sort : ${dataCollection}`);
selectionSort(dataCollection);
console.log(`Setelah di sort : ${dataCollection}`);
