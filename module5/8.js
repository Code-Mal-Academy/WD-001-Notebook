import express from "express"

const app = new express()

//? You can add Middleware by app.use()
//? Middleware will run on every request
// app.use((req, res, next) => {
//     console.log(req.ip)
//     next()
// })

//? Parsing JSON
app.use(express.json())

//? POST Request
app.post("/", (req, res) => {
    const body = req.body
    console.log(body)
    return res.send("OK")
})

app.listen(3000)