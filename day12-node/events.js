let eventEmitter = require("events").EventEmitter;

let myEvent = new eventEmitter();



function ischoolHandler(event){
    console.log("event is haapend",event)
}
function yschoolHandler(event){
    console.log("yevent is haapend",event)
}
myEvent.on("ischoolevent", ischoolHandler)
myEvent.on("yschoolevent", yschoolHandler)

console.log(myEvent.listenerCount("ischoolevent"))

console.log(myEvent.eventNames())

myEvent.emit("ischoolevent",{time: new Date(), message: "event happended" });
myEvent.emit("yschoolevent",{time: new Date(), message: "yevent happended" });
