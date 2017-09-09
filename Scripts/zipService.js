(function () {
    var app = angular.module('app');

    app.factory('zipService', function ($http) {
        var apiBase = 'https://www.zipcodeapi.com/rest/YOUR_API_KEY_HERE';
        var localApi = 'http://localhost:8080/';
        return {
            getLocationByZipcode: function (zipCode) {
                return $http.get(apiBase + zipCode + '/degrees');
            },
            getZipcodesOfDallas: function () {
                return $http.get(localApi + 'zip');
            }
        }
    });
}());
