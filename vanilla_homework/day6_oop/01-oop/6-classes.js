class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  //* Add a getSummary method
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }

  revise(newYear) {
    this.year = newYear
    this.revised = true
  }

  //* Static method
  static topBookStore() {
    return "Barnes & Noble"
  }
}

//* Instantiate an Object
const book1 = new Book("Book1", "John Doe", "2013")
// console.log(book1)

//* Run static methods on the Class
console.log(Book.topBookStore());
