/* Copyright (c) Samuel Kilada 2017. */

// Load Modules
var dbService = require('../services/database.js');

// Gets the list of available zip codes
this.zipcode_list = function(req, res) {
    console.log('Handling weather.zipcode_list request.')

    dbService.simulateGetZipCodes()
        .then(function(zipcodes) {
            console.log('Returning zip codes.');
            return res.status(200).json({ zipcodes: JSON.stringify(zipcodes) });
        })
        .catch(function (err) {
            console.log('Returning error: ' + err.message);
            return res.status(500).json({ error: err.message });
        })
}

// Gets the weather for a particular zip code
this.zipcode = function(req, res) {
    console.log('Handling weather.zipcode request.')

    if (!req.query.zipcode) {
        var error = 'Zip code parameter not found.';
        console.log('Returning error: ' + error);
        return res.status(500).json({ error: error});
    }

    dbService.simulateGetZipCodeWeather(req.query.zipcode)
        .then(function(weather) {
            console.log('Returning weather for zip code ' + req.query.zipcode + '.');
            return res.status(200).json({ weather: JSON.stringify(weather) });
        })
        .catch(function (err) {
            console.log('Returning error: ' + err.message);
            return res.status(500).json({ error: err.message });
        })
}

exports = {
    zipcode_list: this.zipcode_list,
    zipcode: this.zipcode
}