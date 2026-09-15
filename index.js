import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "node:path";

const app = express();
const port = 3000;
app.use(morgan("tiny"));
const __dirName = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(__dirName + "/");
});

app.get("/Posts.html", (req, res) => {
    res.sendFile(__dirName + "/Posts.html");
});

app.get("/Upload.html", (req, res) => {
    res.sendFile(__dirName + "/Upload.html");
});

app.get("/FAQs.html", (req, res) => {
    res.sendFile(__dirName + "/FAQs.html");
});

app.get("/About.html", (req, res) => {
    res.sendFile(__dirName + "/About.html");
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}.`);
});