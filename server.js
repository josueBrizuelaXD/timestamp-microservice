var http = require("http");
let url = require("url");


var server = http.createServer(function(req, res) {
	
	
	res.end(req.url);
});

server.listen(process.env.PORT || 8000, function() {
	console.log("listening to port 8000");
});
