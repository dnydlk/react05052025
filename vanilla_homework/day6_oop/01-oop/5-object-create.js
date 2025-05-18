//- Object of Prototype
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
  },
}

//* 1. Create Object
const book1 = Object.create(bookProtos)
book1.title = "Book1"
book1.author = "john Dow"
book1.year = "2013"
console.log(book1)

//* 2. Create Object
const book2 = Object.create(bookProtos, {
  title: { value: "Book1" },
  author: { value: "john Dow" },
  year: { value: "2013" },
})
console.log(book2)
