/**
 * 
 * Used to retrieve Articles from the New York Times API
 * @return {Object} An object containing Angular Resources for XHR requests
 * 
 */
(function(){
	'use strict';
	angular
		.module('sampleApp')
		.factory('models', models);

	models.$inject = ['$resource'];	
	var API_KEY = 'fa87b0c19d1e4e628b80ea37705bc5c9';
	function models($resource){

		function Articles(){
			var Articles = $resource( 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/:section/1.json', {'api-key':API_KEY, section:'@section'});
			return Articles;
		}

		function Sections(){
			var Sections = $resource( 'https://api.nytimes.com/svc/mostpopular/v2/viewed/sections.json', {'api-key':API_KEY });
			return Sections;
		}
		return {
			Articles: Articles(),
			Sections: Sections()
		};

	}
})();