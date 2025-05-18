class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
  
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

const book1 = new Book("Book1", "John Doe", "2025")
console.log(book1.getSummary())
// 

//* Run static methods on the Class
console.log(Book.topBookStore()); // Barnes & Noble