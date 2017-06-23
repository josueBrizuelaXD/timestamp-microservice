const express = require("express");
const app = express();
const moment = require("moment");
const fs = require("fs");

let returnedObj = {};

app.get("/", function(req, res) {
	 res.writeHead(200, {"Content-Type": "text/html"});
	var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
	myReadStream.pipe(res);
});


app.get("/:input", function (req, res) {
	const input = req.params.input;
	
	
	const dateFromString = moment(input);
	
	if (!isNaN(input)) {
		returnedObj = {"unix" : input, "natural" : moment.unix(input).utc().format("MMMM DD YYYY")};
		
		res.send(returnedObj);
	}
	
	if (dateFromString.isValid()) {
		returnedObj = {"unix" : dateFromString.unix(), "natural" : dateFromString.format("MMMM DD, YYYY")};
		res.send(returnedObj);
	} else {
		returnedObj = {"unix" : null, "natural" : null};
		res.send(returnedObj);
	}
	
});




app.listen(process.env.PORT);