//! Document Object Model

//! PLEASE BE CAREFUL OF DEFER

// document.write("Hello")

const textBox = document.getElementById("textbox")
const button = document.getElementById("button")

// textBox.innerText = "Hi"
// textBox.innerHTML = "<i>Here Is Temporary <br /> Text</i>"



button.addEventListener("click", function () {
    textBox.innerText = "Hi"
})
