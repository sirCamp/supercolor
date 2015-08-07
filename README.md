[![Dependency Status](https://david-dm.org/sircamp/supercolor.png)](https://david-dm.org/sircamp/supercolor)
[![devDependency Status](https://david-dm.org/sircamp/supercolor/dev-status.png)](https://david-dm.org/sircamp/supercolor#info=devDependencies)

# SupercolorJS
A simple library for color management inside your projects
With this library you can create, delete and manage your color palettes, get random color, get all colors between a range of two colors, get and generate random palette or get radom color from palette, generate random palette, convert color from Hex to RGB and viceversa.

N.B this is a standalone library write with pure JavaScript Object using prototype

## INSTALLATION



## USAGE

#### CREATE OBJECT

var options is a optional paramters, if you want you can create object anyway without options
```javascript
var options = {};

var color = new Color(options);
```

#### convertFomRGBToHex

with this method you can convert an rgb color into hexadecimal color
```javascript
var r = 255;
var g = 255;
var b = 255;
color.convertFromRGBtoHex(r,g,b); //return #FFFFFF
```

#### convertFromHextoRGB

with this method you can convert an hexadecimal color into rgb color.
This method return an array with 3 pieces of hexadecimal color
```javascript
var string = "#FFFFFF" ;
color.convertFromHextoRGB(string); //return 255,255,255
```

#### getRangeOfHexColors

with this method you can obtain an array full of hexadecimal colors that are between to and from.

```javascript
var from = "#A2A2A2";
var to = "#FFFFFF" ;
color.getRangeOfHexColors(from,to);
```

#### getRangeOfRGBColors
with this method you can obtain an array full of RGB colors that are between to and from.

```javascript
var from = [205,205,205];
var to = [255,255,255];
color.getRangeOfRGBColors(from,to);
```

#### getStarterColors
with this method you can obtain an array full of hex colors that are the standard color of library

```javascript
color.getStarterColors();
```

#### getCustomColors
This method returns an array of colors that you have setted.

```javascript
color.getStarterColors();
```
#### setCustomColors
This method allow you to set a custom color array

```javascript
color.setCustomColors(colors);
```

#### getPalette
This returns all palettes of colors that you have set

```javascript
var palettes = [];
palettes = color.getPalette();
```
#### addPalette
This method allows you to add a new palette of colors to your project

```javascript
var palette = {
  name: "YellowPalette",
  colors: ["#FBC02D", "#FFEB3B","#FFF9C4","#FFEB3B","#FFFFFF"]
};

color.addPalette(palette);
```

#### removePaletteByIndex
This method allows you to remove a pelette by index obtained by *getPalette()* result

```javascript
var indexOfPaletteToRemove = 2;

color.removePaletteByIndex(indexOfPaletteToRemove);
```

#### removePaletteByName
This method allows you to remove a pelette by its name

```javascript
var nameOfPaletteToRemove = "YellowPalette";

color.removePaletteByName(nameOfPalette);
```

#### getPaletteByIndex
This method allows you to get a pelette by index obtained by *getPalette()* result

```javascript
var indexOfPaletteToGet = 2;

color.getPaletteByIndex(indexOfPaletteToRemove);
```

#### getPaletteByName
This method allows you to get a pelette by its name

```javascript
var nameOfPaletteToGet = "YellowPalette";

color.getPaletteByName(nameOfPalette);
```
