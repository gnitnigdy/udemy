const sentence = "hi hello world";

function reverseWords(sentence) {
  const tempWords = sentence.split(" ");
  const result = tempWords.map((word) => {
    if (word.length >= 3) {
      return word.split("").reverse().join("");
    }
    return word;
  });
  return result.join(" ");
}

console.log(reverseWords(sentence));
