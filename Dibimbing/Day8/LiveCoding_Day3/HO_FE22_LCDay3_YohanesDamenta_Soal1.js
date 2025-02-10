/**
 * 1. Buatlah sebuah function yang menerima 2 parameter
 * - parameter 1 -> array of number
 * - parameter 2 -> rest parameter (number)
 *
 * Tugas
 * - Gabungkan 2 array tersebut menjadi 1 dengan spread operator
 * - Hitung lah total dari 2 array tersebut
 */

function menghitungTotalArray(arrayData, ...angkaAngkaTambahan) {
  //* Lanjutkan code disini untuk menggabungkan dan menghitung total
  const allData = [...arrayData, ...angkaAngkaTambahan];
  //console.log("ini all data: ", allData);
  const filteredData = allData.filter((item) => typeof item === "number");
  //console.log("ini filtered data: ", filteredData);
  //console.log(
  //   `total jumlah : ${filteredData.reduce((curr, acc) => curr + acc, 0)}`
  //);
  return filteredData.reduce((curr, acc) => curr + acc, 0);
}

let dataTemp = menghitungTotalArray(
  [1, 2, 3, 4, 5, 6, 7, 8],
  1,
  2,
  3,
  4,
  5,
  "a",
  "b",
  "c"
);
console.log(`Total Angka adalah: ${dataTemp}`);
