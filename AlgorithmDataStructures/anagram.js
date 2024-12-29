//solve anagram in order to implement frequency counter patterns

function validAnagram(str1, str2) {
  //check same length of two params
  if (str1.length !== str2.length) {
    return false;
  } else {
    //initialize object to store frequencies
    let freqCounter1 = {};
    let freqCounter2 = {};

    //storing key value from array1 to object1
    for (let char of str1) {
      freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }
    //storing key value from array2 to object2
    for (let char of str2) {
      freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    }
    console.log(freqCounter1);
    console.log(freqCounter2);

    for (let key in freqCounter1) {
      if (!(key in freqCounter2)) {
        return false;
      }
      if (freqCounter1[key] !== freqCounter2[key]) {
        return false;
      }
    }
  }
  return true;
}

const results = validAnagram("texttwisttime", "timetwisttext");
console.log(results);
