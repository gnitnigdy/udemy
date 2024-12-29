/*Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has 
it's corresponding value squared in the second array. 
The frequency of values must be the same.*/

//example of naive solution
let arr1 = [1, 2, 3, 1];
let arr2 = [4, 9, 1, 1];

function checkSameNaive(arr1, arr2) {
  //check panjang array sama atau tidak
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    //looping dari array pertama untuk cek element array 1
    for (let i = 0; i < arr1.length; i++) {
      //looping untuk cek dari array kedua
      for (let j = 0; j < arr2.length; j++) {
        let temp = arr1[i] ** 2;
        //cek apakah nilai kuadrat dari
        //array pertama sama dengan nilai
        //pada looping index j di array kedua
        if (temp === arr2[j]) {
          //jika nilai tersebut sama maka akan di remove dari array kedua
          //untuk memastikan frequency dari nilai yang dicari sama
          arr2.splice(j, 1);
          break;
        }
      }
    }
    //jika panjang array 2 sama dengan 0
    //berarti nilai kuadrat sesuai sehingga jawaban nya benar
    if (arr2.length === 0) {
      return true;
    }
  }
  return false;
}

//const x = checkSameNaive(arr1, arr2);
//console.log(x);

//refactor solution

function sameRefactor(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  //Adding arr1 to object freqCounter1
  //Value in arr1 become key in freqCounter1
  for (let element of arr1) {
    //Using short circuit to check if there is key or not
    //If key is already assigned adding +1
    freqCounter1[element] = (freqCounter1[element] || 0) + 1;
  }
  //Adding arr2 to object freqCounter2
  //Value in arr2 become key in freqCounter2
  for (let element of arr2) {
    //Using short circuit to check if there is key or not
    //If key is already assigned adding +1
    freqCounter2[element] = (freqCounter2[element] || 0) + 1;
  }

  //comparing between key in freqCounter1 with freqCounter2

  for (let key in freqCounter1) {
    //check if there is no key with power results
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    //check if key power result frequencies not same with the original object
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }

  console.log(freqCounter1);
  console.log(freqCounter2);
  return true;
}

const y = sameRefactor(arr1, arr2);
console.log(y);
