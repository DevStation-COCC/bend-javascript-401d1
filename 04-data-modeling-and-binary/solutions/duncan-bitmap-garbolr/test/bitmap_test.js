var Bitmap = require('../lib/bitmap.js');
var FSControler = require('../lib/fs_controller.js');
var expect = require('chai').expect;
var fscntrl = new FSControler();

describe('bitmap.js', function(){
	var bitmap = null;
	before(function(done){
		fscntrl.loadBitmap('./img/bitmap1.bmp', function(err, data) {
			bitmap = new Bitmap(data);
			done();
		});	  
	});

	it('should have a buffer object', function(){
		expect(bitmap.header.fileType).to.eql('BM');
	});
});
