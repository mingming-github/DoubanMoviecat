
(function(angular){
	
	'use strict';

	// Declare app level module which depends on views, and components
	var mod=angular.module('moviecat', [
			  'ngRoute',
			  'detailMod',
			  'moviecatMod'
			]);
			
	mod.config(['$routeProvider',function($routeProvider) {
		  $routeProvider.otherwise({redirectTo: '/in_theaters/p=1'});
	}]);
	
	//监听导航颜色
	mod.controller('navCtrl',['$scope','$location',function($scope,$location){
		
		//$scope.path=$location.path();
		$scope.$location=$location;
		$scope.$watch('$location.path()',function(now,old){
			//var path=$location.path();
			if(now.startsWith('/in_theaters')){
				$scope.type='in_theaters';
			}else if(now.startsWith('/coming_soon')){
				$scope.type='coming_soon';
			}else if(now.startsWith('/top250')){
				$scope.type='top250'
			};
		});
		
	}]);
	
	//搜索模块
	mod.controller('searchCtrl',['$scope','$routeParams','$route',function($scope,$routeParams,$route){
		$scope.input=''
		$scope.searching=function(){
			var catgory=$routeParams.catgory;
			var q=$routeParams.q;
			$route.updateParams({catgory:'search',q:$scope.input});
		};
		
	}])
	
})(angular)

