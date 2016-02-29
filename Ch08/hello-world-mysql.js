var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'autoset'
});

connection.connect(function(err){
	if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    } else {
        console.log('mysql connection is success');
    }
});

connection.query('SELECT "Hello, World"', function(err, results, fields){
	if(err) {
		 console.log('executing query string is fail');
		throw err;
	}
	
	
	console.log(results);
	console.log(fields);
	
});

connection.end();