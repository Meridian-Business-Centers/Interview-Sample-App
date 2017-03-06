	var request = require('request');



function getSimplifiedRealmsJson(wowRealmsJson){
	var wowRealmList = [];
	for (var count = 0; count < wowRealmsJson.realms.length; count++)
		{
			wowRealmList.push(wowRealmsJson.realms[count]);
		}
	var namesOnly = [];
	var slugsOnly = [];
	for (var inc = 0; inc < wowRealmList.length; inc++)
	{
		slugsOnly.push(wowRealmList[inc].slug);
		namesOnly.push(wowRealmList[inc].name);
	}
	var nameAttribute = 'name';
	var slugAttribute = 'slug';
	var realmObj;
	var wowRealmList = [];
	for (let i = 0; i < namesOnly.length; i++){
		realmObj = {};
		realmObj[nameAttribute] = namesOnly[i];
		realmObj[slugAttribute] = slugsOnly[i];
		wowRealmList.push(realmObj);
	}
	return wowRealmList;
	//wowRealmsJson = wowRealmsJson;
}


module.exports.getSimplifiedRealmsJson = function(wowRealmsJson, callback){
	 return getSimplifiedRealmsJson(wowRealmsJson, function(err, res){
		if (err){
			return console.log(err);
		}
	});

};