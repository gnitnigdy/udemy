const objectSiswa = {
  nama: "John",
  tahunLahir: 2001,
  nilaiUjian: [90, 80, 70, 85],
  email: "john@gmail.com",
  jurusan: "Sistem Komputer",
  perkenalan: function () {
    return `Halo, nama saya ${this.nama}, saya lahir tahun ${this.tahunLahir}, dan saya berkuliah di jurusan ${this.jurusan}`;
  },
  rataRataNilaiUjian: function (nSemester = this.nilaiUjian.length) {
    if (nSemester < 1 || nSemester > this.nilaiUjian.length) {
      return "Nilai Semester Tidak Valid";
    }
    let temp = 0;
    for (let i = 0; i < nSemester; i++) {
      temp += this.nilaiUjian[i];
    }
    return temp / nSemester;
  },
};

console.log(objectSiswa.rataRataNilaiUjian());
