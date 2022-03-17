const axios = require('axios')
let fs = require('fs');

//axios('http://appointeasy.herokuapp.com/')
//.then((res)=>{
   // fs.writeFileSync('temp/first.html',res.data,'utf-8')
//}).catch((error)=>{
 //console.log(error)
//})
const axios = require('axios')
let fs = require('fs');

axios({
    method : "get",
    URL : 'http://appointeasy.herokuapp.com/',
    responseType : 'stream',
})
.then((res)=>{
    res.data.pipe(zlib.createGzip()).pipe(fs.writeFileSync('temp/first.html.zip'))
}).catch((error)=>{
 console.log(error)
})