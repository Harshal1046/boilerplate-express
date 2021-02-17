var express = require('express');
var app = express();

app.get("/", function(req, res) {
    var absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath)
  })

//
  app.get("/json", function(req, res) {
    res.json({"message": "Hello json"});
  })

// To Serve Css File
app.use("/public", express.static(__dirname + "/public"));































 module.exports = app;
