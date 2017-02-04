/* Copyright (c) Samuel Kilada 2017. */

var CodeSample = angular.module('CodeSample', []);

// Main Controller
CodeSample.controller('MainController', ['$scope', '$client', function ($scope, $client) {
    // Initialize
    $scope.zipcodes = [];
    $scope.error = '';
    $scope.weather = null;
    $scope.loading = true;

    // Load the page content
    $client.getZipcodes()
        .then(function(zipcodes) {
            $scope.zipcodes = zipcodes;
            $scope.loading = false;
        })
        .catch(function(err) {
            $scope.error = err.message;
        });

    // UI Events
    $scope.selectZipcode = function(zipcode) {
        $scope.loading = true;
        $client.getWeatherByZipcode(zipcode)
            .then(function(weather) {
                $scope.weather = weather;
                $scope.loading = false;
            })
            .catch(function(err) {
                $scope.error = err.message;
            });
    }

    $scope.goBack = function() {
        $scope.weather = null;
    }
}]);