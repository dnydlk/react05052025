//- Constructor (ES5)
//* Constructor is like a function
function Book(title, author, year) {
  // console.log("Book Initialized");
  this.title = title
  this.author = author
  this.year = year
  //* getSummaryas as property
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}

//* Instatiate Object from the constructor
const book1 = new Book("Book1", "John Doe", "2013")
const book2 = new Book("Book2", "Jane Doe", "2014")

//* get title of Book1
// console.log(Book1.title);

// console.log(book1.getSummary())

console.log(book1);
