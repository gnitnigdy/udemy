/*
Soal 1
1. Buat sebuah fungsi bernama getFullName yang menerima parameter dengan tipe data Person. Tipe Person ini adalah sebuah type alias yang memiliki properti 
firstName (string) dan lastName (string).
2. Kembalikan hasil concatenasi dari firstName dan lastName, dipisahkan oleh spasi.

*/
type Person = {
  firstName: string;
  lastName: string;
};

export function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

let person1: Person = { firstName: "Yohanes", lastName: "Damenta" };

console.log(getFullName(person1));

/*
Soal 2
1. Buat fungsi wrapInArray yang menggunakan generic type untuk mengubah input menjadi array. 
Fungsi ini menerima satu parameter item dengan tipe T dan mengembalikan sebuah array berisi item tersebut.
2. Gunakan generic type T untuk mendefinisikan tipe parameter input dan hasil return.
*/

export function wrapInArray<T>(item: T): T[] {
  return [item];
}

let testNumber = wrapInArray(5);
console.log(testNumber);

let testString = wrapInArray("Damenta");
console.log(testString);

let testBoolean = wrapInArray(false);
console.log(testBoolean);

let testObject = wrapInArray(person1);
console.log(testObject);
