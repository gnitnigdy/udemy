function naiveStringSearch(str1, str2) {
  let counter = 0;
  let indexSearch = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[j] === str2[j]) {
      }
    }
  }
}

let x = naiveStringSearch("abcdomgefghomgjkl", "omg");
console.log(x);
