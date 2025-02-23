const sentence = "Kasur Rusak";

const tempSentence = sentence.toLowerCase();
let result = "";

for (let i = tempSentence.length - 1; i >= 0; i--) {
  result += tempSentence[i];
}
// console.log(tempSentence);
// console.log(result);
if (tempSentence === result) {
  console.log(`Palindrome`);
} else {
  console.log(`Bukan Palindrome`);
}
