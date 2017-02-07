(function () {
    var app = angular.module('app');

    app.factory('zipService', function ($http) {
        var apiBase = 'https://www.zipcodeapi.com/rest/js-lULtvrZBnT2VNJU2iUv21g6kN4ppzqiUk3oQvnrThuP5dK7wECzFSF0GJq6iQodb/info.json/';
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