class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}

//* Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    //* Calling parent constructor
    super(title, author, year)
    this.month = month
  }
}

const mag1 = new Magazine("Mag1", "Jane Doe", "2025", "April")
//* Using sub-classes don't have to explicitly inherit the constructor
console.log(mag1);
//* Using sub-classes don't have to explicitly inherit the prototype methods
console.log(mag1.getSummary());
