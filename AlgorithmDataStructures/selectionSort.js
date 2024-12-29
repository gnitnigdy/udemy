// function selectionSort(arr) {
//   let minimum;
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         minimum = j;
//       }
//     }
//     temp = arr[i];
//     arr[i] = arr[minimum];
//     arr[minimum] = temp;
//   }
// }
// let x = [4, 3, 5, 6, 2, 1, 7];
// selectionSort(x);
// console.log(x);

let arr = [34, 22, 10, 19, 17];
for (let i = 0; i < arr.length; i++) {
  let lowest = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[lowest]) {
      lowest = j;
    }
  }
  if (i !== lowest) {
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
    console.log(arr);
  }
}

//es 2015 syntax
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

console.log(`ini syntax 2015`);
let arr1 = [12, 9, 7, 1, 6, 3, 8, 4];
let results = selectionSort(arr1);
console.log(results);
