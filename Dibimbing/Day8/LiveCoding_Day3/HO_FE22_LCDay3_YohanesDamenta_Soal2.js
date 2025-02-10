/**
 * 2. Filter, Merge and count the Total of array
 * Buatlah sebuah function yang menerima 2 parameter
 * - parameter 1 -> array of string dan number
 * - parameter 2 -> rest parameter (string, number, array)
 *
 * TUGAS:
 * Filter lah kedua array tersebut hingga hanya tersisa number. Lalu
 * Merge kedua array tersebut dan hitung total dari array tersebut!.
 *
 * CHALLENGE
 * - Buatlah sebuah function yang dapat digunakan berkali kali
 */

const getArraySudahDiFilter = (array) => {
  //* Lanjutkan code disini
  let tempData = [...array];
  return tempData.filter((item) => typeof item === "number");
};

const getTotalArrayNumber = (arrayData, ...restParameters) => {
  //* Filter arrayData dan restParameters
  //* Gabungkan arrayData dan restParameters yang telah di filter
  //* Hitung total dari kedua array tersebut setelah digabungkan!
  let temp1 = getArraySudahDiFilter(arrayData);
  //console.log(`ini temp 1 : ${temp1}`);
  let temp2 = getArraySudahDiFilter(restParameters);
  //console.log(`ini temp 2 : ${temp2}`);
  //console.log(`ini total temp 1 dan 2 : ${[...temp1, ...temp2]}`);
  return [...temp1, ...temp2].reduce((curr, acc) => curr + acc, 0);
};

let totalNumber = getTotalArrayNumber(
  [1, 2, 3, 4],
  "a",
  "b",
  "c",
  5,
  6,
  7,
  [8, 9, 0]
);

console.log(`Total Penjumlahan Angka adalah: ${totalNumber}`);
