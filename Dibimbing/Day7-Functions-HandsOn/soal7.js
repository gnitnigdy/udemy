//lodash

import _ from "lodash";

const filterArrayObjectAndGrouping = (arrayData) => {
  const arrSudahDiFilter = _.filter(arrayData, function (objectPerson) {
    return objectPerson.age > 20 && objectPerson.age < 30;
  });
  const arraySudahDiGrouping = _.groupBy(arrSudahDiFilter, "city");
  return arraySudahDiGrouping;
};

const arrayPerson = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 22, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "David", age: 28, city: "Chicago" },
  { name: "Eve", age: 21, city: "San Francisco" },
];

const newArrayPerson = filterArrayObjectAndGrouping(arrayPerson);
console.log(newArrayPerson);
