//-- get info on delimiter here: https://github.com/Captain-Chaos/WorldPainter/blob/219f7eb1402e49d9c79fed72799c82503385d669/WorldPainter/WPGUI/src/test/resources/descriptortest.js
// Script made by ctRy
// script.description=Converts RGB images to minecraft blocks. The top left corner of the image will be placed in the top left corner of the map.

// path/to/image/file.png.jpg.etc
// terrain r g b (0 - 255)
// repeat

// script.param.xOffset.type=integer
// script.param.xOffset.description=The top left corner of the image will be shifted to the right by that many blocks
// script.param.yOffset.type=integer
// script.param.yOffset.description=The top left corner of the image will be shifted downwards by that many blocks

// script.param.defaultMats.type=boolean
// script.param.defaultMats.default=true
// script.param.defaultMats.displayName=Default Materials
// script.param.defaultMats.description=Coarse Dirt, Podzol, Stone, Water, Lava, Netherrack, Warped Nylium and Crimson Nylium 

// script.param.bareGrass.type=boolean
// script.param.bareGrass.default=true
// script.param.bareGrass.displayName=Bare Grass

// script.param.grass.type=boolean
// script.param.grass.default=false
// script.param.grass.displayName=Grass

// script.param.grassPath.type=boolean
// script.param.grassPath.default=true
// script.param.grassPath.displayName=Grass Path

// script.param.moss.type=boolean
// script.param.moss.default=true
// script.param.moss.displayName=Moss

// script.param.sand.type=boolean
// script.param.sand.default=true
// script.param.sand.displayName=Sand + Red Sand

// script.param.sandstone.type=boolean
// script.param.sandstone.default=true
// script.param.sandstone.displayName=Sandstone + Red Sandstone

// script.param.terracotta.type=boolean
// script.param.terracotta.default=false
// script.param.terracotta.displayName=Terracotta Blocks
// script.param.terracotta.description=Includes normal terracotta and all dyed variants

// script.param.snow.type=boolean
// script.param.snow.default=true
// script.param.snow.displayName=Snow
// script.param.snow.description=Never eat yellow snow.

// script.param.gravel.type=boolean
// script.param.gravel.default=false
// script.param.gravel.displayName=Gravel

// script.param.clay.type=boolean
// script.param.clay.default=true
// script.param.clay.displayName=Clay

// script.param.granite.type=boolean
// script.param.granite.default=true
// script.param.granite.displayName=Granite

// script.param.diorite.type=boolean
// script.param.diorite.default=true
// script.param.diorite.displayName=Diorite
// script.param.diorite.description=Birdpoop

// script.param.andesite.type=boolean
// script.param.andesite.default=true
// script.param.andesite.displayName=Andesite

// script.param.deepslate.type=boolean
// script.param.deepslate.default=true
// script.param.deepslate.displayName=Deepslate

// script.param.tuff.type=boolean
// script.param.tuff.default=true
// script.param.tuff.displayName=Tuff

// script.param.basalt.type=boolean
// script.param.basalt.default=true
// script.param.basalt.displayName=Basalt

// script.param.blackstone.type=boolean
// script.param.blackstone.default=true
// script.param.blackstone.displayName=Blackstone

// script.param.calcite.type=boolean
// script.param.calcite.default=true
// script.param.calcite.displayName=Calcite

// script.param.mud.type=boolean
// script.param.mud.default=false
// script.param.mud.displayName=Mud

// script.param.cobblestone.type=boolean
// script.param.cobblestone.default=false
// script.param.cobblestone.displayName=Cobblestone

// script.param.mossyCobblestone.type=boolean
// script.param.mossyCobblestone.default=false
// script.param.mossyCobblestone.displayName=Mossy Cobblestone

// script.param.soulSand.type=boolean
// script.param.soulSand.default=true
// script.param.soulSand.displayName=Soul Sand

// script.param.soulSoil.type=boolean
// script.param.soulSoil.default=false
// script.param.soulSoil.displayName=Soul Soil

// script.param.mycelium.type=boolean
// script.param.mycelium.default=false
// script.param.mycelium.displayName=Mycelium

// script.param.endStone.type=boolean
// script.param.endStone.default=false
// script.param.endStone.displayName=End Stone

// script.param.obsidian.type=boolean
// script.param.obsidian.default=false
// script.param.obsidian.displayName=Obsidian

// script.param.bedrock.type=boolean
// script.param.bedrock.default=false
// script.param.bedrock.displayName=Bedrock

//tip to quickly get rgb values of blocks:
//go to github.com/Captain-Chaos/WorldPainter/blob/master/WorldPainter/WPCore/src/main/resources/org/pepsoft/worldpainter/colourschemes/default.txt
//first number (one at left) is the block id and data value
//2nd 3rd 4th are r g b when block is bright.

var xoffset = params['xOffset'];
var yoffset = params['yOffset'];
var useDefaultMats = params['defaultMats'];
var useGrass = params['grass'];
var useBareGrass = params['bareGrass'];
var useGrassPath = params['grassPath'];
var useSand = params['sand'];
var useSandstone = params['sandstone'];
var useTerracotta = params['terracotta'];
var useMoss = params['moss'];
var useSnow = params['snow'];
var useCobblestone = params['cobblestone'];
var useMossyCobblestone = params['mossyCobblestone'];
var useObsidian = params['obsidian'];
var useBedrock = params['bedrock'];
var useGravel = params['gravel'];
var useClay = params['clay'];
var useSoulSand = params['soulSand'];
var useSoulSoil = params['soulSoil'];
var useMycelium = params['mycelium'];
var useEndStone = params['endStone'];
var useGranite = params['granite'];
var useDiorite = params['diorite'];
var useAndesite = params['andesite'];
var useDeepslate = params['deepslate'];
var useTuff = params['tuff'];
var useBasalt = params['basalt'];
var useBlackstone = params['blackstone'];
var useCalcite = params['calcite'];
var useMud = params['mud'];

var xDefault = dimension.getExtent().getX() * 128 + xoffset;
var yDefault = dimension.getExtent().getY() * 128 + yoffset;

/* Default List:
BareGrass 69 110 51
Dirt 134 96 67
Podzol 90 63 28
Sand 219 211 160
RedSand 169 88 33
HardenedClay 150 92 66
WhiteClay 209 178 161
OrangeClay 161 83 37
MagentaClay 149 88 108
LightBlueClay 113 108 137
YellowClay 186 133 35
LimeClay 103 117 52
PinkClay 161 78 78
GreyClay 57 42 35
LightGreyClay 135 106 97
CyanClay 86 91 91
PurpleClay 118 70 86
BlueClay 74 59 91
BrownClay 77 51 35
GreenClay 76 83 42
RedClay 143 61 46
BlackClay 37 22 16
Sandstone 218 210 158
Stone 125 125 125
Rock 123 123 123
Cobblestone 122 122 122
MossyCobblestone 103 121 103
Obsidian 20 18 29
Bedrock 83 83 83
Gravel 126 124 122
Clay 158 164 176
Water 47 67 244
Lava 216 104 26
DeepSnow 239 251 251
Netherrack 111 54 52
SoulSand 84 64 51
Mycelium 111 99 105
EndStone 221 223 165
RedSandstone 166 85 29
Granite 153 113 98
Diorite 179 179 182
Andesite 130 131 131
GrassPath 159 114 98
*/

///////////CODE/////////////

if (parseInt(org.pepsoft.worldpainter.Version.BUILD) > 20160820173357)
	print("This WorldPainter version probably includes CaptainChaos's new scripting system. Ask ctRy to update his scripts!");

print("Script by ctRy");

var terrainArr = ["Grass", "BareGrass", "Dirt", "Permadirt", "Podzol", "Sand", "RedSand", "Desert", "RedDesert", "Mesa", "HardenedClay", "WhiteClay", "OrangeClay", "MagentaClay", "LightBlueClay", "YellowClay", "LimeClay", "PinkClay",
	"GreyClay", "LightGreyClay", "CyanClay", "PurpleClay", "BlueClay", "BrownClay", "GreenClay", "RedClay", "BlackClay", "Sandstone", "Stone", "Rock", "Cobblestone", "MossyCobblestone", "Obsidian", "Bedrock", "Gravel", "Clay", "Beaches",
	"Water", "Lava", "StoneSnow", "DeepSnow", "Netherrack", "SoulSand", "Netherlike", "Mycelium", "EndStone", "Resources", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11",
	"Custom12", "Custom13", "Custom14", "Custom15", "Custom16", "Custom17", "Custom18", "Custom19", "Custom20", "Custom21", "Custom22", "Custom23", "Custom24", "RedSandstone", "Granite", "Diorite", "Andesite", "StoneMix", "Custom25", "Custom26",
	"Custom27", "Custom28", "Custom29", "Custom30", "Custom31", "Custom32", "Custom33", "Custom34", "Custom35", "Custom36", "Custom37", "Custom38", "Custom39", "Custom40", "Custom41", "Custom42", "Custom43", "Custom44", "Custom45", "Custom46",
	"Custom47", "Custom48", "GrassPath", "Magma", "Custom49", "Custom50", "Custom51", "Custom52", "Custom53", "Custom54", "Custom55", "Custom56", "Custom57", "Custom58", "Custom59", "Custom60", "Custom61", "Custom62", "Custom63", "Custom64",
	"Custom65", "Custom66", "Custom67", "Custom68", "Custom69", "Custom70", "Custom71", "Custom72", "Custom73", "Custom74", "Custom75", "Custom76", "Custom77", "Custom78", "Custom79", "Custom80", "Custom81", "Custom82", "Custom83", "Custom84",
	"Custom85", "Custom86", "Custom87", "Custom88", "Custom89", "Custom90", "Custom91", "Custom92", "Custom93", "Custom94", "Custom95", "Custom96", "Deepslate", "Tuff", "Basalt", "Blackstone", "Soul_Soil", "Warped_Nylium", "Crimson_Nylium", "Calcite", "Mud", "Bare_Beaches", "Moss"];

var palette = [];

if (arguments[0] == "list") {
	for (var i = 0; i < terrainArr.length; i++) {
		print(pad(i) + " = " + terrainArr[i]);
	}

	print("\nYou can type either the terrain index or the CaSE SenSiTIVe terrain name\n");
}
else {
	if (arguments[0] == "")
		throw "Argument 0 = path/to/image/file.png.jpg.etc, Argument 1 and more = terrain r g b (0 - 255)\nOr type list for available terrain types\nYou can put default for Argument 1 to include preset blocks\n";

	//default
	if (arguments.length < 2 || arguments[1] == "" || arguments[1] == "default") {
		print("\nUsing default palette");

		var def = [];

		var terracottaArray = ("HardenedClay 150 92 66\nWhiteClay 209 178 161\nOrangeClay 161 83 37\nMagentaClay 149 88 108\nLightBlueClay 113 108 137\nYellowClay 186 133 35\nLimeClay 103 117 52\nPinkClay 161 78 78\nGreyClay 57 42 35\nLightGreyClay 135 106 97\nCyanClay 86 91 91\nPurpleClay 118 70 86\nBlueClay 74 59 91\nBrownClay 77 51 35\nGreenClay 76 83 42\nRedClay 143 61 46\nBlackClay 37 22 16").split("\n");

		var SandArray = ("Sand 219 211 160\nRedSand 169 88 33").split("\n");

		var SandStoneArray = ("Sandstone 218 210 158\nRedSandstone 166 85 29").split("\n");

		var defaultMatsArray = ("Permadirt 134 96 67\nPodzol 90 63 28\nStone 125 125 125\nWater 47 67 244\nLava 216 104 26\n\nNetherrack 111 54 52\nWarped_Nylium 43 114 101\nCrimson_Nylium 131 31 31\n\n").split("\n");

		if (useTerracotta) {
			def = def.concat(terracottaArray);
		}

		if (useSand) {
			def = def.concat(SandArray);
		}

		if (useSandstone) {
			def = def.concat(SandStoneArray);
		}

		if (useDefaultMats) {
			def = def.concat(defaultMatsArray);
		}

		if (useBareGrass) {
			def.push("BareGrass 69 110 51");
		}

		if (useGrass) {
			def.push("Grass 69 110 51");
		}

		if (useGrassPath) {
			def.push("GrassPath 159 114 98");
		}

		if (useMoss) {
			def.push("Moss 26 54 4");
		}

		if (useSnow) {
			def.push("DeepSnow 239 251 251");
		}

		if (useCobblestone) {
			def.push("Cobblestone 122 122 122");
		}

		if (useMossyCobblestone) {
			def.push("MossyCobblestone 103 121 103");
		}

		if (useGravel) {
			def.push("Gravel 126 124 122");
		}

		if (useClay) {
			def.push("Clay 158 164 176");
		}

		if (useGranite) {
			def.push("Granite 153 113 98");
		}

		if (useDiorite) {
			def.push("Diorite 179 179 182");
		}

		if (useAndesite) {
			def.push("Andesite 130 131 131");
		}

		if (useDeepslate) {
			def.push("Deepslate 80 80 83");
		}

		if (useTuff) {
			def.push("Tuff 108 109 103");
		}

		if (useBasalt) {
			def.push("Basalt 81 81 86");
		}

		if (useBlackstone) {
			def.push("Blackstone 42 36 41");
		}

		if (useCalcite) {
			def.push("Calcite 223 224 221");
		}

		if (useMud) {
			def.push("Mud 57 56 63");
		}

		if (useSoulSand) {
			def.push("SoulSand 84 64 51");
		}

		if (useSoulSoil) {
			def.push("Soul_Soil 76 58 47");
		}

		if (useMycelium) {
			def.push("Mycelium 111 99 105");
		}

		if (useEndStone) {
			def.push("EndStone 221 223 165");
		}

		if (useObsidian) {
			def.push("Obsidian 20 18 29");
		}

		if (useBedrock) {
			def.push("Bedrock 83 83 83");
		}

		if (def.length == 0) {
			print("Error");
		}

		for (var i = 0; i < def.length; i++) {
			var val = def[i].split(" ");
			palette.push({ t: terrainArr.indexOf(val[0]), r: parseInt(val[1]), g: parseInt(val[2]), b: parseInt(val[3]) });
		}
	}
	else {
		var val = arguments[1].split(" ");

		if (val.length != 4) {
			throw "Error in argument " + 1 + ": Expected terrain r g b\n";
		}

		var terrain;
		if (isNaN(parseInt(val[0])))
			terrain = terrainArr.indexOf(val[0]);
		else
			terrain = parseInt(val[0]);

		palette.push({ t: terrain, r: parseInt(val[1]), g: parseInt(val[2]), b: parseInt(val[3]) });
	}

	var colorMap = wp.getHeightMap().fromFile(arguments[0]).go();
	var mask = colorMap;

	if (arguments.length > 2) {
		for (var i = 2; i < arguments.length; i++) {
			if (arguments[i] == "")
				break;

			if (arguments[i].indexOf("mask: ") == 0) {
				mask = wp.getHeightMap().fromFile(arguments[i].substring(6).trim()).go();

				print("\nMask detected");
				print(arguments[i].substring(6).trim());
				continue;
			}

			var val = arguments[i].split(" ");
			if (val.length != 4) {
				throw "Error in argument " + i + ": Expected terrain r g b\n";
			}
			var terrain;
			if (isNaN(parseInt(val[0])))
				terrain = terrainArr.indexOf(val[0]);
			else
				terrain = parseInt(val[0]);

			palette.push({ t: terrain, r: parseInt(val[1]), g: parseInt(val[2]), b: parseInt(val[3]) });
		}
	}

	print("\nPalette:");
	for (var i = 0; i < palette.length; i++) {
		print(terrainArr[palette[i].t]);
	}

	var extent = colorMap.getExtent();
	print("\nImage's upper left pixel will be placed in the coordinate (x: " + xDefault + ", y: " + yDefault + ").");
	print("Tiles that are empty will remain empty.");

	print("\nNow processing . . .");

	for (var x = extent.getX(); x < extent.getWidth(); x++) {
		for (var y = extent.getY(); y < extent.getHeight(); y++) {
			if (!dimension.isTilePresent(truncate((x + xDefault) / 128.0), truncate((y + yDefault) / 128.0)))
				continue;

			if (mask !== colorMap && mask.getHeight(x, y) < 128)
				continue;

			var color = new java.awt.Color(colorMap.getColour(x, y), java.lang.Boolean.TRUE);

			if (color.getAlpha() < 128)
				continue;

			var distance = 999999;
			var index = -1;
			for (var i = 0; i < palette.length; i++) {
				tempDistance = distanceBetween(color.getRed(), color.getGreen(), color.getBlue(), palette[i].r, palette[i].g, palette[i].b);
				if (tempDistance < distance) {
					distance = tempDistance;
					index = i;
				}

				if (distance == 0)
					break;
			}

			dimension.setTerrainAt(x + xDefault, y + yDefault, org.pepsoft.worldpainter.Terrain.VALUES[palette[index].t]);
		}
	}

	print("\nDone! :D");

}

function pad(n) {
	if (n < 10)
		return "  " + n;
	else if (n < 100)
		return " " + n;
	else
		return "" + n;
}

function truncate(number) {
	return number > 0 ? Math.floor(number) : Math.ceil(number);
}

//squared distance between two color values TODO: change to better color format
function distanceBetween(r, g, b, rr, gg, bb) {
	return (rr - r) * (rr - r) + (gg - g) * (gg - g) + (bb - b) * (bb - b);
}