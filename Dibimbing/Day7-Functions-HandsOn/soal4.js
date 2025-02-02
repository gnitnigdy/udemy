//3 buah function untuk menghitung luas bangunan

function menghitungLuasBangunDatar(angka1 = 0, angka2 = 0, func) {
  if (!angka1 || !angka2) {
    console.log(`Parameter Ada Kosong`);
    return "Parameter Harus Lengkap!";
  }

  const hasilFunction = func(angka1, angka2);
  return hasilFunction;
}

const luasSegitiga = function (alas, tinggi) {
  if (!alas || !tinggi) {
    return "tidak boleh kosong";
  }
  return (alas * tinggi) / 2;
};

const luasPersegiPanjang = function (sisi1, sisi2) {
  if (!sisi1 || !sisi2) {
    return "tidak boleh kosong";
  }
  return sisi1 * sisi2;
};

const luasJajarGenjang = function (alas, tinggi) {
  if (!sisi1 || !sisi2) {
    return "tidak boleh kosong";
  }
  return alas * tinggi;
};

const luasBelahKetupat = function (diag1, diag2) {
  if (!sisi1 || !sisi2) {
    return "tidak boleh kosong";
  }
  return (diag1 * diag2) / 2;
};

console.log(
  `Luas Bangun Persegi Panjang : ${menghitungLuasBangunDatar(
    100,
    100,
    luasPersegiPanjang
  )}`
);

console.log(
  `Luas Bangun Jajar Genjang : ${menghitungLuasBangunDatar(
    20,
    30,
    luasPersegiPanjang
  )}`
);

console.log(
  `Luas Bangun Belah Ketupat : ${menghitungLuasBangunDatar(
    50,
    70,
    luasPersegiPanjang
  )}`
);
