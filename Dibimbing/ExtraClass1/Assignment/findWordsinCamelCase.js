const camelCase = "stringMakanBabiLezatSekali";
let tempResult = 1;

for (let i = 0; i < camelCase.length; i++) {
  if (camelCase.charCodeAt(i) >= 65 && camelCase.charCodeAt(i) <= 90) {
    tempResult++;
  }
}

console.log(tempResult);
