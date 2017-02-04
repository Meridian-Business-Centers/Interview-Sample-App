(function(){
	angular
		.module('sampleApp')
		.config(selectQueryRoutes);
	selectQueryRoutes.$inject = ['$stateProvider'];	
	function selectQueryRoutes($stateProvider){
		var selectQuery = {
			url: '',
			templateUrl: '/app/select-query/select-query.html',
			controller: 'SelectQueryController as vm',
			resolve: {
				sections: sections
			}
		};
		sections.$inject = ['models'];
		/**
		 * Get list of New York Times article "sections"
		 * @param  {object} models - Angular Resource's connecting to NYT API
		 * @return {array}  Array of New York times "sections"      
		 */
		function sections(models){
			console.log("inside Sections");
			return models.Sections.get().$promise
				.then(function(r){
					return r.results;
				})
				.catch(function(e){
					alert("Could not get topics! " + e);
					throw e;
				})
		}

    	$stateProvider
    		.state('selectQuery', selectQuery);          
	}	
})();
