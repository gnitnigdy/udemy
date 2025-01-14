//Object => for collecting data that have not to be in ordered sequence
// Object is colletions of properties that have key and value pairs.
// Object sometimes refer to dictionaries
const fitBitData = {
  steps: 308756,
  totalFloor: 1814,
  longestSteps: 211,
};

console.log(fitBitData);

//accessing object properties
const pallete = {
  red: "#RRR",
  666: "blue",
  "sheila on 7": "band",
  liquor: { liquorName: "whiskey" },
};

console.log(pallete.red);
console.log(pallete["666"]);
console.log(pallete["sheila on 7"]);

//if you access something there is not in object it will return undefined

//adding & updating properties in object
pallete.walks = "okay";
pallete["makan nasi"] = "ngga ah";
pallete["coba duren"] = 1;

pallete["coba duren"] = 1 + 5;

console.log(pallete.liquor["liquorName"]);
console.log(pallete.liquor.liquorName);

//Objects and reference type -> work same way with array
//use const for objects

//array and objects equality
