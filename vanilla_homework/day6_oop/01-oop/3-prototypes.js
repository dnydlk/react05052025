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

//* getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year
  return `${this.title} is ${years} years old`
}

//* Revise -> change this.Year
Book.prototype.revise = function (newYear) {
  this.year = newYear
  this.revised = true 
}

//* Instatiate Objects from the constructor
const book1 = new Book("Book1", "John Doe", "2013")
const book2 = new Book("Book2", "Jane Doe", "2014")

console.log(book2);
book2.revise("2016")
console.log(book2);
