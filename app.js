const express = require("express");
const app = express();
const bodyParser =require("body-parser");
const request = require("request");
// What should happen when user tries to go to homepage, the root route
app.get("/", function(req,res){
    res.send("Server is up and running");
})


 


app.listen(3000, function(){
    console.log("server is running on port 3000");
})
