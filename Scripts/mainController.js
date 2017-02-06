(function () {
    var app = angular.module('app');

    app.controller('mainController', function ($scope, weatherService, $location) {
        // to do : 
        // - get zipcodes via weatherService after load
        // - ng-generate zipcode buttons

        function init() {
            weatherService.getZipcodesOfDallas().then(function (response) {
                $scope.zipcodes = response.data.zip_codes;
            }, function (error) {
                alert(error.statusText);
            });
        };

        $scope.goToDetail = function (zip) {
            $location.path('/detail/' + zip);
        };

        init();
    });
}());