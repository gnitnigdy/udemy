// //Exercise 1 - Triangle
// console.log("Answer 1:");
// console.log("=========");
// function printTriangle(triangleHeight) {
//   let count = 1;
//   let str = "";
//   for (let i = 1; i <= triangleHeight; i++) {
//     str = "";
//     for (let j = 1; j <= i; j++) {
//       str +=
//         (count < 10
//           ? +"0" + Number(count++).toString()
//           : Number(count++).toString()) + " ";
//     }
//     console.log(str);
//   }
// }
// printTriangle(4);

// //Exercise 2 - Replacing Fizz and Buzz
// console.log("");
// console.log("Answer 2:");
// console.log("=========");
// function replaceArrStr(loopNumber, fizzFactor, buzzFactor) {
//   let tempArray = Array.from({ length: loopNumber }, (_, i) => i + 1);
//   console.log(tempArray);
//   let arrToReturn = tempArray.map((element) => {
//     if (
//       Number(element) % buzzFactor === 0 &&
//       Number(element) % fizzFactor === 0
//     ) {
//       return "FizzBuzz";
//     } else if (Number(element) % buzzFactor === 0) {
//       return "Buzz";
//     } else if (Number(element) % fizzFactor === 0) {
//       return "Fizz";
//     } else {
//       return element;
//     }
//   });
//   console.log(arrToReturn);
// }
// replaceArrStr(15, 3, 5);

// //Exercise 3 Calculating BMI
// console.log("");
// console.log("Answer 3:");
// console.log("=========");
// const calcBMI = (weight, height) => {
//   if (typeof weight !== "number" || typeof height !== "number") {
//     return "False Input!";
//   }
//   let countBMI = weight / height ** 2;
//   console.log(countBMI);
//   if (countBMI < 18.5) {
//     return "less weight";
//   } else if (countBMI >= 18.5 && countBMI <= 24.9) {
//     return "ideal";
//   } else if (countBMI > 24.9 && countBMI <= 29.9) {
//     return "overweight";
//   } else if (countBMI > 29.9 && countBMI <= 39.9) {
//     return "very overweight";
//   } else if (countBMI > 39.9) {
//     return "obesity";
//   }
// };

// const resultBMI = calcBMI(70, 1.75);
// console.log(resultBMI);

// //Exercise 4 - Filtering EvenNumber
// console.log("");
// console.log("Answer 4:");
// console.log("=========");
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArrNum = arr.filter((num) => num % 2 === 0);
// console.log(evenArrNum);

// let arrReturn = [];
// //manual way
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arrReturn.push(arr[i]);
//   }
// }
// console.log(arrReturn);

// //Exercise 5 - split string into array
// console.log("");
// console.log("Answer 5:");
// console.log("=========");
// //using built-in function
// const str = "Hello World Why You Still Here";

// const arraySplit = str.split(" ");
// console.log(arraySplit);

// //using manual way
// let arrResultSplit = [];
// let tempWord = "";
// for (let i = 0; i <= str.length; i++) {
//   if (str[i] !== " " && i < str.length) {
//     tempWord += str[i];
//   } else {
//     arrResultSplit.push(tempWord);
//     tempWord = "";
//   }
// }

// console.log(arrResultSplit);

// //baris
// for (let i = 0; i < 3; i++) {
//   //kolom
//   for (let j = 0; j < 5; j++) {
//     strPrint += "* ";
//   }
//   console.log(strPrint);
//   strPrint = "";
// }

// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     strPrint += "* ";
//   }
//   console.log(strPrint);
//   strPrint = "";
// }

function triangleB(height) {
  let strPrint = "";
  for (let i = height; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      strPrint += "* ";
    }
    console.log(strPrint);
    strPrint = "";
  }
}

triangleB(5);
