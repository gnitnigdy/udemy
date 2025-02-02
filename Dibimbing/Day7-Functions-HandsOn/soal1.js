//buat function declaration, expression, arrow function dengan parameter N by default 5

//1 declaration
function declarationHelloWorld(param = 5) {
  for (let i = 0; i < param; i++) {
    console.log(`Hello World - ${i + 1}`);
  }
}
declarationHelloWorld();
console.log(`===============================`);
//2 expression
const expressionHelloWorld = function (param = 5) {
  for (let i = 0; i < param; i++) {
    console.log(`Hello World - ${i + 1}`);
  }
};
expressionHelloWorld();
console.log(`===============================`);
const arrowHelloWorld = (param = 5) => {
  for (let i = 0; i < param; i++) {
    console.log(`Hello World - ${i + 1}`);
  }
};
arrowHelloWorld();
