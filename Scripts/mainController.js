(function () {
    var app = angular.module('app');

    app.controller('mainController', function ($scope, zipService, $location) {
        // to do : 
        // - get zipcodes via zipService after load
        // - ng-generate zipcode buttons

        function init() {
            zipService.getZipcodesOfDallas().then(function (response) {
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