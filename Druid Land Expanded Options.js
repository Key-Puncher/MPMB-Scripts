/* Revised Monk
*/

var iFileName = "Revised Monk.js";
RequiredSheetVersion(12.999);

// Define the source
SourceList["HB:MR"] = {
	name : "Homebrew: Druid Land Expanded Options",
	abbreviation : "HB:DR",
	group : "Homebrew",
	url : "",
	date : "2020/09/26"
};

ClassSubList["druid-circle of the land"].features["subclassfeature3"].choices = ["Arctic", "Cave", "Coast", "Deadlands", "Desert", "Forest", "Grassland", "Jungle", "Mountain", "Ocean", "Ruins", "Savanna", "Sky", "Swamp", "Volcano", "Underdark"];

ClassSubList["druid-circle of the land"].features["subclassfeature3"]."cave" = {
	name : "Cave Circle Spells",
	description : "\n   " + "My mystical connection to the caves infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
	spellcastingExtra : ["blindness/deafness", "earthbind", "erupting earth", "wall of sand", "fabricate", "giant insect", "passwall", "far step"]
};

ClassSubList["druid-circle of the land"].features["subclassfeature3"]."deadlands" = {
	name : "Deadlands Circle Spells",
	description : "\n   " + "My mystical connection to the deadlands infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
	spellcastingExtra : ["ray of enfeeblement", "silence", "life transference", "revivify", "sickening radiance", "death ward", "antilife shell", "negative energy flood"]
};

ClassSubList["druid-circle of the land"].features["subclassfeature3"]."jungle" = {
	name : "Jungle Circle Spells",
	description : "\n   " + "My mystical connection to the jungle infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
	spellcastingExtra : ["pass without trace", "rope trick", "nondetection", "speak with plants", "grasping vine", "mordenkainen's private sanctum", "hold monster", "tree stride"]
};

ClassSubList["druid-circle of the land"].features["subclassfeature3"]."ocean" = {
	name : "Ocean Circle Spells",
	description : "\n   " + "My mystical connection to the deep oceans infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
	spellcastingExtra : ["alter self", "darkvision", "slow", "water breathing", "evard's black tentacles", "watery sphere", "maelstrom", "rary's telepathic bond"]
};

ClassSubList["druid-circle of the land"].features["subclassfeature3"]."ruins" = {
	name : "Ruins Circle Spells",
	description : "\n   " + "My mystical connection to the ruins infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
	spellcastingExtra : ["find traps", "moonbeam", "speak with dead", "spirit guardians", "confusion", "phantasmal killer", "legend lore", "dispel evil and good"]
};

ClassSubList["druid-circle of the land"].features["subclassfeature3"]."savanna" = {
	name : "Savanna Circle Spells",
	description : "\n   " + "My mystical connection to the savanna infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
	spellcastingExtra : ["animal messenger", "dust devil", "conjure animals", "phantom steed", "fire shield", "polymorph", "awaken", "dawn"]
};

ClassSubList["druid-circle of the land"].features["subclassfeature3"]."sky" = {
	name : "Sky Circle Spells",
	description : "\n   " + "My mystical connection to the sky infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
	spellcastingExtra : ["gust of wind", "levitate", "fly", "thunder step", "locate creature", "storm sphere", "dawn", "control winds"]
};

ClassSubList["druid-circle of the land"].features["subclassfeature3"]."volcano" = {
	name : "Volcano Circle Spells",
	description : "\n   " + "My mystical connection to the volcano infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
	spellcastingExtra : ["scorching ray", "pyrotechnics", "fireball", "melf's minute meteors", "fire shield", "wall of fire", "cloudkill", "immolation"]
};
