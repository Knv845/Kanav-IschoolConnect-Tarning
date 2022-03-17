const express = require('express')
const app = express();

// express middleware in use
//app.use(express.static(__dirname))
//app.use("/assests",express.static(__dirname+'/images'))

// to  make source prettier
app.locals.pretty = true;
app.use(express.JSON({extended : true}))
var heros = [];

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

app.listen(4040,'localhost',(error)=>{
    if(error){
        console.log(error)
    }else
        console.log('server is runnimg')
})