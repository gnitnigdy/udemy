const mahasiswaProfile = {
  nama: "Yohanes Damenta",
  usia: 30,
  email: "yohanes@damenta.com",
  jurusan: "Matematika",
  angkatanKuliah: "2017",
};

function summarizeStudentProfile(studentRawProfile, ...studentGrades) {
  //Buat sebuah variable object dengan mengcopy object pada parameter menggunakan spread operator
  let tempStudentProfile = { ...studentRawProfile };
  //Buat sebuah variable gabungan nilai siswa dengan menggabungkan rest parameter dan angka 3.50 di akhir (nilai siswa pada semester 8) menggunakan spread operator
  let tempStudentGrade = [...studentGrades, 3.5];

  //Buat satu buah function lagi hanya untuk menghitung nilai rata-rata mahasiswa yang menerima satu parameter yaitu rest parameter
  const countAvgGrades = (grade) => {
    //Hitung rata-rata nilai mahasiswa tersebut selama 8 semester menggunakan nested function.
    const tempAvgGrades = (
      grade.reduce((curr, acc) => curr + acc, 0) / grade.length
    ).toFixed(2);

    return tempAvgGrades;
  };

  const finalAvgGrades = countAvgGrades(tempStudentGrade);

  //   if (finalAvgGrades > 3.5 && finalAvgGrades <= 4){

  //   } else if(){

  //   } else if(){

  //   } else if(){

  //   }else{

  //   }

  //Assigning New Property : Grade and nilaiMahasiswa
  tempStudentProfile.grade = "A";
  tempStudentProfile.nilaiMahasiswa = tempStudentGrade;

  console.log(tempStudentProfile);
  console.log(tempStudentGrade);

  return tempStudentProfile;
}

let x = summarizeStudentProfile(
  mahasiswaProfile,
  3.1,
  3.2,
  3.3,
  3.4,
  3.5,
  3.6,
  3.7,
  3.8
);

console.log(x);
