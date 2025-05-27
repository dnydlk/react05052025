const giveMeNames = (str: string) => {
  const res = []
  const capitalized = []
  const dashed = []
  const strs = str.split(" ")
  console.log(strs)
  for (let s of strs) {
    capitalized.push(s.charAt(0).toUpperCase() + s.slice(1))
    dashed.push("-" + s.toLowerCase())
  }
  res.push(capitalized.join(""))
  res.push(dashed.join(""))
  res.push(str)
  return res
}

const myStrs = giveMeNames("Updating objects inside arrays")
for (const each of myStrs) {
  console.log(each)
}
