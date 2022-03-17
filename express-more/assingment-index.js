const express = require('express')
const app = express();
const fs = require('fs')


app.use(express.JSON({extended : true}))
var heros = [];


fs.readFileSync("data\heroes.json",(error,data)=>{
    if(err){
        console.log(err)
    }else
        console.log(data)
})

app.get("/",(req,res)=>{
    res.render("home.pug",{
        companyname : "ischoolConnect",
        regestereduser : true,
        heros : heros
    })
})
app.post("/",(req,res)=>{
    //console.log(req.body.nexthero)
    heros.push(req.body.nexthero)
    res.redirect('/')
})

fs.writeFileSync("data\heroes.json",)


app.listen(4000,'localhost',(error)=>{
    if(error){
        console.log(error)
    }else
        console.log('server is runnimg')
})