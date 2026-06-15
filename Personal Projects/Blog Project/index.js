import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogPosts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: blogPosts });
});

app.post("/submit", (req, res) => {
  const username = req.body["username"];
  const topic = req.body["topic"];
  const content = req.body["content"];
  const post = {
    id: Date.now(),
    author: username,
    blogTopic: topic,
    blogContent: content,
  };
  blogPosts.push(post);
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const index = blogPosts.findIndex((post) => post.id === postId);
  if (index > -1) {
    blogPosts.splice(index, 1);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
