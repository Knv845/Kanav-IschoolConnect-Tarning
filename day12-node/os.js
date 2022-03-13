let os = require("os");


console.log(os.arch());
console.log(os.cpus().length);
console.log(os.userInfo().username);
console.log(os.totalmem()/1024,"MB");
console.log(os.freemem());
