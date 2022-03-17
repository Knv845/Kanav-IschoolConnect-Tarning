const express = require('express')
const mongoose = require('mongoose')
const app = express();

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let Hero = mongoose.model('Heroes',Schema({
    id : ObjectId,
    list : Array
}));

mongoose.connect("mongodb+srv://admin:password$123@MyCluster.yu9yw.mongodb.net/onlinedb?retryWrites=true&w=majority")

app.get("/",(req,res)=>{
    Hero.find().then((dbres)=>{
        console.log(dbres)
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        console.log('promise completed')
    });
    res.end();
});

app.listen(5050,'localhost',(error)=>{
    if(error){
        console.log(error)
    }else
        console.log('server is runnimg')
})