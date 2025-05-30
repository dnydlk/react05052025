const giveMeNames = (str: string) => {
  const res = []
  const noSpaceCapitalized = []
  const dashed = []
  const spacedCapitalized = []
  const minorWords = new Set([
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "for",
    "nor",
    "on",
    "at",
    "to",
    "from",
    "by",
    "in",
    "of",
  ])

  const strs = str.split(" ")
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i].toLowerCase()
    noSpaceCapitalized.push(word.charAt(0).toUpperCase() + word.slice(1))
    dashed.push("-" + word)
    if (i === 0 || !minorWords.has(word)) {
      spacedCapitalized.push(word.charAt(0).toUpperCase() + word.slice(1))
    } else {
      spacedCapitalized.push(word)
    }
  }
  res.push(noSpaceCapitalized.join(""))
  res.push(dashed.join(""))
  res.push(spacedCapitalized.join(" "))
  return res
}

const myStrs = giveMeNames("How to italicize comments in VS Code")
for (const each of myStrs) {
  console.log(each)
}
