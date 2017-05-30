var http = require("http");
var url = require("url");


var server = http.createServer(function(req, res) {
	
	console.log(url.parse(req.url));
	res.end("hello");
});

server.listen(process.env.PORT || 8000, function() {
	console.log("listening to port 8000");
});
