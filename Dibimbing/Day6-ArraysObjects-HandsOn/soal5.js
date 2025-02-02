/**
 * Terdapat sebuah array of object, dimana elemen-elemen dari Array tersebut berbentuk object.
 * Masing-masing object merepresentasikan mahasiswa
 * - nama
 * - jurusan
 * - ipk (array [4 elemen])
 *
 * Loop array tersebut, lalu
 *  - print masing masing mahasiswa dengan format "Hello semuanya, perkenalkan nama saya {{nama}} dari jurusan {{jurusan}}."
 *  - Hitung rata-rata IPK dari masing-masing mahasiswa dengan melooping array IPK
 */

const arrayMahaiswa = [
  {
    nama: "Meuthia",
    jurusan: "Sistem Informasi",
    ipk: [3.4, 2.75, 3.75, 4.0],
  },
  {
    nama: "Daffa",
    jurusan: "Sistem Komputer",
    ipk: [4.0, 3.47, 3.8, 3.25],
  },
];
//* Lanjutkan code...

//karena ini array obj, saya menggunakan for of, karena for of hanya bisa digunakan di iterable
for (let mhs of arrayMahaiswa) {
  console.log(
    `Hello semuanya, perkenalkan nama saya ${mhs.nama} dari jurusan ${
      mhs.jurusan
    } dengan nilai IPK : ${
      //menghitung rata-rata ipk dengan menggunakan reduce dan membagi dengan panjang array
      (
        mhs.ipk.reduce((acc, currval) => acc + currval, 0) / mhs.ipk.length
      ).toFixed(2)
    }`
  );
}
