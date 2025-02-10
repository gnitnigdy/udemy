//function declaration
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

//function expression
const luasSegitigaSikuSiku = function (alas, tinggi) {
  return (alas * tinggi) / 2;
};

//arrow function
const luasLingkaran = (diameter) => Math.PI * (diameter / 2) ** 2;

const luasBelahKetupat = (diameter1, diameter2) => {
  //contoh menggunakan validasi tipe data yang diinput pada argumen/parameter
  if (typeof diameter1 !== "number" || typeof diameter2 !== "number") {
    return "Invalid Number of Diameter1 or Diameter2!";
  }
  return (diameter1 * diameter2) / 2;
};

//luas persegi panjang
let panjang = 20;
let lebar = 15;
console.log(
  `Luas Persegi Panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luasPersegiPanjang(
    panjang,
    lebar
  )}`
);

//luas lingkaran
let diameter = 40;
//membulatkan ke 2 decimal terdekat
console.log(
  `Luas Lingkaran dengan diameter adalah ${luasLingkaran(diameter).toFixed(2)}`
);

//luas segitiga
let alas = 30;
let tinggi = 20;
console.log(
  `Luas Segitiga Siku-Siku dengan panjang alas ${alas} dan tinggi ${tinggi} adalah ${luasSegitigaSikuSiku(
    alas,
    tinggi
  )}`
);

//luas belah ketupat
let diameter1 = 10;
let diameter2 = 20;
console.log(
  `Hasil Perhitungan belah ketupat : ${luasBelahKetupat(diameter1, diameter2)}`
);
