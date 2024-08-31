import express from "express"
import objectArray from "./db"

const app = new express()


app.get("/", (req, res) => {
    res.send(objectArray)
})

//? Params
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const filteredArray = objectArray.filter((x) => x.id === id)
    if (filteredArray.length === 0) res.status(404).send({ msg: "No Users" })
    res.send(filteredArray)
})

//? Query
app.get("/users", (req, res) => {
    const male = Boolean(req.query.male)
    const age = parseInt(req.query.age)
    const filteredArray = objectArray.filter((x) => x.age === age && x.male === male)
    res.send(filteredArray)
})

app.listen(3000)