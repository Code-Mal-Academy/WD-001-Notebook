//! Creating A Counter

const textBox = document.getElementById("textbox")

const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById('decrement')

let number = 0

textBox.innerText = number

incrementButton.addEventListener("click", function () {
    number = number + 1;
    textBox.innerText = number
})

//? Decrement Button 

decrementButton.addEventListener("click", function () {
    number = number - 1;
    textBox.innerText = number
})