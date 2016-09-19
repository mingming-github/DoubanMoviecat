
(function(angular){
	
	'use strict';

	// Declare app level module which depends on views, and components
	var mod=angular.module('moviecat', [
			  'ngRoute',
			  'moviecat.in_theaters',
			  'moviecat.coming_soon',
			  'moviecat.top250'
			]);
			
	mod.config(['$routeProvider',function($routeProvider) {
		  $routeProvider.otherwise({redirectTo: '/in_theaters/p=1'});
	}]);
	
	
})(angular)

