var connect = require('connect');
var http = require('http');
var app = connect();

app.use(function(req, res, next){
	
	console.log(" in comes a "+ req.method+ " to " + req.url);
	next();
    
}).listen(1337, '127.0.0.1');

app.use(function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World\n");
});

http.createServer(app).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');