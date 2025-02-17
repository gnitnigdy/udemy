//* Variable Scope
/**
 * 1. Buatlah sebuah variable dengan let -> let nama;
 * 2. print variable tersebut, lihat hasilnya
 * 3. Buat sebuah function dimana dia akan mengubah variable nama dengan initialize value -> "Hello"
 * 4. Jalankan function tersebut dan print variable nama
 * 5. Buat sebuah function dimana dia menginisialisasi let nama lagi dan masukan value -> "World"
 * 6. Jalankan function dan print variable nama
 * 7. Ubah value pada variable nama pada global scope dan print variable nama
 */

let nama = "Yohanes Damenta";
console.log(`Ini nama pertama : ${nama}`);

function changeName() {
  nama = "Hello";
}

changeName();
console.log(`Ini nama kedua : ${nama}`);

function updateName() {
  let nama = "World!";
  console.log(`Ini nama ketiga : ${nama}`);
}
updateName();
console.log(`Ini nama keempat : ${nama}`);

nama = "Marselena";
console.log(`Ini nama kelima : ${nama}`);
