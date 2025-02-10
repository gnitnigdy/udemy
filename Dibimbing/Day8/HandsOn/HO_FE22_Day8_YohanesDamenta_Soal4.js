/**
 * 4.
 * a. Mengcopy nilai pada object
 * - Buat sebuah object A
 * - Ubah object A dengan menambahkan beberapa property baru
 * - Copy object tersebut kedalam object B
 * - Ubah object B dengan menambah property baru
 * - Ubah object A dengan menghapus property lama
 *
 * Tampilkan hasil dari object A dan object B (komputasi pada object A tidak akan
 * menghubah object B)
 *
 * b. Mengcopy object untuk mentransform object yang sama didalam function
 */

let objectA = {
  nama: "Yohanes",
  usia: 30,
  pekerjaan: "Software Engineer",
};

objectA.email = "yohanes@gmail.com";

let objectB = { ...objectA };
objectB.pendidikan = "S1";

delete objectA.usia;
console.log(`==========Object A==========`);
console.log(objectA);
console.log(`==========Object B==========`);
console.log(objectB);
