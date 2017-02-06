(function () {
    var app = angular.module('app');

    app.controller('mainController', function ($scope, weatherService, $location) {
        // to do : 
        // - get zipcodes via weatherService after load
        // - append zipcode buttons

        function generateZipButtons(zipArray) {
            for (var i = 0; i < zipArray.length; i++) {
                var button = $('<input').attr({
                    type: "button",
                    id: "zip-btn" + i,
                    value: zipArray[i]
                });
                $("div.container").append(button);
            }
        };

        function generateElement(value, id) {
            return '<input type="button" data-id=' + id + ' value="' + value + '" onclick="' + onclickEvent + '()" class="btn btn-default" />';
        };
    });
}());