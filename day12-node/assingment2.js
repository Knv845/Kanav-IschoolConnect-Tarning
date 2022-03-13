let fs =  require("fs");

//fs.writeFileSync("file.txt","Welcome to my file");
//",function(error,data){
  //  if(error){
    //    console.log(error);
    //}else
      //  console.log(data)
//})
fs.watchFile("file.txt",function(){
    console.log('File is changed')
})

setInterval(() => {
    fs.appendFileSync("file.txt","\n Books are our good frind","utf-8")
}, 5000);

