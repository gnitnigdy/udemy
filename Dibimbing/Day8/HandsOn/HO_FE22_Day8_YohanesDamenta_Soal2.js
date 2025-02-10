//* Penggunaan Rest Parameter pada function
/**
 * 1. Membuat sebuah function untuk menghitung rata-rata nilai. Menggunakan method array reduce
 * 2. Membuat sebuah function untuk memfilter array rest parameter dimana hanya value < 50 yang akan stay
 */

//rata-rata nilai
const countAverage = (arr) =>
  arr.reduce((curr, acc) => acc + curr, 0) / arr.length;

console.log(countAverage([10, 20, 30, 40, 50, 60, 70, 80]));

//function menerima rest param hanya value yang kurang dari 50
const removeValueBelow50 = (data, ...restParam) => {
  let tempRestParam = restParam.filter((item) => item >= 50);
  console.log([data, ...tempRestParam]);
};

removeValueBelow50(
  10,
  20,
  30,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52
);
