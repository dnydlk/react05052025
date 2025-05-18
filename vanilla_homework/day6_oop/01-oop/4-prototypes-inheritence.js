//- Constructor (ES5)
//* Constructor is like a function
function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}

//* getSummaryas as prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`
}

//* Magazine Constructor
function Magazine(title, author, year, month) {
  //! Include the current Magazine instance into Book()
  Book.call(this, title, author, year)
  this.month = month
}

//* let Magazine Inherit the Prototype method from Book
Magazine.prototype = Object.create(Book.prototype)

//* Instatiate a Magazine Object from the constructor
const mag1 = new Magazine("Mag1", "John Doe", "2013", "Jan")

//* Use Magazine Constructor
Magazine.prototype.constructor = Magazine 