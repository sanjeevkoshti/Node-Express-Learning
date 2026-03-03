const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", { diceVal });
});

app.get("/ig/:username", (req, res) => {
    const followers = ["mallu", "pammu", "anand", "jakeer", "paris"];
    let { username } = req.params;
    res.render("instagram", { username, followers});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});