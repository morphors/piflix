var express = require("express"),
		bodyParser = require("body-parser"),
		http		= require("http"),
		exec		= require("child_process").exec,
		app			= express();


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
})); 


app.post("/api/play", function(req, res) {
	
	http.get("http://yts.re/api/movie.json?id=" + req.body.id, function(data) {
		
		var buffer = "";
		
		data.on("data", function(chuck) {
			buffer += chuck;
		});
		
		data.on("end", function() {
			
			var jsondata = JSON.parse(buffer);
			
			var child = exec("peerflix '" + jsondata.TorrentMagnetUrl + "' -v", function(error, stdout, stderr) {
				console.log(stdout);
			});
			
			res.json({success: true});
			
		});
		
		
		
	}).on("error", function(e) {
		
		res.status(404);
		res.json({ success: false });
		
	});
	
});

app.get("/", function(req, res) {
	res.send("Hello, World!");
});


var server = app.listen(3000, function() {
	
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Piflix is running at http://%s:%s", host, port);
	
});