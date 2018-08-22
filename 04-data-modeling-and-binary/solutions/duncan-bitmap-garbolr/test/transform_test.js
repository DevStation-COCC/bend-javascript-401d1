'use strict';

var transform = require('../lib/transform.js');
var expect = require('chai').expect;

function objEql(obj1, obj2){
	if (objSize(obj1) != objSize(obj2)) {
		console.log('objects didnt have eql lengths');
		return false;
	}
	for (var key in obj1) {
		if (obj1[key] != obj2[key]){
			console.log('objects values didnot match' + obj1[key] + ' ' + obj2[key]);
			return false;
		}
	}
	return true;
}

function objSize(obj){
	var size = 0;
	for (var key in obj){
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
}


describe('transfrom.js', function(){
	var testColor = {red: 136, green: 230, blue:255, alpha:255}; // hsl = h: 192, s: 1.00, l: 0.75
	var testColor2 = {red: 10, green: 10, blue:10, alpha:10};
	var colorMin = { red: 0, green: 0, blue: 0, alpha: 0};
	var colorMax = { red: 255, green: 255, blue: 255, alpha: 255};
	var testHSL = {hue: 136, saturation:0.70, lightness: 0.8};
	describe('Math', function(){
		describe('#add()', function(){
			it('should return a rgba object with 146 240 255 255', function(){
				var sumColor = transform.add(testColor, testColor2);
				var areEql = objEql(sumColor, {red: 146, green: 240, blue: 255, alpha: 255});
				expect(areEql).to.eql(true);
			});
		});
		describe('#minus()', function(){
			it('should return a rgba object with 126 220 245 255', function(){
				var sumColor = transform.minus(testColor, testColor2);
				var areEql = objEql(sumColor, {red: 126, green: 220, blue: 245, alpha: 245});
				expect(areEql).to.eql(true);
			});
		});
		describe('#minus(255*)', function(){
			it('should return a rgba object with 0 0 0 0', function(){
				var sumColor = transform.minus(testColor, colorMax);
				var areEql = objEql(sumColor,colorMin);
				expect(areEql).to.eql(true);
			});
		});
		describe('#devide()', function(){
			it('should return a rgba object with 13 23 1 1', function(){
				var sumColor = transform.divide(testColor, testColor2);
				var areEql = objEql(sumColor, {red: 13, green: 23, blue: 25, alpha: 25});
				expect(areEql).to.eql(true);
			});
		});
		describe('#devide(0*)', function(){
			it('should return a rgba object with 136 230 255 255', function(){
				var sumColor = transform.divide(testColor, colorMin);
				var areEql = objEql(sumColor,testColor); 
				expect(areEql).to.eql(true);
			});
		});
		describe('#mult()', function(){
			it('should return a rgba object with 255 255 255 255', function(){
				var sumColor = transform.mult(testColor, testColor2);
				var areEql = objEql(sumColor, {red: 255, green: 255, blue: 255, alpha: 255});
				expect(areEql).to.eql(true);
			});
		});
		
		describe('#_addMod(122,122)', function(){
			it('should return abs of (a + b) % 255 = 244', function(){
				var result = transform._addMod(122,122);
		 		expect(result).to.eql(244);		
			});
		});		  
		describe('#_addMod(122,100,10)', function(){
			it('should return abs of (a + b) % 10 = 2', function(){
				var result = transform._addMod(122,100, 10);
		 		expect(result).to.eql(2);		
			});
		});		  
		describe('#_minusMod(122,200)', function(){
			it('should return abs of (a - b) % 256 = 78', function(){
				var result = transform._minusMod(122,200);
		 		expect(result).to.eql(78);		
			});
		});		  
		describe('#_devideMod(122/7)', function(){
			it('should return floor of abs of (122 /  7) % 256 = 17', function(){
				var result = transform._devideMod(122,7);
		 		expect(result).to.eql(17);		
			});
		});		  
		describe('#_devideMod(333,0)', function(){
			it('should return abs of (333 ) % 256 = 77', function(){
				var result = transform._devideMod(333,0);
		 		expect(result).to.eql(77);		
			});
		});		  
		describe('#_multMod(122,122)', function(){
			it('should return abs of (122 * 122) % 256 = 36', function(){
				var result = transform._multMod(122,122);
		 		expect(result).to.eql(36);		
			});
		});		  
		describe('#_checkRange(-6)', function(){
			it('should return min = 0', function(){
				var result = transform._checkRange(-5);
		 		expect(result).to.eql(0);		
			});
		});		  
		describe('#_checkRange(300)', function(){
			it('should return max = 255', function(){
				var result = transform._checkRange(300);
		 		expect(result).to.eql(255);		
			});
		});		  
		describe('#_checkRange(199)', function(){
			it('should return input = 199', function(){
				var result = transform._checkRange(199);
		 		expect(result).to.eql(199);		
			});
		});		  
	});


	describe('RGBA Transformation', function(){

		describe('#setRGBA(122,-7,500,255)', function(){
			it('should return a rgba object with 146 240 255 255', function(){
				var sumColor = transform.setRGBA(122,-7,500,255);
				var areEql = objEql(sumColor, {red: 122, green: 0, blue: 255, alpha: 255});
				expect(areEql).to.eql(true);
			});
		});
			
		describe('#setRed(colorMin, 34)', function(){
			it('should return a rgba object with 32 0 0 0', function(){
				var sumColor = transform.setRed(colorMin, 34);
				var areEql = objEql(sumColor, {red: 34, green: 0, blue: 0, alpha: 0});
				expect(areEql).to.eql(true);
			});
		});
		describe('#setGreen(colorMin, 34)', function(){
			it('should return a rgba object with 0 34 0 0', function(){
				var sumColor = transform.setGreen(colorMin,34);
				var areEql = objEql(sumColor, {red: 0, green:34, blue: 0, alpha: 0});
				expect(areEql).to.eql(true);
			});
		});
		describe('#setBlue(colorMin, 34)', function(){
			it('should return a rgba object with 0 0 34 0', function(){
				var sumColor = transform.setBlue(colorMin, 34);
				var areEql = objEql(sumColor, {red: 0, green: 0, blue: 34, alpha: 0});
				expect(areEql).to.eql(true);
			});
		});
		describe('#setAlpha(colorMin, 34)', function(){
			it('should return a rgba object with 0 0 0 34', function(){
				var sumColor = transform.setAlpha(colorMin, 34);
				var areEql = objEql(sumColor, {red: 0, green: 0, blue: 0, alpha: 34});
				expect(areEql).to.eql(true);
			});
		});		
		describe('#invert(colorMax)', function(){
			it('should return a rgba object with 132 0 132 255 ', function(){
				var sumColor = transform.invert(colorMax, 34);
				var areEql = objEql(sumColor, {red: 0, green: 0, blue: 0, alpha: 255});
				expect(areEql).to.eql(true);
			});
		});		
		describe('#burn(testColor, 11)', function(){
			it('should return a rgba object with 147 241 255 255', function(){
				var sumColor = transform.burn(testColor, 11);
				var areEql = objEql(sumColor, {red: 147, green: 241, blue: 255, alpha: 255});
				expect(areEql).to.eql(true);
			});
		});		
		describe('#dodge(testColor, 11)', function(){
			it('should return a rgba object with 125 219 244 255', function(){
				var sumColor = transform.dodge(testColor, 11);
				var areEql = objEql(sumColor, {red: 125, green: 219, blue: 244, alpha: 255});
				expect(areEql).to.eql(true);
			});
		});		
	});

	describe('Color Converters', function(){
		describe('#_RGBAtoHSL(testColor)', function(){
			it(' should return an HSLobj with values 193 1 0.77 ', function(){
				var result = transform._RGBAtoHSL(testColor);
				var areEql = objEql(result, {hue:193,saturation:1,lightness:0.77});
				console.log();
			});
		});
		describe('#_HSLtoHSV(testHSL)', function(){
			it(' should return an HSVobj with values i', function(){
				var result = transform._HSLtoHSV(testHSL);
				console.log(result);
				var areEql = objEql(result, {h:193, s:1 ,v:0.77});
			});
		});

		describe('#_RGBAtoHSL(testColor)', function(){
			it(' should return an HSLobj with values ', function(){
				var result = transform._RGBAtoHSL(testColor);
				var areEql = objEql(result, {hue:193,saturation:1,lightness:0.77});
				console.log();
			});
		});

		describe('#_RGBAtoHSL(testColor)', function(){
			it(' should return an HSLobj with values ', function(){
				var result = transform._RGBAtoHSL(testColor);
				var areEql = objEql(result, {hue:193,saturation:1,lightness:0.77});
				console.log();
			});
		});

	});
});

