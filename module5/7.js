import express from "express"

const app = new express()

const objectArray = [{
    id: 1,
    name: "Tom",
    age: 18,
    male: true
}, {
    id: 2,
    name: "Max",
    age: 19,
    male: true
}, {
    id: 3,
    name: "Ari",
    age: 13,
    male: false
}]

app.get("/", (req, res) => {
    res.send(objectArray)
})

//? Params
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const filteredArray = objectArray.filter((x) => x.id === id)
    res.send(filteredArray)
})

//? Query
app.get("/users", (req, res) => {
    const age = parseInt(req.query.age)
    const filteredArray = objectArray.filter((x) => x.age === age)
    res.send(filteredArray)
})

app.listen(3000)