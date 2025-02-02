/**
 * 3. Function
 * - Buat function yang dapat menghitung volume dari sebuah balok
 * - Buat function yang dapat menghitung volume dari sebuah kubus
 * - Buat function yang dapat menghitung volume dari sebuah tabung
 * - Buat function yang dapat menghitung volume dari sebuah kerucut
 *
 * Setiap function menerima parameter dan argumen yang sesuai untuk menghitung volume bangun ruang tersebut
 * [NOTE]: Gunakan 3 metode untuk membuat function (Function Declaration, Function Expression, Arrow Function)
 */

const volumeBalok = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};

const volumeKubus = function (sisi) {
  return sisi ** 3;
};

const volumeTabung = function (jar) {
  return sisi ** 3;
};
