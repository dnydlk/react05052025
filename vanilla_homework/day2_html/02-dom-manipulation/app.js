//- https://www.youtube.com/watch?v=5fb2aPlgoys

//* DOM Manipulation

//* GetElementById()
// const title = document.getElementById("main-heading")
// console.log(title)

//* GetElementByClassName()
// const listItems = document.getElementsByClassName("list-items")
// console.log(listItems)

//* GetElementByTagName()
// const listItems = document.getElementsByTagName("li")
// console.log(listItems)

//* querySelector() select css style selector
// const container = document.querySelector("div")
// console.log(container);

//* querySelectorAll()
// const containers = document.querySelectorAll("div")
// console.log(containers);

// * Styling an Element
// const title = document.querySelector("#main-heading")
// * in-line styling
// title.style.color = "red"
// * Only works on a single element
// const listItems = document.querySelectorAll(".list-item")
// console.log(listItems);
// listItems.style.fontSize = "4rem"

//* Create an Element
const ul = document.querySelector("ul")
const xMenLi = document.createElement("li")

//* Adding elements
// ul.append(xMenLi)

//* Modifying the text
// const firstListItem = document.querySelector(".list-items")
// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent)
// console.log(firstListItem.innerHTML) // security issue, user can inject js into this
// xMenLi.innerText = "X-men"

//* Modifying Elements Attributes & Classes
//* Attributes
// xMenLi.setAttribute("id", "main-heading")
// xMenLi.removeAttribute("id")

// const title = document.querySelector("#main-heading")
// console.log(title.getAttribute("id"))

//* Classes
// xMenLi.classList.add("list-items")
// xMenLi.classList.remove("list-items")
// console.log(xMenLi.classList.contains("list-items"));

//* Remove Elements
// xMenLi.remove()

//* Traversing the DOM
//* Parent Node Traversal
// let ul = document.querySelector("ul")
// console.log(ul.parentNode)
// console.log(ul.parentElement)
//* Grandparent
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement
// console.log(html.parentNode); // #document
// console.log(html.parentElement); // null because parentElement only returns element, if the result is not an element, it will be null

//* Child Node Traversal
// let ul = document.querySelector("ul")
// console.log(ul.childNodes)
// console.log(ul.firstChild) // first node
// console.log(ul.lastChild) // last node
// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

//* Sibiling Node Traversal
// let ul = document.querySelector("ul")
// const div = document.querySelector("div")
// console.log(div.childNodes);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

//* Event Listeners

//* Load Events

//* Touchdown Events

//* Keydown Events

//* Click Event
//* 1. <button onclick="function()">click me <button>
//* 2. addEventListener
const button = document.querySelector("button")
function alertBtn() {
  alert("I love JS")
}
button.addEventListener("click", alertBtn)

//* Mousedown Event
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "red"
})

//* Reveal Event
