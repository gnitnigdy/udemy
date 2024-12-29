//naive
function maxSubArraySumNaive(arr, num) {
  if (num > arr.length) {
    return 0;
  }

  let max = -1;
  let temp = 0;
  //arr length - num + 1 untuk cover outspace array
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      //adding i+j to start sliding the window
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    //console.log(temp, max);
  }
  return max;
}

//console.log(maxSubArraySumNaive([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//refactor version of maxsubarraysum

function maxSubArraySumRefactor(arr, num) {
  let max = 0;
  let temp = 0;

  if (arr.length < num) {
    return 0;
  }

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}

//console.log(maxSubArraySumRefactor([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//minSubLen

function minSubArrayLen(arr, num) {
  let indexStart = 0;
  let indexEnd = indexStart + 1;
  let tempSum = arr[0];
  let minLength = 0;

  // for (let i = 1; i < arr.length; i++) {
  //   tempSum += arr[i];
  //   if (tempSum >= num) {
  //     indexStart++;
  //     minLength = i + 1;
  //     tempSum = arr[indexStart];
  //     indexEnd++;
  //     break;
  //   }
  // }

  // while (indexStart !== arr.length - 1) {
  //   if (tempSum >= num) {
  //     minLength = Math.min(minLength, indexEnd - indexStart);
  //     indexStart++;
  //     indexEnd = indexStart + 1;
  //     tempSum = arr[indexStart];
  //   } else {
  //     tempSum += arr[indexEnd];
  //     indexEnd++;
  //   }
  // }

  while (indexStart != arr.length - 1) {
    tempSum += arr[indexEnd];
    if (tempSum >= num) {
      if (indexStart === 0) {
        minLength = indexEnd - indexStart;
      } else {
        if (minLength > indexEnd - indexStart) {
          minLength = indexEnd - indexStart;
        }
      }
      indexStart++;
      indexEnd = indexStart + 1;
    } else {
      indexEnd++;
    }
  }

  return minLength + 1;
}

let res = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);

console.log(`res : ${res}`);
