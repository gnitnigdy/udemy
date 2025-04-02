/*const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//destructuring
const books = getBook(2);
console.log(books);

const { title, author, genres, pages } = books;
console.log(title);
console.log(author);

const [genres1, genres2, genres3] = genres;
console.log(genres1);
console.log(genres2);
console.log(genres3);

const [genresA, genresB, ...otherGenres] = genres;
console.log(genresA);
console.log(genresB);
console.log(otherGenres);

const updateBook = { ...books, developer: "Yohanes Damenta", indexTeam: 6 };
console.log(updateBook);

//template literals
console.log(`Hi my name is ${genres1} and you are ${genres2}`);

//ternaries
// structure of this -> condition ? true : false
console.log(pages > 1000 ? "Much" : "Little");
//it will return much if pages of books more than 1000 and Little if books.pages return less than 1000

//Arrow function is useful for writing a one liner function
const getYear = (str) => str.split("-")[0];

//Short circuiting
console.log(2 + 2 && 2 / 2);

//falsy value: 0, '', null, undefined, false
//nullish coalescing
//const count = books[0].reviews.librarything.reviewsCount ?? "nodata";

//optional chaining
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount; //optional chaining check whether have properties or not

  const librarything2 = book.review.librarything?.reviewsCount ?? 0; //after optional chaining using nullish coalescing to convert to 0.
}

//map, filter, reduce -> functional array methods where do not mutate the original array.

const mapBooks = getBooks();
console.log(mapBooks);

const mapBooks2 = mapBooks.map((el) => {
  if (el.id % 2 === 0) {
    return el;
  }
});
console.log(mapBooks2);

console.log(`this is essential data log:`);
const essentialData = mapBooks.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
console.log(essentialData);

//filter method
const longBooks = mapBooks
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const allBooksPages = mapBooks.reduce((acc, book) => acc + book.pages, 0);
console.log(`total keseluruhan halaman buku: ${allBooksPages}`);

//sorting method -> in javascript is based on string -> IT IS MUTATING ORIGINAL ARRAY

const x = [3, 10, 5, 2, 1, 9, 7];
const xSorted = x.map((el) => el).sort((a, b) => a - b);

console.log(x);
console.log(xSorted);

const sortedByPages = mapBooks
  .slice()
  .sort((item1, item2) => item1.pages - item2.pages);
console.log(sortedByPages);

//Working with immutable Arrays
const newBook = {
  id: 6,
  title: "New Javascript Programming Book",
  author: "Yohanes Damenta",
};

//adding new elements
const booksAfterAdd = [...mapBooks, newBook];
console.log(booksAfterAdd);

//delete elements
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

//updating a book in elements
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1124 } : book
);
console.log(`ini after update`);
console.log(booksAfterUpdate);
*/

//promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
console.log("jonas");

//async await methods
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.st;
}

getTodos();
