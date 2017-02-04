/*
    Copyright (c) Samuel Kilada 2017.
    PLEASE NOTE: this is not a real database wrapper.

    A database wrapper would normally make queries to an actual database, and would have more generic methods such
    as "findEntity(tableName, rowKey)" that could be passed parameters based on the specific needs.

    In this case, I have made some pre-entered data and created convenient methods just so we can run this example
    without an actual database.
*/

// Load modules
var Promise = require('bluebird');

// Method to simulate fetching the zip code list from the database (see comments above)
this.simulateGetZipCodes = function () {
    return new Promise(function(resolve, reject) {
        try {
            var zipcodes = [];

            for (var i = 75201; i < 75399; i++) {
                zipcodes.push(i);
            }

            return resolve(zipcodes);
        } catch (err) {
            return reject(err);
        }
    });
}

// Method to simulate fetching the weather for a particular zip code (see comments above)
this.simulateGetZipCodeWeather = function(zipcode) {
    return new Promise(function(resolve, reject) {
        try {
            var weatherOptions = [];
            weatherOptions.push({skies: 'cloudy', temperature: '56F', precip: '0%'});
            weatherOptions.push({skies: 'cloudy', temperature: '74F', precip: '70%'});
            weatherOptions.push({skies: 'partially cloudy', temperature: '61F', precip: '20%'});
            weatherOptions.push({skies: 'sunny', temperature: '67F', precip: '0%'});

            var randIndex = Math.floor(Math.random() * 3);
            var randWeather = weatherOptions[randIndex];
            randWeather.zipcode = zipcode;

            return resolve(randWeather);
        } catch (err) {
            return reject(err);
        }
    });
}

exports = {
    simulateGetZipCodes: this.simulateGetZipCodes,
    simulateGetZipCodeWeather: this.simulateGetZipCodeWeather
}