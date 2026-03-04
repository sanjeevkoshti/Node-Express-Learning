const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { username, password } = req.query;
    res.send(`Standerd GET respons! Welcome ${username}`);
});

app.post("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`Standerd POST respons! Welcome ${username}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});