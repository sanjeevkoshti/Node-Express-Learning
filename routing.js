const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
    res.send("Hello Sanjeev! this is root directory");
});
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Hello ${username} and your id is ${id}</h1>`
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q){
        res.send(`<h1>Nothing Searched</h1>`);
    }
    res.send(`<h1>Search results for queryy: ${q}</h1>`);
});