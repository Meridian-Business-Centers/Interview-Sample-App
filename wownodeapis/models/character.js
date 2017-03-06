	var request = require('request');

function updateCharacter(wowCharacter, wowClassesJson, wowRacesJson){
	updateCharacterGender(wowCharacter);
	updateCharacterFaction(wowCharacter);
	updateCharacterRace(wowCharacter, wowRacesJson);
	updateCharacterClass(wowCharacter, wowClassesJson);
	updateCharacterImage(wowCharacter);
}

function updateCharacterImage(wowCharacter){
	wowCharacter.thumbnail = "http://render-us.worldofwarcraft.com/character/" + wowCharacter.thumbnail;
}
function updateCharacterGender(wowCharacter){
	if (wowCharacter.gender == '0')
	{
		wowCharacter.gender = 'Male';
	}
	else
	{
		wowCharacter.gender = 'Female';
	}
}

function updateCharacterFaction(wowCharacter){
	if (wowCharacter.faction == '0')
	{
		wowCharacter.faction = 'Alliance';
	}
	else
	{
		wowCharacter.faction = 'Horde';
	}
}

function updateCharacterClass(wowCharacter, wowClassesJson){
	var wowClasses = [];
	for (var count = 0; count < wowClassesJson.classes.length; count++)
		{
			wowClasses.push(wowClassesJson.classes[count]);
		}
			
	var classMap = new Map();
	for (var inc = 0; inc < wowClasses.length; inc++)
		{
			classMap.set(wowClasses[inc].id, wowClasses[inc].name);
		}			 

	for (var key of classMap.keys())
		{
			if (key == wowCharacter.class)
				{
				 wowCharacter.class = classMap.get(key);
				 break;
				}
		}
}

function updateCharacterRace(wowCharacter, wowRacesJson){
	 var wowRaces = [];
	 for (var count = 0; count < wowRacesJson.races.length; count++)
	 	{
	 		//console.log(wowRacesJson.races[count]);
	 		 wowRaces.push(wowRacesJson.races[count]);
	 	}
			
	 var raceMap = new Map();
	 for (var inc = 0; inc < wowRaces.length; inc++)
		{
	 		raceMap.set(wowRaces[inc].id, wowRaces[inc].name);
	 	}			 

	for (var key of raceMap.keys())
		{
			if (key == wowCharacter.race)
				{
				 wowCharacter.race = raceMap.get(key);
				 break;
				}
		}
}


// Update Character

module.exports.updateCharacter = function(wowCharacter, wowClassesJson, wowRacesJson, callback){

	return updateCharacter(wowCharacter, wowClassesJson, wowRacesJson, function(err, res){
		if (err){
			return console.log(err);
		}
	});

};