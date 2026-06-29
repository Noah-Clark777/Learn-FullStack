import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    const drink = result.data.drinks[0];
    res.render("index.ejs", { drink });
  } catch (err) {
    console.error("Failed to fetch drink", err.message);
    res.status(500).send("Unable to load a drink right now.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
