const inputEl = document.getElementById("input")
const addBtn = document.querySelector("button[class='add-btn']")
const todoItems = document.getElementById("todo-items")

const items = []

const checkInput = (value) => value.trim().length > 0

const AddTodoItem = (inputText) => {
  const wrapper = document.createElement("div")
  wrapper.className = "item-wrapper"

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.className = "item-checkbox"
  //! source: Claude
  checkbox.addEventListener("change", (e) => {
    const todoText = e.target.nextElementSibling
    todoText.style.textDecoration = e.target.checked ? "line-through" : "none"
  })
  wrapper.appendChild(checkbox)

  const itemName = document.createElement("p")
  itemName.className = "todo-item"
  itemName.innerText = inputText
  itemName.addEventListener("click", (e) => {
    const itemCheckbox = e.target.previousElementSibling
    itemCheckbox.checked = !itemCheckbox.checked
    e.target.style.textDecoration = itemCheckbox.checked ? "line-through" : "none"
  })
  wrapper.appendChild(itemName)

  const deleteButton = document.createElement("button")
  deleteButton.className = "delete-btn"
  deleteButton.textContent = "x"
  //! source: Claude
  deleteButton.addEventListener("click", () => {
    wrapper.remove()
    items = items.filter((item) => item !== wrapper)
  })
  wrapper.appendChild(deleteButton)

  items.push(wrapper)
  todoItems.appendChild(wrapper)
}

const handleAdd = () => {
  if (checkInput(inputEl.value)) {
    AddTodoItem(inputEl.value)
    inputEl.value = ""
    //! source: Claude
    inputEl.focus()
  } else console.log("value is none")
}

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(e.key)
    handleAdd()
  }
})

addBtn.addEventListener("click", () => {
  console.log("Add button clicked")
  handleAdd()
})
