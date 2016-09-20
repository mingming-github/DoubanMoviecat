


(function(){
	'use strict';
	var mod=angular.module('detailMod',[]);
	mod.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/detail/:id',{
			'controller':'detailCtrl',
			'templateUrl':'movieCat_detail/view.html',
		});
	}]);
	
	mod.controller('detailCtrl',['$scope','$routeParams','$route','jsonpSer',function($scope,$routeParams,$route,jsonpSer){
		$scope.deatail={};
		$scope.loading=true;
		
		jsonpSer.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
			$scope.deatail=data;
			$scope.loading=false;
			$scope.$apply();
		})
		
		
	}]);
	
	
	
	
	
	
	
	
	
})(angular);
