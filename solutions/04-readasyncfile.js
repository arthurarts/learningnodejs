var fs = require('fs');
var fileName = process.argv;


var file = fs.readFile(fileName[2], 'utf8', function(err, data) {

	if(err) {
	 console.log(err);	
	} else {
          var lines = data.split('\n').length-1;
	  console.log(lines);
	}

});

