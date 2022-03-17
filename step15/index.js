const express = require('express')
const app =  express();
const mongoose = require('mongoose')

// midle ware
app.use(express.static(__dirname+"/public"))
app.use(express.json());
//application configrations

//db configrations
const url = "mongodb+srv://admin:password$123@MyCluster.yu9yw.mongodb.net/onlinedb?retryWrites=true&w=majority"
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model('User',new Schema({
    id : ObjectId,
    username : String,
    usermail : String,
    usercity : String

}));

mongoose.connect(url).then(()=>{console.log('db connect')}).catch((error)=>{console.log('error')});


// crud routes

app.get("/data",(req,res)=>{
    console.log('get request for data recieved');
    User.find(function(error, users){
        if(error){
            console.log('error')
        }else
           { res.json(users) }
           

    })
})

app.post("/add",function(req,res){
    console.log('data recieved',res.body);
})


app.listen(5050, function(error){
    if(error){
        console.log('error');
        
    }else
    console.log('server is running in 5050')
})