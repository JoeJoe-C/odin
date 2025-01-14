//creating tags
const body = document.querySelector("body")
const redParagraph = document.createElement("p")
const blueLargeHeader = document.createElement("h3")
const divSection = document.createElement("div")
const headerInDiv = document.createElement("h1")
const paraInDiv = document.createElement("p")

//insert content
redParagraph.textContent = "Hey I'm red!"
redParagraph.style.backgroundColor = "red"
blueLargeHeader.textContent = "I'm a blue h3!"
blueLargeHeader.


//add stuff to div section
divSection.appendChild(headerInDiv, paraInDiv)
//add to dom
body.appendChild(redParagraph)
body.appendChild(blueLargeHeader)
body.appendChild(divSection)

