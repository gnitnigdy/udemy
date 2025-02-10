/**
 * 3. Buatlah sebuah function yang menerima 1 parameter, yaitu object
 * Didalam object tersebut, terdapat 5 property
 * - Nama
 * - Jurusan
 * - Usia
 * - IPK (array 8 element)
 * - Akreditasi Siswa "A" | "B" | "C"
 * - isLulus (boolean)
 *
 * Hitunglah IPK dari siswa, rata-rata IPK selama belajar 8 semester. Jika mencukupi,
 * maka Akreditasi Siswa akan diubah dan isLulus akan true. Kondisi sebagai berikut
 * 1. Jika rata-rata IPK > 3.25
 *  * Akreditasi siswa -> A
 *  * isLulus: true
 * 2. Jika rata-rata IPK >= 2.75 dan IPK < 3.25
 *  * Akreditasi siswa -> B
 *  * isLulus: true
 * 3. Jika rata-rata IPK < 2.75
 *  * Akreditasi siswa -> C
 *  * isLulus : false
 */

const object1 = {
  nama: "Meuthia",
  jurusan: "Teknik Informatika",
  usia: 23,
  nilaiNilaiIPK: [3.75, 3.2, 2.9, 3.5, 2.75, 3.0, 3.85, 4.0],
};

const menghitungRataRataIPKSiswa = (objectData) => {
  //* Lanjutkan code dibawah ini
  //let { nama, jurusan, usia, nilaiNilaiIPK } = objectData;
  //console.log(nama);
  let { nilaiNilaiIPK } = object1;
  let tempRataRata =
    nilaiNilaiIPK.reduce((curr, acc) => curr + acc, 0) / nilaiNilaiIPK.length;

  let tempObjectData = { ...objectData };
  tempObjectData.nilaiRataRata = tempRataRata.toFixed(2);
  if (tempRataRata > 3.25) {
    tempObjectData.Akreditasi = "A";
    tempObjectData.isLulus = true;
  } else if (tempRataRata >= 2.75 && tempRataRata <= 3.25) {
    tempObjectData.Akreditasi = "B";
    tempObjectData.isLulus = true;
  } else {
    tempObjectData.Akreditasi = "C";
    tempObjectData.isLulus = false;
  }
  return tempObjectData;
};

let testResults = menghitungRataRataIPKSiswa(object1);
console.log(testResults);
