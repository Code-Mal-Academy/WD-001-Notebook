import axios from "axios"

const emailField = document.getElementById("emailField")
const passwordField = document.getElementById("passwordField")
const submitButton = document.getElementById('submitBtn')

submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = emailField.value
    const password = passwordField.value

    const req = await axios.post("http://localhost:8080/auth/register", {
        email: email,
        password: password
    })
    const status = req.status;

    if (status === 201) {
        window.location.href = "/login"
    }




})