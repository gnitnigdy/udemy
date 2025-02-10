//menggunakan built-in function filter
function returningEvenNumber(arr) {
  return arr.filter((item) => item % 2 === 0);
}

//menggunakan cara manual menggunakan looping
const returningEvenNumberConventional = function (arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

//menampilkan hasil function returningEvenNumber
console.log(
  returningEvenNumber([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);

//menampilkan hasil function returningEvenNumberConventional
console.log(
  returningEvenNumberConventional([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ])
);
