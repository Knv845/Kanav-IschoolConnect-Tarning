let message:string = "";

function saymessage(part1:string,part2:string,part3?:string){
    return part1+""+part2;
}



document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".log").innerHTML = saymessage("hello","wrold")
})