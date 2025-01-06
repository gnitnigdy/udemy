//Ternary Operators

let num = 1;

if (num === 7) {
  console.log("Number is 7");
} else {
  console.log("Not Lucky");
}

num === 7 ? console.log("Lucky") : console.log("Bad");

let arr1Length = 9;
let arr2Length = 22;

arr1Length < arr2Length
  ? console.log("Smaller Array is arr1Length")
  : console.log("Bigger Array is arr1Length");

let status = "online";

let colorStatus = status === "online" ? "green" : "red";
console.log(colorStatus);
