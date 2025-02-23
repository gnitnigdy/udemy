//Default Function Parameters -> Orders absolutely matters!
function multiply(x = 5, y) {
  console.log(x * y);
}

multiply(4, 2);
multiply(4);

const x = {
  a: "1",
  b: "2",
  c: 3,
};

const y = { d: "4", e: 5, f: [6], a: "15" };

const z = { ...y, ...x };

console.log(z);

const funcArguments = (...arr) => {
  console.log(arr);
};

const funcArguments2 = (x) => {
  console.log(arguments);
};

console.log(funcArguments(1, 2, 3, 4, 5));
console.log(funcArguments2(1, 2, 3, 4, 5));

const funcRestParameters = function (a, ...b) {
  //console.log(a);
  const tempA = [a, ...b];
  return tempA
    .filter((item) => typeof item === "number")
    .reduce((acc, curr) => acc * curr);
};

console.log(funcRestParameters("a", 1, 2, 3, 4));

//destructuring arrays -> unpack values from arrays

const raceResults = ["a", "b", "c", "d", "e", "f", "g"];

let [firstWinner, ...elseWinner] = raceResults;

let [first, , , fourth] = raceResults;

console.log(firstWinner);
console.log(elseWinner);

console.log(fourth);

//destructuring objects -> unpack properties from objects

const runner = {
  firstName: "Elia",
  lastName: "Kipchoge",
  country: "Kenya",
  title: "Kocaks",
};

let { firstName, lastName, ...othersVar } = runner;
console.log(firstName);
console.log(lastName);
console.log(othersVar);

//nested destructuring
const resultOfTheResults = [
  {
    firstName: "Elia1",
    lastName: "Kipchoge1",
    country: "Kenya1",
    title: "Kocaks1",
  },
  {
    firstName: "Elia2",
    lastName: "Kipchoge2",
    country: "Kenya2",
    title: "Kocaks2",
  },
  {
    firstName: "Elia3",
    lastName: "Kipchoge3",
    country: "Kenya3",
    title: "Kocaks3",
  },
  {
    firstName: "Elia4",
    lastName: "Kipchoge4",
    country: "Kenya4",
    title: "Kocaks4",
  },
];
