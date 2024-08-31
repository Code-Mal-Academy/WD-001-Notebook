import express from "express"
import cors from "cors"
//? npm install cors

const app = new express()

//? You can control Access With CORS
app.use(cors())

app.get("/", (req, res) => {
    res.send(objectArray)
})


app.post("/", (req, res) => res.send("Hello"))

app.listen(3000)