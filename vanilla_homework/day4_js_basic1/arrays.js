// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false

  if (str.length === 0) return false
  return !isNaN(str)
  /*
  Can't use Number(str), typeof str === "string"
  Because typeof NaN is "number"
   */
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3

  // if (arr.some((each) => isNaN(each))) return 0
  // return arr.reduce((acc, num) => acc + Number(num), 0) / arr.length

  let totalNum = 0
  for (const each of arr) {
    if (isNaN(each)) return 0

    totalNum += Number(each)
  }
  return totalNum / arr.length
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  if (people.length === 0) return 0

  let totalAge = 0
  for (const p of people) {
    totalAge += p.age
  }
  return totalAge / people.length
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)

  let totalAge = 0
  let sameJobCount = 0
  for (const p of people) {
    if (p.job === job) {
      totalAge += p.age
      sameJobCount++
    }
  }
  return totalAge === 0 ? 0 : totalAge / sameJobCount
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];

  if (arr.length === 0) return 0

  let currMax = arr[0]
  for (let i = 1; i < arr.length; i++) {
    currMax = arr[i] > currMax ? arr[i] : currMax
  }
  return currMax
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';

  if (str.length === 0) return ""

  const strArr = str.split(" ")
  let currMaxStr = strArr[0]
  for (let i = 1; i < strArr.length; i++) {
    currMaxStr = strArr[i].length > currMaxStr.length ? strArr[i] : currMaxStr
  }
  return currMaxStr
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]

  if (arr.length === 0) return []

  const evenNumArr = []
  for (const a of arr) {
    if (a % 2 === 0) evenNumArr.push(a)
  }
  return evenNumArr
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]

  for (let i = 0; i < num.length; i++) {
    let haveSwapped = false
    for (let j = 0; j < num.length - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        ;[num[j], num[j + 1]] = [num[j + 1], num[j]]
        haveSwapped = true
      }
    }
    if (!haveSwapped) break
  }

  const sortedArr = []
  for (const n of num) sortedArr.push(n)

  return sortedArr
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.

  for (let i = 0; i < num.length; i++) {
    let haveSwapped = false
    for (let j = 0; j < num.length - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        ;[num[j], num[j + 1]] = [num[j + 1], num[j]]
        haveSwapped = true
      }
    }
    if (!haveSwapped) break
  }
  return num
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]

  if (arr.length === 0) return []

  const outputArr = []
  for (const a of arr) {
    if (typeof a === typeToRemove) continue
    outputArr.push(a)
  }
  return outputArr
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
}

//! todo: clean up code
