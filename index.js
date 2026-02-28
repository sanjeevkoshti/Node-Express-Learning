const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
    res.send("Hello Sanjeev!");
});
app.get("/sanju", (req, res) => {
    res.send("Hello Sanju!");
});
app.get("/sanjeev", (req, res) => {
    res.send("Hello Sanjeev!");
});
app.post("/", (req, res) => {
    res.send("POST request received");
});
app.put("/", (req, res) => {
    res.send("PUT request received");
});
app.delete("/", (req, res) => {
    res.send("DELETE request received");
});
