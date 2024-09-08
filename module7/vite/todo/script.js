import axios from "axios"
import "../utils/axios"

const logoutBtn = document.getElementById("logout")

logoutBtn.addEventListener("click", async () => {
    await axios.post("/auth/logout")
    window.location.reload()
})



document.addEventListener('DOMContentLoaded', async () => {

    try {
        const req = await axios.get("/todo")

        console.log(req.data)




    } catch (e) {
        if (e.request.status === 401) {
            window.location.href = "/login"
        }

    }

})