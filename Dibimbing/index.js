let number1 = 10;
let number2 = 20;
//1. cara print 1 (pakai pemisah ,)
console.log(
  "Angka pertama adalah ",
  number1,
  "Angka kedua adalah ",
  number2,
  "Hasil penjumlahannya ",
  number1 + number2
);
//2. cara print 2 (pakai pemisah +)
console.log(
  "Angka pertama adalah " +
    number1 +
    " Angka kedua adalah " +
    number2 +
    " Hasil penjumlahannya " +
    Number(number1 + number2)
);
//3. menggunakan template literal (`)
console.log(
  `Angka pertama adalah ${number1} Angka kedua adalah ${number2} Hasil penjumlahannya ${
    number1 + number2
  }`
);

// inisialisasi variable pada javascript dengan var, let, const

var namaSiswa = "Andi";
console.log(`Nama Siswa Pertama adalah ${namaSiswa}`);
let namaSiswa2 = "Budi";
console.log(`Nama Siswa Kedua adalah ${namaSiswa2}`);
const namaSiswa3 = "Candra";
console.log(`Nama Siswa Ketiga adalah ${namaSiswa3}`);

//soal

//1. hasil dari perhitungan berikut : 10 * 4 + 18 / 6 **2
console.log(10 * 4 + 18 / 6 ** 2);

//2 soal ipk

let arrOfIPK = [3.5, 3, 2.5, 2.75, 3.75];
let tempAvg = 0;
let statusMahasiswa = "aktif";
let ipkFinal = 0;
for (let i = 0; i < arrOfIPK.length; i++) {
  tempAvg += arrOfIPK[i];
}
ipkFinal = tempAvg / arrOfIPK.length;

if (ipkFinal >= 3.5 && statusMahasiswa === "aktif") {
  console.log("sangat baik");
} else if (ipkFinal >= 3 && ipkFinal < 3.5 && statusMahasiswa === "aktif") {
  console.log("baik");
} else if (ipkFinal > 2.5 && ipkFinal < 3 && statusMahasiswa === "aktif") {
  console.log("cukup");
} else {
  console.log("kurang baik");
}

const isSangatBaik = ipkFinal >= 3.5 && statusMahasiswa === "aktif";
const isBaik = ipkFinal >= 3 && ipkFinal < 3.5 && statusMahasiswa === "aktif";
const isCukup = ipkFinal >= 2.5 && ipkFinal < 3 && statusMahasiswa === "aktif";
const isKurang = ipkFinal < 2.5 && statusMahasiswa === "aktif";
console.log(isSangatBaik);
console.log(isBaik);
console.log(isCukup);
console.log(isKurang);

//soal 3

const namaPembeli1 = "Budi";
const kategoriPembeli1 = 2;
let hargaPembeli11 = 175000;
let hargaPembeli12 = 50000;

let totalBelanjaPembeli1 = hargaPembeli11 + hargaPembeli12;
const discountSyaratPembeli1 =
  hargaPembeli11 > 150000 || hargaPembeli12 || kategoriPembeli1 > 2;
const discountPembeli1 = discountSyaratPembeli1 === true ? 30000 : 0;
console.log(discountSyaratPembeli1);
console.log(discountPembeli1);
