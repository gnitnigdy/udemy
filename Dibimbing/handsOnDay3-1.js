//soal
//1. hasil dari perhitungan berikut : 10 * 4 + 18 / 6 **2
console.log(10 * 4 + 18 / 6 ** 2);

//2 soal ipk
//pakai array
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
//pakai variabel biasa
const ipk1 = 3.5;
const ipk2 = 3;
const ipk3 = 2.5;
const ipk4 = 2.75;
const ipk5 = 3.75;
let avgIPK = (ipk1 + ipk2 + ipk3 + ipk4 + ipk5) / 5;
const isSangatBaik = avgIPK >= 3.5 && statusMahasiswa === "aktif";
const isBaik = avgIPK >= 3 && avgIPK < 3.5 && statusMahasiswa === "aktif";
const isCukup = avgIPK >= 2.5 && avgIPK < 3 && statusMahasiswa === "aktif";
const isKurang = avgIPK < 2.5 && statusMahasiswa === "aktif";
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

console.log(Math.sqrt(2));

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    let temp = Math.sqrt(num);
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
