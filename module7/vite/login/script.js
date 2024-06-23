import axios from "axios"

const userField = document.getElementById("userField")
const passwordField = document.getElementById("passwordField")
const submitButton = document.getElementById('submitBtn')



submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = userField.value
    const password = passwordField.value

    const req = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password
    })
    const res = await req.data;



})