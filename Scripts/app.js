(function () {
    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) { 
        $routeProvider.when('/home',{
            controller:'mainController',
            templateUrl:'/Views/home.html'
        });

        $routeProvider.when('/detail',{
            controller:'detailController',
            templateUrl:'/Views/detail.html'
        });

        $routeProvider.otherwise({ redirectTo: '/home' });
    });
}());
