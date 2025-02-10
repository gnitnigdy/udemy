//Collection nilai siswa
let nilaiSiswa = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

//memisahkan nilai ganjil dan nilai genap
let nilaiGanjil = nilaiSiswa.filter((currElement, index) => {
  if (index % 2 === 0) {
    return currElement;
  }
});

//membuat rata-rata nilai semester ganil dan genap
let nilaiGenap = nilaiSiswa.filter((currElement, index) => {
  if (index % 2 !== 0) {
    return currElement;
  }
});

let avgNilaiGanjil =
  nilaiGanjil.reduce((curr, acc) => curr + acc, 0) / nilaiGanjil.length;

let avgNilaiGenap =
  nilaiGenap.reduce((curr, acc) => curr + acc, 0) / nilaiGenap.length;

//menampilkan nilai
console.log(`Nilai Semester Ganjil Siswa adalah ${nilaiGanjil}`);
console.log(`Nilai Semester Genap Siswa adalah ${nilaiGenap}`);
console.log(`Rata-rata Semester Ganjil Siswa adalah ${avgNilaiGanjil}`);
//membulatkan ke dua desimal
console.log(
  `Rata-rata Semester Genap Siswa adalah ${avgNilaiGenap.toFixed(2)}`
);
console.log(
  `Rata-rata Semua Nilai Siswa adalah ${(
    nilaiSiswa.reduce((curr, acc) => curr + acc, 0) / nilaiSiswa.length
  ).toFixed(2)}`
);
