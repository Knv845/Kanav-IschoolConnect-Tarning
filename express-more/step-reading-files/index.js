const fetch = require('fetch');

let fs = require('fs')

fetch.fetchUrl('http://appointeasy.herokuapp.com/',(error,meta,data)=>{
    if(error){
        console.log('error')
    }else
        fs.writeFileSync("temp/cloned.html",data,'utf-8')
})