
var express = require('express');
var app = express();
var port = 3000;

var mw = {
	reqAuth: function (req, res, next) {
		var date = new Date().toString();
		console.log('Resquest: ' + req.method + ' ' + req.originalUrl + ' On: ' + date);
		next();
	}
}
// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

// app.get('/about', function (req, res) {
// 	res.send('About Us!');
// });

app.use(mw.reqAuth);

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log('Express server started on port: '+port)
});