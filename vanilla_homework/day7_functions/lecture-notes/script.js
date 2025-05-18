// W2D2 lecture
// purpose of prototypt
// reuse the methods from inheritance

class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  // why in class doesn't have function keyword??
  getSummary() {
    // console.log("object", this);
    return `Summary: Book ${this.title} written by ${this.author}`
  }
}

const book1 = new Book("B1", "A1")
const book2 = new Book("B1", "A1")
const book3 = new Book("B3", "A1")

// console.log(book1.getSummary === book2.getSummary) // false
// two different function

// console.log(book1.author === book2.author); // string comparison by value (all premetive types comparison are done by value)

// console.log(book1.getSummary());

// console.log(Book.prototype.getSummary())

// console.log(book1)

//* this: the object that is executing the current function

// const getSum = book1.getSummary
const getSum = book1.getSummary.bind(book1)

console.log(getSum());
// object undefined -> the current object 
// undefined -> no return 