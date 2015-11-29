module.exports = {
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
