const tempObj = {};
const resultData = [];

const data = [1, 10, 12, 1, 9, 2, 12, 3];

for (let i = 0; i < data.length; i++) {
  tempObj[data[i]] = (tempObj[data[i]] || 0) + 1;
}

for (let key in tempObj) {
  if (tempObj[key] > 1) {
    resultData.push(parseInt(key));
  }
}

console.log(resultData);
