const _ = require("lodash");
function summing(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`Angka ke ${i} adalah ${args[i]}`);
  }
}

summing(1, 2, 3, 4, 5, 6, 7, 8, 9);

const arrAngka = [50, 70, 30, 12, 8, 47, 49, 11];

arrAngka.forEach((item, index, arr) =>
  item % 2 === 0 ? console.log("genap") : console.log("ganjil")
);

const nama = "hello world";

const camelCaseNama = _.camelCase(nama);
console.log(camelCaseNama);
