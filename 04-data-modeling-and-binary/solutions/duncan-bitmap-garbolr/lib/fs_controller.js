var fs = require('fs');

var FSController = function(){};

module.exports = exports = FSController;

FSController.prototype.loadBitmap = function(filepath, callback) {
	fs.readFile(filepath, function (err, data) {
		if (err) {
			callback(err, null);
		}
		callback(null, data);
	});
};

FSController.prototype.writeBitmap = function(buf, filepath, callback) {
	//console.log('running writeBitmap');
	fs.writeFile(filepath, buf, function(err) {
		if (err)	callback(err); 
		callback(null);
});
};
