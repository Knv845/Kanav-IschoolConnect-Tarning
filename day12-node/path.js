let path = require("path");


let list =  ["books","pens","papers"];

let files = ["books.html","pens.html","papers.html","books1.html"];

let url = path.join(list[Math.floor(Math.random()* list.length)], files[Math.floor(Math.random()* files.length)])
console.log(url)