Color = function(options){

	this.palette       = [];
	this.customColors  = [];
	this.starterColors = [];
	this.hexadecimalChar = "";

	this.init();
	
};

Color.hexadecimalChar = "0123456789ABCDEF";


Color.prototype.init = function(options){


	this.starterColors = ["#F2EAD0",	"#006383",	"#F2B872",	"#268080",	"#F2561D",	"#672A41",	"#00B7B7",	"#D92E1E",	"#D91657",
	"#9D5A7B",	"#6E8AC8",	"#B05E65",	"#BF8C60",	"#51BBFE",	"#FA4731",	"#143259",	"#51FED2",	"#102D40",	"#81A5F7",	"#51FEA8",
	"#2D5159",	"#F2561D",	"#78CFDA",	"#51A8FE",	"#8C2A5B",	"#F2B872",	"#8C2A5B",	"#F9CA3D",	"#517DFE",	"#DFF2ED",	"#6951FE",
	"#51D4FF",	"#D9C7C1",	"#B7EDFF",	"#85B9CA",	"#85CACA",	"#BF7534",	"#BFAB28",	"#F2EAD0",	"#A65C32",	"#BF6545",	"#51FED3",
	"#7F468B",	"#BF8C60",	"#6295D9",	"#040037",	"#FF9335",	"#5B1409",	"#9451FE",	"#143259",	"#FFC040",	"#518FFE",	"#00EAEA",
	"#5164FF",	"#E49D6B",	"#008383",	"#6393A6",	"#294D9E",	"#E49D6B",	"#A61C1C",	"#51FEFE",	"#732C02",	"#F27F1B",	"#6BC6E4",
	"#BB5255"];
	
	this.palette.push(new Palette("redvariant",["#D32F2F", "#F44336","#FF5252","#FFCDD2","#FFFFFF"]));
	this.palette.push(new Palette("greenvariant",["#388E3C", "#4CAF50","#C8E6C9","#8BC34A","#FFFFFF"]));
	this.palette.push(new Palette("bluevariant",["#303F9F", "#3F51B5","#C5CAE9","#448AFF","#FFFFFF"]));
	this.palette.push(new Palette("yellowvariant",["#FBC02D", "#FFEB3B","#FFF9C4","#FFEB3B","#FFFFFF"]));

	this.hexadecimalChar = Color.hexadecimalChar;

};

Color.prototype.getColors = function(){
	return this.starterColors;
};

Color.prototype.getCustomColors = function(){
	return this.customColors;
};

Color.prototype.setCustomColors = function(colors){
	
	if( colors instanceof Array){
		this.customColors = colors;
	}
	else{
		throw Error("You must pass an Array to that method");
	}
};

Color.prototype.getPalette = function(){

	return this.palette;
};

Color.prototype.addPalette = function(palette){
	if(palette.hasOwnProperty("name") && palette.hasOwnProperty("colors")){
		
		this.palette.push(new Palette(palette.name,palette.colors));
	}
	else{
		throw Error("You must pass an Object with name and colors properties");
	}	
};

Color.prototype.removePaletteByIndex = function(index){
	if(typeof(index) === 'number'){
		return this.palette.splice(0,index).concat(this.palette.slice(index,this.palette.length));
	}
	else{
		throw Error("You must pass an valid index");
	}	

};

Color.prototype.removePaletteByName = function(name){
	
	if(typeof(index) === 'string'){
		var found = false;
		var index;
		for(var i = 0; i < this.palette.length && !found; i++){
			if(this.palette[i].hasName(name)){
				found = true;
				index = i;
			}
		}
		if(index !== undefined){
			this.palette.splice(0,index).concat(this.palette.slice(index,this.palette.length));
		}
		else{
			throw Error("there is no palette with this name");
		}
		
		return found;
	}
	else{
		throw Error("You must pass an valid key name");
	}
};

Color.prototype.getPaletteByIndex = function(index){
	if(typeof(index) === 'number'){
		return this.palette[index];
	}
	else{
		throw Error("You must pass an valid index");
	}	
};

Color.prototype.getPaletteByName = function(name){
	
	if(typeof(name) === 'string'){
		for(var i = 0; i < this.palette.length; i++){
			if(this.palette[i].hasName(name)){
				return this.palette[i];
			}
		}
		return false;
	}
	else{
		throw Error("You must pass an valid key name");
	}
};

Color.prototype.getRandomStarterColor = function(){

	return this.starterColor[(Math.floor(Math.random() * this.starterColors.length) )]; 
};

Color.prototype.getRandomCustomColor = function(){

	return this.starterColor[(Math.floor(Math.random() * this.starterColors.length) )]; 
};


Color.prototype.getRandomPalette =  function(){
	
	return this.palette[(Math.floor(Math.random() * this.palette.length))];
};

Color.prototype.getRandomColorFromPaletteIndex = function(index){
	
	return this.getPaletteByIndex(index).getRandomColor();
};

Color.prototype.getRandomColorFromPaletteName = function(name){
	
	return this.getPaletteByName(name).getRandomColor();
	 
};

Color.prototype.getRandomColorFromRandomPalette = function(){
	
	return this.getRandomPalette().getRandomColor();
};

/*STATIC FUNCTION*/
Color.convertFromHextoRGB = function(color){

	var total = [];
	if(color.length  <= 7 && color.length  > 3){
		color = color.substring(1,7);// remove "#"
		var counter = 0;
		for(var i = 0; i < 3; i ++){
			total.push(parseInt(color.substring(counter,(counter = counter + 2)),16));
		}
	}
	else{
			throw Error("You must pass a valid Hex Color!");
	}

	return total;

};

Color.convertFromRGBtoHex = function(r,g,b){
	
	var color = "";
	var total = [r,g,b];
	for(var i = 0; i < total.length; i++){

		if(typeof(total[i]) === 'number' && total[i] >= 0 && total[i] <= 255 ){
			color = color + Color.hexadecimalChar.charAt((total[i]-total[i]%16)/16);
			color = color + Color.hexadecimalChar.charAt(total[i]%16);
		}
		else{
			throw Error("You must pass a valid RBG color!");
		}
	}
	return '#'+color;
	
};

Color.getRangeOfHexColors = function(from,to){

	from = from.substring(1,7);
	to = to.substring(1,7);

	var fromInt = parseInt(from,16);
	var toInt = parseInt(to,16);

	var color = [];

	while(fromInt < toInt){

		color.push("#"+fromInt.toString(16).toUpperCase());
		fromInt = fromInt + 1;

	}
	color.push("#"+toInt.toString(16).toUpperCase());
	
	return color; 
};

Color.getRangeOfRGBColors = function(from,to){

	var colorFrom = "";
	var colorTo = "";
	
	for(var i = 0; i < from.length; i++){

		if(typeof(from[i]) === 'number' && from[i] >= 0 && from[i] <= 255 ){
			colorFrom = colorFrom + Color.hexadecimalChar.charAt((from[i]-from[i]%16)/16);
			colorFrom = colorFrom + Color.hexadecimalChar.charAt(from[i]%16);
		}
		else{
			throw Error("You must pass a valid RBG color!");
		}
	}


	for( i = 0; i < to.length; i++){

		if(typeof(to[i]) === 'number' && to[i] >= 0 && to[i] <= 255 ){
			colorTo = colorTo + Color.hexadecimalChar.charAt((to[i]-to[i]%16)/16);
			colorTo = colorTo + Color.hexadecimalChar.charAt(to[i]%16);
		}
		else{
			throw Error("You must pass a valid RBG color!");
		}
	}

	var fromInt = parseInt(colorFrom,16);
	var toInt = parseInt(colorTo,16);

	var color = [];

	while(fromInt < toInt){

		color.push(Color.convertFromHextoRGB("#"+fromInt.toString(16).toUpperCase()));
		fromInt = fromInt + 1;

	}

	color.push(Color.convertFromHextoRGB("#"+toInt.toString(16).toUpperCase()));
	
	return color; 
};

Color.getRandomColor = function(){
	return ('#'+Math.floor(Math.random()*16777215).toString(16)).toUpperCase();
};

Color.generateRandomPalette = function(){

	return Palette.generateRandomPalette();
};

/*Injecting STATIC function in object*/
Color.prototype.convertFromHextoRGB = Color.convertFromHextoRGB;

Color.prototype.cconvertFromRGBtoHex = Color.convertFromRGBtoHex;

Color.prototype.getRangeOfHexColors = Color.getRangeOfHexColors;

Color.prototype.getRangeOfRGBColors = Color.getRangeOfRGBColors;

Color.prototype.getRandomColor = Color.getRandomColor;

Color.prototype.generateRandomPalette  = Color.generateRandomPalette ;


