/**
 * 1. Terdapat sebuah array of string dengan nama buah
 * - Akses element buah "melon" dan tampilkan pada output v
 * - Akses element buah terakhir dan tampilkan pada output v
 * - Gantilah value pada element buah "mangga" dengan value "semangka"
 * - Hapus elemen pertama pada array dan tambah satu elemen baru pada akhir array dengan value "durian" v
 *
 * Tampilkan array pada output terminal dengan menggabungkan seluruh elemen menjadi 1 string, dengan pemisah (-)
 */
const buahBuahanArray1 = [
  "pisang",
  "strawberry",
  "mangga",
  "jeruk",
  "melon",
  "apel",
];
//* Lanjutkan code...

//akses element buah melon
console.log(buahBuahanArray1[4]);

//Akses element buah terakhir dan tampilkan pada output
console.log(buahBuahanArray1[buahBuahanArray1.length - 1]);

//Gantilah value pada element buah "mangga" dengan value "semangka"

//karena soal tidak terdapat mangga, maka disini element "pear" akan saya ganti jadi mangga
buahBuahanArray1.splice(buahBuahanArray1.indexOf("mangga"), 1, "semangka");
console.log("buah2an setelah splice ", buahBuahanArray1);

//Hapus elemen pertama pada array dan tambah satu elemen baru pada akhir array dengan value "durian"
console.log("Buah-buahan sebelum operasi Array: " + buahBuahanArray1);
// deleting first elements
buahBuahanArray1.shift();
// adding elements to latest index
buahBuahanArray1.push("durian");
console.log("Buah-buahan setelah operasi Array: " + buahBuahanArray1);

// Tampilkan array pada output terminal dengan menggabungkan seluruh elemen menjadi 1 string, dengan pemisah (-)
console.log(`Output: ${buahBuahanArray1.join("-")}`);
