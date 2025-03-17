//object types

function printName(person: { first: string; last: string }) {}

console.log(printName({ first: "Thomas", last: "Billy" }));

//creating new Type for function

export type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 24, y: 30 };

function createRandomCoordinate(point: Point): Point {
  return { x: Math.random(), y: Math.random() };
}

let coordinate2: Point = createRandomCoordinate({ x: 15, y: 30 });
console.log("ini coordinate2: ", coordinate2);
