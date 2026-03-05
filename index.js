const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuid(),
        username: "sanju",
        content: "Hello everyone!",
    },
    {
        id: uuid(),
        username: "mallu",
        content: "Having a great day!",
    },
    {
        id: uuid(),
        username: "pammu",
        content: "Coding is fun!",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    const id = uuid();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find((post) => post.id === id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const post = posts.find((post) => post.id === id);
    post.content = content;
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter((post) => post.id !== id);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find((post) => post.id === id);
    res.render("edit.ejs", { post });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});