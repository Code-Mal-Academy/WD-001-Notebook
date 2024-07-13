import express from "express"

const app = express()

app.get("/api/blogs", async (req, res) => {
    return res.json({ msg: "Hello" })
})

export default app