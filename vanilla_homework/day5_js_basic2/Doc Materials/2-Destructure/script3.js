// https://www.youtube.com/watch?v=-vR3a11Wzt0
let voxel = { x: 3.6, y: 7.4, z: 6.54 }
const { x, y, z } = voxel
const { x: a, y: b, z: c } = voxel

const nest = {
  start: {
    x: 5,
    y: 6,
  },
  end: {
    x: 10,
    y: 12,
  },
}

const {
  start: { x: startX, y: startY },
} = nest

const [q, r] = [1, 2, 3, 4, 5]
console.log(q, r) // 1 2
const [e, , , t] = [1, 2, 3, 4, 5]
console.log(e, t) // 1 4
const [u, v, ...rest] = [1, 2, 3, 4, 5]
console.log(u, v, rest) // 1 2 [ 3, 4, 5 ]

const profileUpdate = ({ name, age, email }) => {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`)
}
