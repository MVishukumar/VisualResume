var express = require("express");
var path = require("path");
var app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    console.log("routed to /");
    console.log(__dirname);
    res.render("home");
});

app.get("*", function(req, res) {
    console.log("routed to other routs");
    res.render("home");
});

app.listen(3000, function() {
    console.log('App started'); 
});