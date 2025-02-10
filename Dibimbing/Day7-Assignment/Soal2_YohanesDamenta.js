//inisialisasi object pertama
const siswaMeuthia = {
  nama: "Meuthia",
  umur: 25,
  email: "meuthia@gmail.com",
};

//mengubah property key umur menjadi 23
siswaMeuthia.umur = 23;

//Lalu, tambahkan 2 buah  property baru, yaitu pertama adalah jurusan
siswaMeuthia.jurusan = "Sistem Informasi";

//property kedua adalah jadwal kuliah berbentuk object
siswaMeuthia["jadwalKuliah"] = {
  hari: ["Senin", "Selasa", "Rabu"],
  mataKuliah: [
    ["Kalkulus", "AI", "Product Management"],
    ["Network Engineering", "Algoritma Pemrograman"],
    ["Kalkulus", "Product Design", "IoT"],
  ],
};

console.log(siswaMeuthia);
