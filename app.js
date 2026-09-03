const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);

    if (req.url === "/script.js") {
        filePath = path.join(__dirname, "public", "script.js");
    }

    if (req.url === "/style.css") {
        filePath = path.join(__dirname, "public", "style.css");
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
        }

        const ext = path.extname(filePath);
        const contentTypes = {
            ".html": "text/html",
            ".js": "text/javascript",
            ".css": "text/css"
        };

        res.writeHead(200, {
            "Content-Type": contentTypes[ext] || "text/plain"
        });

        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Student Task Manager running at http://localhost:${PORT}`);
});
