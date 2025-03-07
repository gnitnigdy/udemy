function square(num: number) {
  return num * num;
}

console.log(square(4));

//function exercise

function twoFer(param: string = "you"): string {
  return `One for ${param}, one for me`;
}

console.log(twoFer("Elton"));

function isLeapyear(param: number): boolean {
  if ((param % 4 === 0 && param % 100 !== 0) || param % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`2013 is leap year ? -> ${isLeapyear(2013)}`);
