var http = require("http");
var url = require("url");


var server = http.createServer(function(req, res) {
	
	console.log(url.parse(req.url));
	res.end("hello");
});

server.listen(8000, "127.0.0.1", function() {
	console.log("listening to port 8000");
});
