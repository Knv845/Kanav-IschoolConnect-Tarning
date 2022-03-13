let eventEmitter = require("events");
 let myevent = new eventEmitter();


 process.nextTick(()=>{
    myevent.emit("ischoolevent");
 })
    
 

 myevent.on("ischoolevent",function(){
     console.log("event happened");
 })

 console.log("venet happebd");

 for(var i=0;i<50;i++){
     console.log(i)
 }