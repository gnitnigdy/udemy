let collectionData = [50, 7, 5, 20, 8, 23, 17, 19];

function linearSearch(collectionData, searchValue) {
  for (let i = 0; i < collectionData.length; i++) {
    if (collectionData[i] === searchValue) {
      return true;
    }
  }
  return false;
}

let searchResultNilai1 = linearSearch(collectionData, 17);
console.log(searchResultNilai1);

let searchResultNilai2 = linearSearch(collectionData, 77);
console.log(searchResultNilai2);
