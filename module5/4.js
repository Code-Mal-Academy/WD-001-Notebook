import { readFile } from "fs"

const file = readFile("./4.txt", (err, data) => {
    if (err) console.log(err)
    console.log(data.toString())
})

console.log(file)