(function(){
    var app = angular.module('app');

    app.controller('detailController',function($scope,$location,zipService,$routeParams){
        $scope.zip = $routeParams.zip;
        
        (function init(){
            zipService.getLocationByZipcode($scope.zip).then(function(response){
                $scope.zipLocation = response.data;
            },function(error){
                alert(error.statusText);
            });
        }());
    });
}());