var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');


app.use(bodyParser.json())


Character = require('./models/character')
Realm = require('./models/realm')

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	//res.header('Access-Control-Allow-Origin', "GET");
	next();
});

app.get('/api/wow/realms', function(req, res){
	var wowRealmsJson = null;
	var wowRealms = null;
	request('https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=wmyn464pbdj7nzb7yyvz7gqxgkkk8ekx', function(error, response, body)
	{
		if (response.statusCode == 200)
		{
			wowRealmsJson = JSON.parse(body);
			res.json(Realm.getSimplifiedRealmsJson(wowRealmsJson));
		}
	});
});


app.get('/api/wow/:charname/:realmname/', function(req, res){
	var charname = req.params.charname;
	var realmname = req.params.realmname;
	var wowClassesJson = null;
	var wowCharacter = null;
	var wowRacesJson = null;
	var statusCodes = [];

	request('https://us.api.battle.net/wow/data/character/classes?locale=en_US&apikey=wmyn464pbdj7nzb7yyvz7gqxgkkk8ekx', function(error, response, body)
	{
		if (response.statusCode == 200)
		{
			wowClassesJson = JSON.parse(body);
			statusCodes.push(200);
		}
		else
		{
			statusCodes.push(response.statusCode);
		}
		complete();
	});

	request('https://us.api.battle.net/wow/character/' +  realmname + '/' + charname + '?locale=en_US&apikey=wmyn464pbdj7nzb7yyvz7gqxgkkk8ekx', function(error, response, body)
	{
		if (response.statusCode == 200)
		{
			wowCharacter = JSON.parse(body);
			statusCodes.push(200);
		}
		else
		{
			statusCodes.push(response.statusCode);
		}
		complete();
	});

	request('https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=wmyn464pbdj7nzb7yyvz7gqxgkkk8ekx', function(error, response, body)
	{
		if (response.statusCode == 200)
		{
			wowRacesJson = JSON.parse(body);
			statusCodes.push(200);
		}
		else
		{
			statusCodes.push(response.statusCode);
		}
		complete();
	});

	function complete()
	{
		 if (statusCodes.length == 3)
		 {
		 	var allOKs = true;
		 	for (status in statusCodes)
		 	{
		 		if (statusCodes[status] !== 200)
		 		{
		 			allOKs = false;
		 		}
		 	}
		 	if (allOKs == true)
		 	{
		 		Character.updateCharacter(wowCharacter, wowClassesJson, wowRacesJson);
				res.json(wowCharacter);
		 	} 
		 	else
		 	{
		 		res.status(404).json("Unable to retrieve character");
		 	}
		}
		}
});
	

app.listen(5000);
//console.log('Running on port 5000');
