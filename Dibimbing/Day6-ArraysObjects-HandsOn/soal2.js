/**
 * 2. Terdapat sebuah array dengan deret angka.
 * - Hapus element terakhir pada array
 * - Tambahkan sebuah element baru pada index 0 dari array, value nya 62
 * - Hitung total dari seluruh nilai pada array dan hitung rata-ratanya
 */
const arrayAngka1 = [20, 35, 72, 14, 21, 37, 56, 100];
//* Lanjutkan code...

//Hapus element terakhir pada array
arrayAngka1.pop();
console.log(arrayAngka1);
console.log(`=======================================`);
//Tambahkan sebuah element baru pada index 0 dari array, value nya 62
arrayAngka1.unshift(62);
console.log(arrayAngka1);
console.log(`=======================================`);
// Hitung total dari seluruh nilai pada array dan hitung rata-ratanya
let temp = 0;
for (let i = 0; i < arrayAngka1.length; i++) {
  temp += arrayAngka1[i];
}

console.log(`Total Angka : ${temp}`);
console.log(`Rata - rata : ${temp / arrayAngka1.length}`);
