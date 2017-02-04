(function(){
	angular
		.module('sampleApp')
		.config(viewQueryRoutes);
	viewQueryRoutes.$inject = ['$stateProvider'];	
	function viewQueryRoutes($stateProvider){
		var viewQuery = {
			url: '/sections/:section',
			templateUrl: '/app/view-query/view-query.html',
			controller: 'ViewQueryController as vm',
			resolve: {
				articles: articles
			}
		};

		articles.$inject = ['models', '$stateParams'];
		/**
		 * Get an Array of Articles matching "Section" in stateParams
		 * @param  {object} models  -  AngularJS resource linking NYT API
		 * @param  {object} $stateParams - contains "Section" supplied by user
		 * @return {array}  Array of NYT Articles matching "Section"
		 */
		function articles(models, $stateParams){
			var section = $stateParams.section;
			return models.Articles.get({section: section}).$promise
				.then(function(articles){
					return articles.results;
				})
				.catch(function(e){
					alert("Could not get articles! " + e);
					$state.go('selectQuery');
				})
		}

    	$stateProvider
    		.state('viewQuery', viewQuery);          
	}	
})();
