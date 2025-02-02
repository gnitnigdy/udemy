/**
 * 2. Buatlah sebuah function untuk memfilter sebuah array yang berisi angka-angka
 *   dengan ketentuan:
 *   - Terdapat 2 parameter pada function, parameter pertama adalah array yang akan di filter
 *   - Parameter kedua adalah angka yang digunakan sebagai pembanding filter
 *   - Jika angka pada array tidak habis dibagi angka pada parameter kedua, maka remove dari array
 *
 * * Gunakan metode non filter pada array
 */

const filterAngkaArray = function (arr, angkaPembandingFilter) {
  if (arr.length === 0 || angkaPembandingFilter <= 0) {
    return [];
  }

  return arr.filter((arrElement) => arrElement % angkaPembandingFilter === 0);
};

const arr = [20, 15, 5, 18, 21];
const angkaPembanding = 3;

console.log(filterAngkaArray(arr, angkaPembanding));
