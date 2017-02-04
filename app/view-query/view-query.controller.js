
(function(){
    angular
        .module('sampleApp')
        .controller('ViewQueryController', ViewQueryController);

    ViewQueryController.$inject = ['articles'];    

    function ViewQueryController(articles){
  		var vm = this;
  		vm.articles = articles;
    }
 })();   