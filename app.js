const express = require("express");
const app = express();
const bodyParser =require("body-parser");
const request = require("request");

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

// Public is the file where all the static links are kept
app.use(express.static("public"));
app.use(bodyParser.urlencoded({entended:true}));

app.post("/",function(req, res){
var firstName = req.body.fname;
var surname = req.body.sname;
var email = req.body.email;
console.log(firstName,surname,email);
});
app.listen(3000, function(){
    console.log("server is running on port 3000");
});
