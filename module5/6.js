import express from "express"

const app = new express()

app.get("/", (req, res) => {
    res.send({ name: "Tom", age: 18, occupation: "Student" })
})

app.get("/hi", (req, res) => {
    res.send("Hi There")
})

app.listen(3000)