/**
 * 5. Buatlah sebuah function yang menerima 2 parameter
 * - Parameter 1 yaitu object dengan property (nama, pekerjaan, gaji, email, usia)
 * - Parameter kedua yaitu nilai (rest parameter);
 *
 * TUGAS
 * - Kembalikan sebuah object dengan struktur baru, yaitu
 *  - nama
 *  - pekerjaan
 *  - gaji
 *
 * - Hitung rata-rata dari nilai dari rest parameter
 *  - Jika rest parameter length < 3,
 *    - Jika rata-rata >= 80, maka pekerjaan dan gaji dapat dari nilai asli
 *    - Jika rata-rata < 80, maka pekerjaan dan gaji diisi null (dipecat)
 *  - Jika rest parameter length > 3
 *    - Jika rata-rata >= 90, maka pekerjaan "Senior Software Engineer" dan gaji (gaji sekarang + 15000000)
 *    - Jika rata-rata < 90 && >= 80, maka pekerjaan dari nilai asli dan gaji (gaji sekarang + 5000000)
 *    - Jika rata-rata < 80, maka pekerjaan dan nilai asli dapat dari gaji
 *    - Jika rata-rata < 60, maka pekerjaan dan gaji diisi null (dipecat)
 */

function returningNewObjects(obj, ...restParams) {
  //console.log(typeof obj);
  if (typeof obj !== "object") {
    return "Invalid!";
  } else {
    let tempObj = { ...obj };
    let filteredRestParams = restParams.filter(
      (item) => typeof item === "number"
    );
    let filteredRestParamsLength = filteredRestParams.length;
    let avgFilteredRestParams =
      filteredRestParams.reduce((acc, curr) => acc + curr, 0) /
      filteredRestParamsLength;
    if (filteredRestParamsLength < 3) {
      if (avgFilteredRestParams < 80) {
        tempObj.pekerjaan = null;
        tempObj.gaji = null;
      }
    } else {
      if (avgFilteredRestParams >= 90) {
        tempObj.pekerjaan = "Senior Software Engineer";
        tempObj.gaji += 15000000;
      } else if (avgFilteredRestParams >= 80 && avgFilteredRestParams < 90) {
        tempObj.gaji += 5000000;
      } else if (avgFilteredRestParams >= 60 && avgFilteredRestParams < 80) {
        return tempObj;
      } else {
        tempObj.pekerjaan = null;
        tempObj.gaji = null;
      }
    }
    return tempObj;
  }
}

console.log(
  returningNewObjects(
    {
      nama: "Yohanes",
      pekerjaan: "Product",
      gaji: 5000000,
      email: "damenta@gmail.com",
      usia: 30,
    },
    100,
    90,
    80,
    "a",
    "b"
  )
);
