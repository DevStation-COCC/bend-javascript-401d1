var Bitmap = function(buf){
	this.buf = buf;
	this.headerBuf = null;
	this.infoHeaderBuf = null;
	this.colorTableBuf = null;
	this.rasterDataBuf = null;
	this.header = null;
	this.infoHeader = null;
	this.colorTable = [];
	this.rasterData = [];
	this.init();
};

module.exports = exports = Bitmap; 

Bitmap.prototype.init = function(){
	this.headerBuf =  this.buf.slice( 0, 14);
	this._getHeader();

	this.infoHeaderBuf = this.buf.slice(14, 54);
	this._getInfoHeader();

	
	this.colorTableBuf = this.buf.slice(54, this.header.dataOffset);
	this._getColorTable();

	this.rasterDataBuf = this.buf.slice(this.header.dataOffset);
	this._getRasterData();
};

Bitmap.prototype._getHeader = function(){
	var result = {};
	result.fileType = this.headerBuf.toString('ascii', 0, 2);
	result.filesize = this.headerBuf.readUInt32LE(2);
	result.reserved = this.headerBuf.readUInt32LE(6);
	result.dataOffset = this.headerBuf.readUInt32LE(10);
	this.header = result;
};

Bitmap.prototype._getInfoHeader = function(){
	var result = {};
	result.infoHeaderSize = this.infoHeaderBuf.readUInt32LE(0);
	result.pixlWidth = this.infoHeaderBuf.readUInt32LE(4);
	result.pixlHeight = this.infoHeaderBuf.readUInt32LE(8);
	result.panes = this.infoHeaderBuf.readUInt16LE(12);
	var bcValue = this.infoHeaderBuf.readUInt16LE(14);
	result.bitCount = function(){
		return Math.pow(2, bcValue); 
	}();	  
	this.infoHeader = result;
};

Bitmap.prototype._getColorTable = function(){
	for(var i = 0; i < this.colorTableBuf.length; i = i+4){
		var tempColor = {};
		tempColor.red = this.colorTableBuf.readUInt8(i);
		tempColor.green = this.colorTableBuf.readUInt8(i+1);
		tempColor.blue = this.colorTableBuf.readUInt8(i+2);
		tempColor.alpha = this.colorTableBuf.readUInt8(i+3);	
		this.colorTable.push(tempColor);
	}
};

Bitmap.prototype._colorTableToBuffer = function(){
	var buf = Buffer.alloc(256 * 4);
	var offset = 0;
	for (var i in this.colorTable) {
		buf.writeUInt8(this.colorTable[i].red, offset );
		buf.writeUInt8(this.colorTable[i].green, offset + 1);
		buf.writeUInt8(this.colorTable[i].blue, offset + 2);
		buf.writeUInt8(this.colorTable[i].alpha, offset + 3);
		offset += 4;
	}
	this.colorTableBuf = buf;
};

Bitmap.prototype._getRasterData = function(){
	for(var i = 0; i < this.rasterDataBuf.length; i++){
		this.rasterData.push(this.rasterDataBuf.readUInt8(i));
	}
};

Bitmap.prototype.toBuffer = function(){
	this._colorTableToBuffer();
	return Buffer.from([this.headerBuf,this.infoHeaderBuf,this.colorTableBuf,this.rasterDataBuf]);
};
