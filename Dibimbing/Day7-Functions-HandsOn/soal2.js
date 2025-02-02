//filter array ganjil genap dengan type dan beserta returnya

function filterArray(arr, type) {
  if (type === "ganjil") {
    return arr
      .filter((item) => {
        return item % 2 !== 0;
      })
      .sort((a, b) => a - b);
  } else if (type === "genap") {
    return arr
      .filter((item) => {
        return item % 2 === 0;
      })
      .sort((a, b) => a - b);
  } else {
    return "Filter yang dimasukkan tidak sesuai";
  }
}

let angka = filterArray([9, 8, 7, 6, 5, 4, 3, 2, 1], "ganjil");
console.log(angka);
