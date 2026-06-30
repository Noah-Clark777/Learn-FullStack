import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "B4dinner",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.username;
  try {
    const checkResults = await db.query("SELECT * FROM users WHERE email =$1", [
      email,
    ]);
    if (checkResults.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      const result = await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2)",
        [email, password],
      );
    }

    res.render("secrets.ejs");
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.username;
  try {
    const result = await db.query(`SELECT * FROM users WHERE email = $1`, [
      emial,
    ]);
    if (result.row > 0) {
      const user = result.row[0];
      const storedPassword = user.password;
      if (password === storedPassword) {
        res.render("secress.ejs");
      } else {
        res.send("Incorrect Password");
      }
    } else {
      res.send("Username Not Found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
