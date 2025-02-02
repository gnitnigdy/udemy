/**
 * 4. Terdapat sebuah object person dengan property sebagai berikut
 * - nama: Meuthia
 * - tahun lahir: 2001
 * - email: meuthia@gmail.com
 * - pekerjaan: Software Engineer at Google
 * - penghasilan: 15000000
 *
 * Modifikasi object dengan:
 * - menambahkan sebuah property baru yaitu usia -> tahun sekarang - tahun lahir (property)
 * - menambahkan sebuah property baru yaitu pendidikan (object)
 *    - property 1 -> nama institusi
 *    - property 2 -> nilai (array 5 element angka (representasi nilai))
 * - Menghapus property tahun lahir
 * - Mengedit email menjadi -> meuthia12345@gmail.com
 * - Mengedit pekerjaan dan gaji dengan Object.assign() -> Lead Software Engineer at Google dan 80000000
 */
const person = {
  nama: "Meuthia",
  tahunLahir: 2001,
  email: "meuthia@gmail.com",
  pekerjaan: "Software Engineer at Google",
  penghasilan: 15000000,
};

//menambahkan sebuah property baru yaitu usia -> tahun sekarang - tahun lahir (property)
person.usia = new Date().getFullYear() - person.tahunLahir;

/** - menambahkan sebuah property baru yaitu pendidikan (object)
 *    - property 1 -> nama institusi
 *    - property 2 -> nilai (array 5 element angka (representasi nilai))
 *
 * */
person["pendidikan"] = {
  namaInstitusi: "Universitas Indonesia",
  nilai: [3.0, 4.0, 3.5, 3.75, 3.25],
};

// /Menghapus property tahun lahir
delete person.tahunLahir;

//edit email to meuthia12345@gmail.com
person.email = "meuthia12345@gmail.com";

const newPerson = Object.assign(person, {
  pekerjaan: "Lead Software Engineer at Google",
  penghasilan: 80000000,
});

console.log(newPerson);
