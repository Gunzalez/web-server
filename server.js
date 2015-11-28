
var express = require('express');
var app = express();
var port = 3000;

var mw = {
	reqLog: function (req, res, next) {
		var date = new Date().toString();
		console.log('Resquest: ' + req.method + ' ' + req.originalUrl + ' On: ' + date);
		next();
	},
	reqAuth: function (req, res, next) {
		console.log('Hitting this page, that\'s all');
		next();
	}
}

app.use(mw.reqLog);

app.get('/about', mw.reqAuth, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log('Express server started on port: '+port)
});