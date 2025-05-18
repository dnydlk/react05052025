const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")

const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red"
    setTimeout(() => {
      second.style.color = "blue"
      setTimeout(() => {
        third.style.color = "green"
      }, 2000)
    }, 3000)
  }, 1000)
})
