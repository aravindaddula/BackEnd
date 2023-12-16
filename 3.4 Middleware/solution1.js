import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

//req.body and req.query both returns a document

app.post("/userbands", (req, res) => {
  console.log(req.body);
  res.send({message:"Your input recieved"})
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});