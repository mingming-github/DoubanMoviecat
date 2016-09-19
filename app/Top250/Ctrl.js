

(function(angular){
	
	'use strict';

	var mod=angular.module('moviecat.top250', ['ngRoute']);
	
	mod.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/top250/p=:page', {
	    templateUrl: 'Top250/view.html',
	    controller: 'Top250Ctrl'
	  });
	}]);
	
	mod.controller('Top250Ctrl',['$scope','$http','$routeParams','$route','jsonpSer',function($scope,$http,$routeParams,$route,jsonpSer) {
	
		var page=parseInt($routeParams.page);   //第几页
		var count=10                            //每页有几个
		var start=(page-1)*count;               //从第几个开始
		var totalP=0;                           //共多少页
		
		$scope.page=page;                      //将第一页暴露出去
		$scope.title='';                       //将标题暴露出去
		$scope.subjects=[];                    //定义空数据
		$scope.errmessages=''; 
		$scope.totalC=0;                       //总条数 
		$scope.loading=true;				   //是否加载
		
		jsonpSer.jsonp('http://api.douban.com/v2/movie/top250',{'start':start,'count':count},function(data){
			//console.log(data);
			
			$scope.totalC=data.total;
			$scope.totalP=Math.ceil($scope.totalC/count);
			$scope.title=data.title;
			$scope.subjects=data.subjects;
			$scope.loading=false;
			$scope.$apply();                   //让所有的值重新同步  解决获取不到数据
			
			//上下页事件暴露
			$scope.goPage=function(page){
				
				if ( page>=1 && page<=$scope.totalP ){
					$route.updateParams({page:page});   //第一个page是/:page    第二个是个参数pg
				}
				
			}
			
			//console.log($scope.subjects);
		})
	
	
	}]);
	
	
})(angular)


