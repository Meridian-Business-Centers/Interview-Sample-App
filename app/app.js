(function(){
    'use strict';
    angular
        .module('sampleApp', ['ui.router', 'ngResource'])
        .run(runBlock)
        runBlock.$inject = ['$rootScope'];
        function runBlock($rootScope){
            $rootScope.$on("$stateChangeError", console.log.bind(console));
        }

})();
