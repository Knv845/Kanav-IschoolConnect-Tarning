let http  = require("http");
const { type } = require("os");


let server = http.createServer((req,res)=>{

    res.writeHead(200,'ALL IS Well',{
        'content-Type' : 'text/html'
    })
    res.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1>welcome to my life</h1></body></html>`)
    res.end();
})

server.listen(1010,"localhost",(error)=>{
    if(error){
        console.log("error")
    }else
        console.log("server is running")
})