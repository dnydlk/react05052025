const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
}

// get the average age of the people
export const getAverageAge = (people) => {
  let totalAge = 0
  Object.values(people).forEach((p) => (totalAge += p.age))
  return totalAge / Object.entries(people).length
}
