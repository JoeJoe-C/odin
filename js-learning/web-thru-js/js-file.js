//creating tags
const body = document.querySelector("body")
const redParagraph = document.createElement("p")
const blueLargeHeader = document.createElement("h3")
const divSection = document.createElement("div")
const headerInDiv = document.createElement("h1")
const paraInDiv = document.createElement("p")

//insert content
redParagraph.textContent = "Hey I'm red!"
redParagraph.style.color = "red"
blueLargeHeader.textContent = "I'm a blue h3!"
blueLargeHeader.style.color = "blue"
divSection.style.borderColor = "black"
divSection.style.backgroundColor = "pink"
headerInDiv.textContent = "I'm in a div"
paraInDiv.textContent = "ME TOO!"


//add stuff to div section
divSection.append(headerInDiv, paraInDiv)
//add to dom
body.append(redParagraph, blueLargeHeader, divSection)

