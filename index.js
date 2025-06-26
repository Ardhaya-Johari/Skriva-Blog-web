import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.render("index.ejs");
});

app.get("/create" , (req,res) => {
    res.render("blogPage.ejs" , { blogs: blogs });
});

app.get("/writeBlog", (req, res) => {
  res.render("blogs.ejs");
});

app.get("/view-blog", (req, res) => {
  const blogIndex = parseInt(req.query.blogIndex, 10);

  if (isNaN(blogIndex) || blogIndex < 0 || blogIndex >= blogs.length) {
    res.status(404).send("Blog no encontrado"); 
  } else {
    const blog = blogs[blogIndex];

    const escapeHTML = (str) => {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const escapedContent = escapeHTML(blog.content);    
    const formattedContent = escapedContent.replace(/\n/g, "<br>");

    res.render("viewBlog.ejs", {
      title: blog.title,
      author: blog.author,
      date: blog.date,
      content: formattedContent,
    });
  }
});


app.post("/blog", (req, res) => {
  const date = new Date(); 
  const newBlog = {
    title: req.body["title"],
    author: req.body["author"],
    content: req.body["content"],
    date: `${date.toLocaleString("en", { month: "long" })} ${date.getDate()}, ${date.getFullYear()}`
  };
  blogs.push(newBlog);
  res.render("blogPage.ejs", { blogs: blogs });
});


let blogEditIndex;

app.post("/editPage", (req, res) => {
  blogEditIndex = req.body["blogIndex"];
  const blogEdit = blogs[blogEditIndex];
  res.render("blogs.ejs", { blogEdit: blogEdit });
});

app.post("/editBlog", (req, res) => {
  const blogToEdit = blogs[blogEditIndex];
  blogToEdit.title = req.body["title"];
  blogToEdit.author = req.body["author"];
  blogToEdit.content = req.body["content"];
  res.render("blogPage.ejs", { blogs: blogs });
});


app.post("/delete-blog", (req, res) => {
  const blogIndex = req.body["blogIndex"];
  blogs.splice(blogIndex, 1);
  res.render("blogPage.ejs", { blogs: blogs });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

blogs.push({
  title: "Women",
  author: "MAYA ANGELOU",
  content:
    "Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.",
  date: `April 13, 2025`,
});

blogs.push({
  title: "The True Republic",
  author: "SUSAN B. ANTHONY",
  content:
    "The true republic: men, their rights, and nothing more; women, their rights, and nothing less.",
  date: `April 6, 2024`,
});