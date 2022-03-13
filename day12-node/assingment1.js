let eventEmitter = require("events").EventEmitter;

let myEvent = new eventEmitter();
let count = 0

myEvent.on("ischoolevent", ischoolHandler)


function ischoolHandler(){
    var interval = setInterval(()=>{
    console.log("event is haapend")
    count++;
    if(count == 5){
        clearInterval(interval)
    }   
    },200)
}


myEvent.emit("ischoolevent")