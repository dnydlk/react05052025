//* localStorage
localStorage.setItem("name", "bob")
console.log("localStorage " + localStorage.getItem("name"))
localStorage.removeItem("name")
console.log("localStorage " + localStorage.getItem("name"))

//* sessionStorage
//*   works same as localStorage
sessionStorage.setItem("name", "Tom")
console.log("sessionStorage: " + sessionStorage.getItem("name"))
// sessionStorage.removeItem("name")
sessionStorage.setItem("name", "Bob")
//* Overwrite
console.log("sessionStorage: " + sessionStorage.getItem("name"))

//* Cookies
//*   see & set
// document.cookie = "name=Kyle"
//* set expiration date
document.cookie = "name=Kyle; expires=" + new Date(2026, 0, 1).toUTCString() + "; path=/;"
document.cookie = "name2=Dan; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/;"