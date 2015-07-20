var fs = require('fs');
var fileName = process.argv;


var file = fs.readFileSync(fileName[2]);
var fileArray = file.toString().split('\n');
console.log(fileArray.length - 1);

