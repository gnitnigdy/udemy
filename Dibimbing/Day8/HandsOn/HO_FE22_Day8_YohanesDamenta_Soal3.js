/**
 * 3.
 * a. Menggabungkan nilai pada array tanpa spread operator
 *
 * b. Mengcopy dan mengupdate nilai pada array
 *  - Ubah element pada array (tambahkan element di akhir index)
 *  - Copy array kedalam variable baru
 *  - Ubah array pada variable baru dengan menambah element di tengah array menggunakan spread operator
 *    melalui array lain
 *  - Ubah array pada variable lama dengan menambah element di ujung array menggunakan spread operator
 *    melalui array lain dengan kondisi hanya element ke 2-4
 *
 *  print array lama dan array baru setelah di copy (array baru tidak akan mengubah array lama)
 */

//a -> tanpa menggunakan spread operator atau spread operator hanya di salah satu
console.log([[1, 2, 3], ...[4, 5, 6]]);

//a -> menggunakan spread operator
console.log([...[1, 2, 3], ...[4, 5, 6]]);

// b
const arrayBuahPertama = ["pisang", "apel", "mangga"];
arrayBuahPertama.push("anggur");

const arrayBuahKedua = [...arrayBuahPertama];
const arrayBuahKetiga = ["manggis", "pepaya"];
const arrayComplete = [
  ...arrayBuahKedua.slice(0, 2),
  ...arrayBuahKetiga,
  ...arrayBuahKedua.slice(2),
];

console.log(`Array Buah Pertama : ${arrayBuahPertama}`);
console.log(`Array Buah Kedua : ${arrayBuahKedua}`);
console.log(`Array Buah Ketiga : ${arrayBuahKetiga}`);
console.log(`Array Buah Gabungan : ${arrayComplete}`);
