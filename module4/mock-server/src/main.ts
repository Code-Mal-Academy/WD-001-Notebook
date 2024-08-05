import express from "express"
import data from "./db"

const app = express()

app.use(express.json())

app.get("/", async (req, res) => res.status(200).send(data))

app.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    if (!id) return res.status(400).send({ msg: "Not Found" })
    const filteredData = data.filter(person => person.id === id)
    return res.status(200).send(filteredData)
})

app.post("/", async (req, res) => {
    const body = req.body as Omit<typeof data[number], 'id'>
    const largestId = data.reduce((maxId, obj) => obj.id > maxId ? obj.id : maxId, 0) + 1
    data.push({ id: largestId, ...body })
    return res.status(201).send({ id: largestId, ...body })
})

app.put("/", async (req, res) => {
    const body = req.body as typeof data[number]
    data.forEach((user, index) => {
        if (user.id === Number(body.id)) {
            body.id = Number(body.id)
            data[index] = body
        }
    })
    const editedUser = data.filter(user => user.id === body.id)[0]
    return res.status(200).send(editedUser)
})

app.delete("/", async (req, res) => {
    const body = req.body as { id: number }
    data.forEach((user, index) => {
        if (user.id === body.id) {
            data.splice(index, 1)
        }
    })
    return res.status(200).send({ message: "Data Has Been Deleted" })
})

const port = 8080

app.listen(8080, "", () => console.log("Server is Running On Port:8080"))