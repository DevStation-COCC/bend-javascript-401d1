var Bitmap = require('./lib/bitmap.js');
var FSControler = require('./lib/fs_controller.js');
var ColorTranformer = require('./lib/transform.js');
var EventEmitter = require('events').EventEmitter;
var fsCntrl = new FSControler();
var ee = new EventEmitter();


var bitmap = null;

fsCntrl.loadBitmap('./img/me.bmp', function(err, data){
	if (err) throw err;
	ee.emit('bufferLoaded', data);	
});

ee.on('bufferLoaded', function(buffer){
	console.log('buffer loaded :)');
	bitmap = new Bitmap(buffer);
	ee.emit('transform');
});

ee.on('transform', function(){
	console.log('inititate transform');
	for (var i in bitmap.colorTable){
		var curCol = bitmap.colorTable[i];
		//bitmap.colorTable[i] = ColorTranformer.setRGBA(100,  255 - i , (i * 2) % 256, 255);
		if (i % 100 < 10) {
				  bitmap.colorTable[i] = ColorTranformer.dodge(bitmap.colorTable[i], i);
		} else {
				  bitmap.colorTable[i] = ColorTranformer.setRGBA(randomNum(),255-i,i,255);
		}
	}
	ee.emit('write');
});

ee.on('write', function(){
	var finalBMP = bitmap.toBuffer();
	fsCntrl.writeBitmap(finalBMP, './img/testtest.bmp', function(err){
		if (err) throw err;
	});
	console.log('hurray');
});

function randomNum(){
	return Math.floor(Math.random() * 255);
}
