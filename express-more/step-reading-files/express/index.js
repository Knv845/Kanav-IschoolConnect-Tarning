const express = require('express')
let app = express();

app.get('/',function(req,res){
    //res.send("hello from express")
    res.sendFile(__dirname+"/index.html")
});





app.listen(2020,'localhost'),
console.log("server is running");