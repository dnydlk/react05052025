// const s1 = "Hello"
// const s2 = new String("Hello")
// console.log(typeof s1); // string
// console.log(typeof s2); // object 

// console.log(window);
// alert(1)

// console.log(navigator.appVersion);

//- Object Literal
const book1 = {
  title: "Book1",
  author: "John Doe",
  year: "2013",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}
const book2 = {
  title: "Book2",
  author: "Jane Doe",
  year: "2013",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}
// console.log(book1);
// console.log(book1.title);
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(Object.keys(book2));
// console.log(Object.values(book2));