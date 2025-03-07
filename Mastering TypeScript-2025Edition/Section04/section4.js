function square(num) {
    return num * num;
}
console.log(square(4));
//function exercise
function twoFer(param) {
    if (param === void 0) { param = "you"; }
    return "One for ".concat(param, ", one for me");
}
console.log(twoFer("Elton"));
function isLeapyear(param) {
    if ((param % 4 === 0 && param % 100 !== 0) || param % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("2013 is leap year ? -> ".concat(isLeapyear(2013)));
