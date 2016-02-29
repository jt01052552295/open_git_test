var express = require('express');
var http = require('http');
var app = express();

app.all("*", function(req, res, next){
	res.writeHead(200, {"Content-Type": "text/plain"});
	next();
});

app.get("/", function(req, res){
	res.end("main page");
});

app.get("/hi/:user", function(req, res){
	res.end("hi , "+req.params.user + ".");
});

app.get("*", function(req, res){
	res.end("404");
});

http.createServer(app).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');