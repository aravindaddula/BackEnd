import { log } from "console";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // console.log(req.rawHeaders);
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// mount the middleware
app.use(bodyParser.urlencoded({extended:true}))

app.post("/userbands",(req,res)=>{
  console.log(req.body);
  console.log(req.body.street);
  console.log(req.body.pet);
})