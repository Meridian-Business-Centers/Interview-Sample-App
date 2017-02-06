(function(){
    var app = angular.module('app');

    app.controller('detailController',function($scope,$location,weatherService,$routeParams){
        $scope.zip = $routeParams.zip;
        
        (function init(){
            weatherService.getLocationByZipcode($scope.zip).then(function(response){
                $scope.zipLocation = response.data;
            },function(error){
                alert(error.statusText);
            });
        }());
    });
}());