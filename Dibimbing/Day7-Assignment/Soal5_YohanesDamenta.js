import _ from "lodash";

let firstRandomArray = [];

for (let i = 0; i < 10; i++) {
  firstRandomArray.push(Math.floor(Math.random() * 100) + 1);
}

//inisialisasi array baru untuk menampung nilai asli array sebelumnya
//remove dalam lodash merupakan operasi yang mengubah array sebelumnya (mutable)
let secondRandomArray = firstRandomArray.map((item) => item);

let evenNumber = _.remove(firstRandomArray, function (item) {
  if (item % 2 === 0 || item < 50 || item > 100) {
    return item;
  }
});

console.log(
  "Array sebelum operasi Remove menggunakan Lodash: ",
  secondRandomArray
);

console.log("Value yang terbuang dari operasi Remove: ", evenNumber);

console.log(
  "Array setelah operasi Remove menggunakan Lodash: ",
  firstRandomArray
);
