let eventEmitter = require("events");
 let myevent = new eventEmitter();

 myevent.on("ischoolevent",function(){
     console.log("event happened");
 })

 setTimeout(function(){
     myevent.emit("ischoolevent");
 },3000)