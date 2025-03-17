"use strict";
//object types
Object.defineProperty(exports, "__esModule", { value: true });
function printName(person) { }
console.log(printName({ first: "Thomas", last: "Billy" }));
var coordinate = { x: 24, y: 30 };
function createRandomCoordinate(point) {
    return { x: Math.random(), y: Math.random() };
}
var coordinate2 = createRandomCoordinate({ x: 15, y: 30 });
console.log("ini coordinate2: ", coordinate2);
