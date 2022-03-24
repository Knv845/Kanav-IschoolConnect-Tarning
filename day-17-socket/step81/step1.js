const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);



app.use(express.static(__dirname));
app.use(express.static(__dirname+"/public"))

io.on("connection",function(socket){
    console.log("socket is connected")
    socket.emit("serverMessage","client connected")
    socket.on("disconnect",function(){
        console.log("disconnected")
    })
})



http.listen(2020);
console.log("server is running");
