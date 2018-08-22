'use strict';

// maths
exports.add = function(colorDict1, colorDict2) {
	var result = {};
	for (var key in colorDict1){
		result[key] = this._checkRange(colorDict1[key] + colorDict2[key]);
	}
	return result;
};

exports.minus = function(colorDict1, colorDict2) {
	var result = {};
	for (var key in colorDict1){
		result[key] = this._checkRange(colorDict1[key] - colorDict2[key]);
	}
	return result;
};

exports.divide = function(colorDict1, colorDict2) {
	var result = {};
	for (var key in colorDict1){
		if (colorDict2[key] !== 0) {
			result[key] = this._checkRange(Math.floor(colorDict1[key] / colorDict2[key]));
		} else {
			result[key] = colorDict1[key];
		}
	}
	return result;
};

exports.mult = function(colorDict1, colorDict2) {
	var result = {};
	for (var key in colorDict1){
		result[key] = this._checkRange(colorDict1[key] * colorDict2[key]);
	}
	return result;
};

exports._addMod = function(left, right, mod){
	if(!mod) mod = 256;
	return Math.abs((left + right) % mod);
};

exports._minusMod = function(left, right, mod){
	if(!mod) mod = 256;
	return Math.abs((left - right) % mod);
};

exports._devideMod = function(left, right, mod){
	if(!mod) mod = 256;
	if(right !== 0) return Math.floor(Math.abs((left / right) % mod));
	return Math.abs(left % mod);
};

exports._multMod = function(left, right, mod){
	if(!mod) mod = 256;
	return Math.abs((left * right) % mod);
};

exports._checkRange = function(x,min,max){
	if (!min) min = 0;
	if (!max) max = 255;
	if (x < min ) return min;
	if (x > max ) return max;
	return x;
};


// rgba transforms
exports.setRGBA = function( r,g,b,a){
	return {red: this._checkRange(r), green:this._checkRange(g), blue: this._checkRange(b), alpha:this._checkRange(a)};
};

exports.setRed = function(colorDict, r){
	return {red: r, green: colorDict.green, blue:colorDict.blue, alpha: colorDict.alpha};
};

exports.setGreen = function(colorDict, g){
	return {red: colorDict.red, green: g, blue:colorDict.blue, alpha: colorDict.alpha};
};

exports.setBlue = function(colorDict, b){
	return {red: colorDict.red, green: colorDict.green, blue:b, alpha: colorDict.alpha};
};

exports.setAlpha = function(colorDict, a){
	return {red: colorDict.red, green: colorDict.green, blue:colorDict.blue, alpha: a};
};

exports.invert = function(colorDict) {
	return this.setRGBA(this._minusMod(255, colorDict.red), this._minusMod(255, colorDict.green), this._minusMod(255, colorDict.blue), colorDict.alpha);
};

exports.burn = function(colorDict, scaler){
	if(!scaler) scaler = 1;
	var result = {alpha:colorDict.alpha};

	for (var key in colorDict){
		if (key != 'alpha') {
			result[key] = colorDict[key] + scaler;
			result[key] = this._checkRange(result[key]);
		}
	}
	return result;
};

exports.dodge = function(colorDict, scaler){
	if(!scaler) scaler = 1;
	var result = {alpha:colorDict.alpha};
	for (var key in colorDict){
		if (key != 'alpha') {
			result[key] = colorDict[key] - scaler;
			result[key] = this._checkRange(result[key]);
		}
	}
	return result;
};


// hsl transforms
exports.setHue = function(colorDict, hue){
	var hslObj = this._RGBAtoHSL(colorDict);
	hslObj.hue = this._checkRange(hue, 0, 360);
	return this._HSLtoRGBA(hslObj);
};

exports.setSaturation = function(colorDict, sat){
	var hslObj = this._RGBAtoHSL(colorDict);
	hslObj.saturation = this._checkRange(sat, 0, 100);
	return this._HSLtoRGBA(hslObj);
};

exports.setLightness = function(colorDict, lnes){
	var hslObj = this._RGBAtoHSL(colorDict);
	hslObj.lightness = this._checkRange(lnes, 0, 100);
	return this._HSLtoRGBA(hslObj);
};

exports.saturate = function(colorDict, percent){
	if (!percent) percent = 10;
	var hslObj = this._RGBAtoHSL(colorDict);
	hslObj.saturation = this._checkRange( (hslObj.saturation + percent), 0, 100);
	return this._HSLtoRGBA(hslObj);
};

exports.desaturate = function(colorDict, percent){
	if (!percent) percent = 10;
	var hslObj = this._RGBAtoHSL(colorDict);
	hslObj.saturation = this._checkRange((hslObj.saturation - percent), 0, 100);
	return this._HSLtoRGBA(hslObj);
};

exports.lighten = function(colorDict, percent){
	if (!percent) percent = 10;
	var hslObj = this._RGBAtoHSL(colorDict);
	hslObj.lightness = this._checkRange((hslObj.lightness + percent), 0, 100);
	return this._HSLtoRGBA(hslObj);
};

exports.darken = function(colorDict, percent){
	if (!percent) percent = 10;
	var hslObj = this._RGBAtoHSL(colorDict);
	hslObj.lightness = this._checkRange((hslObj.lightness - percent), 0, 100);
	return this._HSLtoRGBA(hslObj);
};

exports.rotateHue = function(colorDict, degrees){
	var hslObj = this._RGBAtoHSL(colorDict);
	hslObj.hue = this._addMod(hslObj.hue, degrees, 360);
	return this._HSLtoRGBA(hslObj);
};
// color converters
//rgb to hsl algorythm found on stack overflow http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion submitted by zeros-ones
exports._RGBAtoHSL = function(rgbObj) {
	var r = rgbObj.red;
	var g = rgbObj.green;
	var b = rgbObj.blue;
	r /= 255;
	g /= 255;
	b /= 255;

	var max = Math.max(r,g,b);
	var min = Math.min(r,g,b);
	var h, s, l = (min + max) / 2;

	if (max == min) {
		h = s = 0;
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max){
			case r: h = (g - b) / d; break;
			case g: h = 2 + ((b - r) / d); break;
			case b: h = 4 + ((r - g) / d); break;
		}
		h *= 60;
		if (h < 0) h += 360;
	}
	return {hue: Math.round(h), saturation: Math.round(s*100)/100, lightness: Math.round(l*100)/100};
};

// hsl to hsv algorythm found from http://ariya.blogspot.com/2008/07/converting-between-hsl-and-hsv.html
exports._HSLtoHSV = function(hslObj){
	var h = hslObj.hue;
	var lightness = hslObj.lightness * 2;
	var mult =  (lightness <= 1)? lightness: 2 - lightness;
	var sat = hslObj.saturation * mult;
	var v = (lightness + sat) / 2;
	var s = (2 * sat) / (lightness + sat);
	return { h: h, s: s, v:v};
};

exports._HSLtoRGBA = function(hslObj){
	var hsvObj = this._HSLtoHSV(hslObj);
	console.log(hsvObj);
	return this._HSVtoRGBA(hsvObj);
};

// hsv to rgb alorython found on stack overflow http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion submitted by Erik
exports._HSVtoRGBA = function (hsvObj){
	var h = hsvObj.h;
	var s = hsvObj.s;
	var v = hsvObj.v;
    var step = (h/360) / (1 / 6),
     pos = step - Math.floor(step), // the hue position within the current step
     m = (Math.floor(step) % 2) ? (1 - pos) * v : pos * v, // mix color value adjusted to the brightness(v)
     max = 1 * v,
     min = (1 - s) * v,
     med = m + ((1 - s) * (v - m)),
     r, g, b;
    switch (Math.floor(step))
    {
        case 0:
            r = max;
            g = med;
            b = min;
            break;
        case 1:
            r = med;
            g = max;
            b = min;
            break;
        case 2:
            r = min;
            g = max;
            b = med;
            break;
        case 3:
            r = min;
            g = med;
            b = max;
            break;
        case 4:
            r = med;
            g = min;
            b = max;
            break;
        case 5:
            r = max;
            g = min;
            b = med;
            break;
    }
	return {red: Math.round(r*255), green: Math.round(g*255), blue: Math.round(b*255), alpha: 255};
};
