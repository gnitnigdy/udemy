let tempStr = "";
let tempStr2 = "";
let n = 5;
let x = 5;
for (let i = 1; i <= n; i++) {
  for (let k = n - i; k > 0; k--) {
    tempStr += " ";
  }
  for (let j = 1; j <= i; j++) {
    tempStr += "* ";
  }
  tempStr += "\n";
}

// for (let i = 1; i <= x; i++) {
//   for (let k = x - i; k > 0; k--) {
//     tempStr2 = " ";
//   }
//   for (let j = i; j > 0; j--) {
//     tempStr2 += "* ";
//   }
//   tempStr2 += "\n";
// }

console.log(tempStr);
console.log(tempStr2);
