(function () {
    var app = angular.module('app');

    app.controller('mainController', function ($scope, weatherService, $location) {
        // to do : 
        // - get zipcodes via weatherService after load
        // - append zipcode buttons

        function generateZipButtons(zipArray) {
            for (var i = 0; i < zipArray.length; i++) {
                /* var button = $('<input/>').attr({
                     type: "button",
                     id: "zip-btn" + i,
                     value: zipArray[i]
                 });*/
                var button = generateElement(zipArray[i], "zip-btn" + i, "btnClick");
                $("div.container").append(button);
            }
        };

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


        function generateElement(value, id, onclickEvent) {
            return '<input type="button" data-id=' + id + ' value="' + value + '" class="zip-btn" />';

            /*return '<input type="button" data-id=' + id + ' value="' + value + '" onclick="' + onclickEvent + '()" class="btn btn-default" />';*/
        };



        init();
    });
}());