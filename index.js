const express = require('express');
const app = express();
const PORT = 3000;

app.get("/home",(req,res) => {
    res.send("Welcome to Dashboard");
    console.log(req.method);
});

app.get("/quotes",(req,res) => {
    res.send("Display all the quotes");
    console.log(req.method);
});

app.get("/quotes/:id",(req,res) => {
    res.send("Display Particular quotes");
    console.log(req.method);
});

app.post("/quotes",(req,res) => {
    res.send("Save a New Quote");
    console.log(req.method);
});

app.patch("/quote/:id",(req,res) => {
    res.send("Edit a Quote");
    console.log(req.method);
});

app.delete("/quotes/:id",(req,res) => {
    res.send("Delete a Quotes");
    console.log(req.method);
});

app.listen(PORT, () => {
    console.log(`Dashboard => Listening To ${PORT}`);
})