import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function generateBandName(req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
}
app.use(generateBandName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/sumit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
// 1. instal packages and import
// morgan , body-parser, express
// 2. create get request for the html of the website
// 3. use  middlewear to get information from the post request
// 4. create a send requst to send back the combined result of the words submited

// what is body
