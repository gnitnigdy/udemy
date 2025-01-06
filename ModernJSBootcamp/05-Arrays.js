let lotto = [1, 2, 3, 4, 5, 6, 7, 8];

//accessing array
console.log(lotto[0]);

//accessing undefined index
console.log(lotto[10]);

//create a new array using Array objects
let arrNew = new Array(1, 2, 3, 4, 5);
console.log(arrNew);

//modyfing array
let strToTest = "Hello";
strToTest[0] = "h";
console.log(strToTest); // not changin
let strArrToTest = ["H", "e", "l", "l", "o"];
strArrToTest[0] = "h";
console.log(strArrToTest); // changing

//adding and removing elements in arrays
lotto.push(9);
console.log(lotto);
lotto.pop();
console.log(lotto);
lotto.unshift(10);
console.log(lotto);
lotto.shift();
console.log(lotto);
