'use strict';

var FSController = require('../lib/fs_controller.js');
var expect = require('chai').expect;
var fs = require('fs');

describe('fs_controller.js', function(){
	var fsCntrl = new FSController();

	describe('#loadBitmap()', function(){
		it('should load a buffer with a bitmapfile', function(){
			fsCntrl.loadBitmap('./img/bitmap1.bmp', function(err, data){
				if (err) throw err;
				expect(Buffer.isBuffer(data)).to.eql(true);
			});
		});
	});

	describe('#writeBitmap()', function(){

			var result;

			before(function(done){
					var str = 'lulwat\n';
					var buffer = Buffer.alloc(str.length);
					buffer.write(str, 0, 'ascii');
					fsCntrl.writeBitmap(buffer, './lul.wat', function(err){
						result = err;
						done();
					});
			});
			
			it('should write a bitmapfile from a buffer', function(){

						expect(result).to.eql(null);
			});

			after(function(){
				fs.unlink('./lul.wat');
			});
	});
});
