import { readFile } from "fs";
import { createServer } from "http";

// createServer((req, res) => {

//     let body;

//     if (req.method === "POST") {
//         req.on("data", (data) => body = data.toString())

//         req.on("end", () => console.log(JSON.parse(body)))
//     }

// }).listen(8080)


createServer((req, res) => {

    if (req.url === "/html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readFile("./html/index.html", (err, data) => {
            if (err) console.log(err)
            res.end(data);
        })
    }

    if (req.url === "/json") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ name: "Tom", age: 19 }));
    }


}).listen(8080)