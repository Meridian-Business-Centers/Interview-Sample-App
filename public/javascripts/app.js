/**
 * Created by Samuel on 2/3/2017.
 */
angular.module('app', ['ngRoute']).config(function ($routeProvider) {


    $routeProvider
        .when('/', {
            controller: 'statesController as states',
            templateUrl: '/angular_templates/states.html',
        }).when('/detail/:regionCode', {
        controller: 'stateDetailController as detail',
        templateUrl: '/angular_templates/state_detail.html',
    })
        .otherwise({
            redirectTo: '/'
        });


}).service('apiService', function ($http) {

    var getStates = function () {

        return $http.get('/states', function (result) {
            console.log(result);
            return result.data;
        });
    };

    var getStateDetails = function (region_code) {
        return $http.get(`/states/state?region_code=${region_code}`, function (result) {
            console.log(result);
            return result.data;
        });
    }

    return {
        getStates: getStates,
        getStateDetails: getStateDetails
    };

}).controller('statesController', function (apiService) {
    var statesController = this;
    statesController.states = [];

    apiService.getStates().then(function (response) {
        console.log(response)
        statesController.states = response.data;

    })


}).controller('stateDetailController', function ($routeParams, apiService) {
    var detailsController = this;

    apiService.getStateDetails($routeParams.regionCode).then(function (response) {
        detailsController.state = response.data[0];
    });

});


