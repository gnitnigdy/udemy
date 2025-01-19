// jenis Loop dan Waktu Terbaik Digunakan
// for	Untuk iterasi dengan jumlah yang diketahui atau dengan indeks array.
// for...of	Ketika Anda ingin mengakses nilai langsung dari iterable.
// for...in	Untuk mengiterasi properti objek (bukan array).
// while	Ketika kondisi pengulangan tergantung pada suatu variabel yang berubah.
// do...while	Ketika Anda butuh menjalankan blok kode minimal satu kali.
// .forEach()	Untuk iterasi array tanpa mengembalikan hasil (side effects).
// .map()	Untuk memproses array dan menghasilkan array baru.
// for await...of	Untuk bekerja dengan data asynchronous dalam iterasi.

//using for loops in array and objects

const myStudents = [
  { firstName: "Zeus", grade: 86 },
  { firstName: "Apollo", grade: 85 },
  { firstName: "Herra", grade: 84 },
  { firstName: "Dominic", grade: 83 },
];

for (let i = 0; i < myStudents.length; i++) {
  console.log(
    `Students Name: ${myStudents[i].firstName} with ${myStudents[i].grade} grades`
  );
}

let avgGradesStudent = 0;
for (let i = 0; i < myStudents.length; i++) {
  avgGradesStudent += myStudents[i].grade;
  if (i === myStudents.length - 1) {
    avgGradesStudent = avgGradesStudent / myStudents.length;
  }
}
console.log(avgGradesStudent);

//nested for loops -> O(n^2) complexity
let gameBoard2048 = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

for (let i = 0; i < gameBoard2048.length; i++) {
  let board = "";
  for (let j = 0; j < gameBoard2048[i].length; j++) {
    board += ` ${gameBoard2048[i][j]}`;
  }
  console.log(board);
}

//while loops
let counterWhile = 0; //counter condition initialization
//condition
while (counterWhile < 5) {
  console.log(counterWhile); //action
  counterWhile++; //counter increment/decrement
}

//break keyword => end execution of code immediately (scope)

//for of loops -> works with iterable things. object is not iterative things

for (let el of gameBoard2048) {
  console.log(`looping for of : ${el}`);
}

const movieReviews = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (let key in movieReviews) {
  console.log(key);
}

//using of in Objects
for (let movie of Object.keys(movieReviews)) {
  console.log(`${movie} : ${movieReviews[movie]}`);
}
