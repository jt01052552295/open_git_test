var fs = require('fs');
var data = "I love node js";

fs.writeFile('test.txt', data, function(err){
	if(!err){
		console.log("ok");
	} else {
		throw err;
	}
});