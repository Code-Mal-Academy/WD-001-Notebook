// const sampleNode = document.getElementById("sample")

// const newTextNode = document.createElement("h1")
// newTextNode.innerText = "Hello"


// const newBoldNode = document.createElement("b")

// newBoldNode.appendChild(newTextNode)
// sampleNode.appendChild(newBoldNode)
// sampleNode.removeChild(newBoldNode)

// console.log(sampleNode)

// const tagNameNode = document.getElementsByTagName("ul")

// // console.log(tagNameNode)

// // //! This Return An Array
// const liTagNode = tagNameNode[0].getElementsByTagName("li")

// console.log(liTagNode)

// // //! Tips: You can't run forEach on HTML TagNameNode

const classNameNode = document.getElementsByClassName("list")
const liNode = classNameNode[0].querySelectorAll("li")

liNode.forEach((x) => console.log(x.innerText))

// //! Tip: .querySelector() return first value, while .querySelectorAll returns all