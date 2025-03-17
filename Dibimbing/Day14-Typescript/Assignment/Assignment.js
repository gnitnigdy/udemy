"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullName = getFullName;
exports.wrapInArray = wrapInArray;
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person1 = { firstName: "Yohanes", lastName: "Damenta" };
console.log(getFullName(person1));
/*
Soal 2
1. Buat fungsi wrapInArray yang menggunakan generic type untuk mengubah input menjadi array.
Fungsi ini menerima satu parameter item dengan tipe T dan mengembalikan sebuah array berisi item tersebut.
2. Gunakan generic type T untuk mendefinisikan tipe parameter input dan hasil return.
*/
function wrapInArray(item) {
    return [item];
}
var testNumber = wrapInArray(5);
console.log(testNumber);
var testString = wrapInArray("Damenta");
console.log(testString);
var testBoolean = wrapInArray(false);
console.log(testBoolean);
var testObject = wrapInArray(person1);
console.log(testObject);
