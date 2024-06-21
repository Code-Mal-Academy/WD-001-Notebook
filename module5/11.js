import express from "express"
import cors from "cors"
//? npm install cors

//? You can control Access With CORS
app.use(cors())

const app = new express()

app.get("/", (req, res) => {
    res.send(objectArray)
})

app.listen(3000)