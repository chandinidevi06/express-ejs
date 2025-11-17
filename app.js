var express = require("express");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
var myData = ["apple", "banana", "grapes", "mango", "orange"];
var users = ["user1", "user2", "user3", "user4"];
app.get("/home", (req, res) => {
    res.render("home", { result: myData });
});
app.get("/about", (req, res) => {
    res.render("about", { myResult: users });
});
var port = 1010;
app.listen(port, () => {
    console.log("The server is running");
});


