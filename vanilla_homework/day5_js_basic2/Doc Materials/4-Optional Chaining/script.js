// https://youtu.be/v2tJ3nzXh8I?si=gi4x7Rn4DEYomNNT&t=379
class Person {
  constructor(name, address, hobbies) {
    this.name = name
    this.address = address
    this.hobbies = hobbies
  }

  print() {
    console.log(this)
  }
}

function printPersonStreet(person) {
  // Optional chaining
  console.log(person?.address?.street ?? "Street not available")
}

const kyle = new Person("Kyle", undefined, ["coding", "reading"])
kyle.print()
printPersonStreet(kyle)
kyle.printName?.()
// ?. check if printName exists
// () will call the function if it exists
