/**
 * Terdapat sebuah array yang berisikan deretan angka random sebanyak 10 element
 * - Tentukan angka yang genap dan angka yang ganjil
 * - Pisahkan keduanya kedalam 2 array berbeda
 * - Print hasil dari masing masing array tersebut (ganjil dan genap)
 */

const arrayNilai = [11, 17, 95, 72, 10, 15, 8, 128, 201, 999];
const arrayGenap = [];
const arrayGanjil = [];
//* ... Lanjutkan code berikut

for (let i = 0; i < arrayNilai.length; i++) {
  //menentukan angka mana genap mana ganjil
  if (arrayNilai[i] % 2 === 0) {
    //memisahkan bilangan genap ke array genap
    arrayGenap.push(arrayNilai[i]);
  } else {
    //memisahkan bilangan ganjil ke array ganjil
    arrayGanjil.push(arrayNilai[i]);
  }
}

//Print hasil dari masing masing array tersebut (ganjil dan genap)
console.log("Array Genap : ", arrayGenap);
console.log("Array Ganjil : ", arrayGanjil);
