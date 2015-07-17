
Palette =  function(name,colors){
	
	this.name = name;
	this.colors = colors;

};

Palette.prototype.hasName = function(name){

	return this.name.toLowerCase() == name.toLowerCase()?true:false;

};

Palette.prototype.getRandomColor = function(){

	return this.colors[(Math.floor(Math.random() * this.colors.length))]; 

};

Palette.prototype.getName = function(){
	return this.name;
};

Palette.prototype.setName = function(name){
	this.name = name;
};

Palette.prototype.getColors = function(){
	return this.colors;
};

Palette.prototype.setColors = function(colors){
	this.colors = colors;
};

Palette.generateRandomPalette = function(){

	var colors = [];
	for(var i = 0; i< 5; i++){
		colors.push(('#'+Math.floor(Math.random()*16777215).toString(16)).toUpperCase());
	}
	return new Palette("RandomizePalette",colors);
};