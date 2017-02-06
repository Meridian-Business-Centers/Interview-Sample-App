(function () {
    var app = angular.module('app');

    app.factory('weatherService', function ($http) {
        var apiBase = 'https://www.zipcodeapi.com/rest/UK6SbwIXYns5t7NRx042u7bIXop8E0JyLQrWmaUlxmq0udS1dW4I4fq1EQaiQTRC/info.json/';
        var localApi = '/'
        return {
            getLocationByZipcode: function (zipCode) {
                return $http.get(apiBase + zipCode + '/degrees');
            },
            getZipcodesOfDallas: function () {
                return $http.get(localApi);
            }
        }
    });
}());