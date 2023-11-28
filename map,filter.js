// Write a JavaScript function that takes an array of objects representing books, filters out the books with a rating less than 4, maps the remaining books to their titles, and returns an array of book titles.

const books = [
    { title: "My Book", rating: 90 },
    { title: "My Life", rating: 2000 },
    { title: "Hum", rating: 3 },
    { title: "Ye", rating: 9 }
  ];
  
  const Books = (books) => {
    return books
      .filter(book => book.rating >= 4)
      .map(book => book.title);
  };
  
  const output = Books(books);
  console.log(output);




const c=books.filter((ele)=>ele.rating<4).map((name)=>name.title);
console.log(c);



const filterBooks = (books) => {
    const filteredBooks = books.filter((book) => book.rating >= 4);
    const titles = filteredBooks.map((book) => book.title);
    return titles;
  };
  
  const book = [
    { title: "The Great Gatsby", rating: 4.5 },
    { title: "To Kill a Mockingbird", rating: 4.8 },
    { title: "1984", rating: 3.9 },
    { title: "Pride and Prejudice", rating: 4.2 },
    { title: "The Catcher in the Rye", rating: 3.7 }
  ];
  
  const filteredTitles = filterBooks(book);
  console.log(filteredTitles);



const obj=books.filter(book=>book.rating<4).map(obj=>obj.title);
console.log(obj);


const result = (books) => {
    const filteredBooks = books.filter((book) => book.rating < 4);
    const titles = filteredBooks.map((book) => book.title);
    return titles;
  };
  console.log(result(books));





const object = [
    {
      a: 3,
      b: "H",
      c: () => console.log("Hi"),
    },
    {
      a: 4,
      b: "H",
      c: () => console.log("Hi"),
    },
    {
      a: 3,
      b: "H",
      c: () => console.log("Hi"),
    },
  ];
  const res = object
    .filter((x) => x.a === 3)
    .map((y) => {
      for (const z in y) {
        if (y[z] === 3) console.log(z);
      }
    });



