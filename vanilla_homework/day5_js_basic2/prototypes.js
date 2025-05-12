// reinvent the wheel: prototype methods

export function myMap(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myMap(arr, num => num * 2);
  // Expected output: [2, 4, 6, 8, 10]
  const outputArr = []
  for (const a of arr) {
    outputArr.push(cb(a))
  }
  return outputArr
}

export function myFilter(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFilter(arr, num => num % 2 === 0);
  // Expected output: [2, 4]
  const outputArr = []
  for (const a of arr) {
    if (cb(a)) outputArr.push(a)
  }
  return outputArr
}

export function myConcat(arr1, arr2) {
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
  return [...arr1, ...arr2]
}

export function myFind(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2
  for (const a of arr) {
    if (cb(a)) return a
  }
}

export function myEvery(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true
  for (const a of arr) {
    if (!cb(a)) return false
  }
  return true
}

export function mySome(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true
  for (const a of arr) {
    if (cb(a)) return true
  }
  return false
}

export function myIncludes(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true
  for (const a of arr) {
    if (a === val) return true
  }
  return false
}

export function myJoin(arr, separator) {
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
  let output = ""
  for (let i = 0; i < arr.length - 1; i++) {
    output += arr[i]
    output += separator
  }
  return (output += arr[arr.length - 1])
}

export function myPush(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
  arr[arr.length] = val
  return arr
}

export function myReverse1(arr) {
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]
  const output = [...arr]
  let l = 0
  let r = output.length - 1
  while (l < r) {
    ;[output[l], output[r]] = [output[r], output[l]]
    l++
    r--
  }
  return output
}

export function myReverse2(arr) {
  // Same as above but this time returns the original array reference reversed.
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    ;[arr[l], arr[r]] = [arr[r], arr[l]]
    l++
    r--
  }
  return arr
}

// Challenges
export function myReduce(arr, cb, initial) {
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15
  let accumulator = initial
  for (const a of arr) {
    accumulator = cb(accumulator, a)
  }
  return accumulator
}

export function mySort(arr, cb) {
  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
}

export function mySlice(arr, start, end) {
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
}
