/**
 * 4.Buatlah sebuah function yang menerima 2 parameter, yaitu
 * - object 1 dan object 2.
 *
 * Tugas:
 * - Gabungkanlah kedua object tersebut, dan jika object 2 sama dengan object 1, maka
 * replace lah fieldnya.
 */

function mergeObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let x = { a: 1, b: 2, c: 3 };
let y = { a: 1, b: 2, c: 4 };

//menggabungkan object memperhatikan urutan!
//jika urutannya x,y maka field sama di x akan diganti oleh y
let z = mergeObject(x, y);
console.log(x);
console.log(y);
console.log(z);
