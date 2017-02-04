/* Copyright (c) Samuel Kilada 2017. */

CodeSample.service('$client', ['$http', function ($http) {
    this.getZipcodes = function() {
        return $http.get('/zipcode_list')
            .then(function(response) {
                return JSON.parse(response.data.zipcodes);
            })
            .catch(handleError);
    }

    this.getWeatherByZipcode = function(zipcode) {
        return $http.get('/zipcode?zipcode=' + zipcode)
            .then(function(response) {
                return JSON.parse(response.data.weather);
            })
            .catch(handleError);
    }

    function handleError(response) {
        if (!response) throw new Error('Could not connect to server');
        if (!response.data) throw new Error('Could not connect to server');
        if (response.data.error) throw new Error(response.data.error);
        throw new Error('Unknown error. Please try again.');
    }
}]);