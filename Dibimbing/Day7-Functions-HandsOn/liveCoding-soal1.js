/**
 * 1. Soal Object dan Array
 *
 * Terdapat object seorang pegawai kantoran yang memiliki property awal sebagai berikut
 * - nama -> meuthia
 * - usia -> 23
 * - gaji -> 10000000
 * - jabatan -> Software Engineer
 * - penilaian (1-5) -> [3.75, 4.25, 4, 4.5, 4.75, 3.80, 4.50]
 *
 * 1. Ubah gaji pegawai tersebut menjadi 15000000
 * 2. Ubah jabatan pegawai tersebut menjadi Senior Software Engineer
 * 3. Hitunglah rata-rata penilaian pegawai tersebut, jika nilai diatas 4.5, maka
 *    - ubah gaji pegawai tersebut menjadi 20000000
 *    - ubah jabatan pegawai tersebut menjadi Lead Software Engineer
 * 4. Jika nilai pegawai tersebut dibawah 3.5, maka
 *   - ubah gaji pegawai tersebut menjadi 1000000
 *   - ubah jabatan pegawai tersebut menjadi Software Engineer
 *   - Berikan Surat Peringatan
 * 5. Tambahkan sebuah method untuk menampilkan data pegawai tersebut
 * 6. Tambahkan sebuah method untuk menampilkan kenaikan gaji dari pegawai tersebut, berdasarkan penilaian
 * 7. Tambahkan sebuah property yang menyimpan object lain mengenai jadwal bekerja
 */

const newEmployee = {
  nama: "Meuthia",
  usia: 23,
  gaji: 10000000,
  jabatan: "Software Engineer",
  penilaian: [3.75, 0, 0, 4.5, 5, 3.8, 4.5],
  //5. Tambahkan sebuah method untuk menampilkan data pegawai tersebut
  showData: function () {
    return `Hai, nama saya ${this.nama}, saya seorang ${this.jabatan}`;
  },
};

//1. Ubah gaji pegawai tersebut menjadi 15000000
newEmployee.gaji = 15000000;

//2. Ubah jabatan pegawai tersebut menjadi Senior Software Engineer
newEmployee["jabatan"] = "Senior Software Engineer";

/* * 3. Hitunglah rata-rata penilaian pegawai tersebut, jika nilai diatas 4.5, maka
 *    - ubah gaji pegawai tersebut menjadi 20000000 

 * 4. Jika nilai pegawai tersebut dibawah 3.5, maka
 *   - ubah gaji pegawai tersebut menjadi 1000000
 *   - ubah jabatan pegawai tersebut menjadi Software Engineer
 *   - Berikan Surat Peringatan

*/
newEmployee.getAveragePenilaian = function () {
  return (
    this.penilaian.reduce((curr, acc) => curr + acc, 0) / this.penilaian.length
  ).toFixed(2);
};

const rataRataNilaiEmployee = newEmployee.getAveragePenilaian();
console.log(rataRataNilaiEmployee);
if (rataRataNilaiEmployee > 4.5) {
  newEmployee.gaji = 20000000;
  newEmployee.jabatan = "Lead Software Engineer";
  console.error(`You will get promotion`);
} else if (rataRataNilaiEmployee < 3.5) {
  newEmployee.gaji = 10000000;
  newEmployee.jabatan = "Software Engineer";
  console.error(`You got demotion!`);
  console.error(`You will get warning letter!`);
}

//7. Tambahkan sebuah property yang menyimpan object lain mengenai jadwal bekerja
newEmployee.jadwalBekerja = {
  hari: "Senin - Jumat",
  jamKerja: "08.00 - 17.00",
};

console.log(
  `Jadwal kerja dari ${newEmployee.nama} adalah ${newEmployee.jadwalBekerja.hari} dan jamnya ${newEmployee.jadwalBekerja.jamKerja}`
);

//show newEmployee object
console.log(newEmployee);
