//filter array untuk mengembalikan data berupa number atau string yang berasal dari parameter

const arrExample = [
  1,
  2,
  3,
  4,
  5,
  6,
  { nama: "damenta" },
  [1, 2, 3, 4],
  true,
  false,
  null,
  undefined,
];

function customFilterArray(arr, type) {
  if (
    type !== "number" &&
    type !== "string" &&
    type !== "boolean" &&
    type !== "null" &&
    type !== "undefined" &&
    type !== "object"
  ) {
    return "Wrong Data Type!";
  }
  return arr.filter((item) => {
    return typeof item === type;
  });
}

console.log(typeof null);

console.log(customFilterArray(arrExample, "object"));
