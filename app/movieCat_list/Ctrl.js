
(function(angular){
	
	'use strict';

	var mod=angular.module('moviecatMod', ['ngRoute','jsonpSmod']);
	
	
	mod.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/:catgory/p=:page', {
	    templateUrl: 'movieCat_list/view.html',
	    controller: 'moviecatModCtrl'
	  });
	}]);
	
	mod.controller('moviecatModCtrl',['$scope','$http','$routeParams','$route','jsonpSer',function($scope,$http,$routeParams,$route,jsonpSer) {
		/*
		$scope.subjects=[];
		$scope.errmessages='';
		var DoubanAPI='http://api.douban.com/v2/movie/in_theaters';
		
		$http.jsonp(DoubanAPI+'?cb=JSON_CALLBACK').then(function(res){
			console.log(res)
			$scope.subjects=res.data.subjects;
		},function(err){
			console.log(err);
			$scope.errmessages='服务器出错啦.....'+err.statusText+err.status;
		})
		*/
		
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
		
		var catgory=$routeParams.catgory;
		jsonpSer.jsonp('http://api.douban.com/v2/movie/'+catgory,{'start':start,'count':count,'q':$routeParams.q},function(data){
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
					$route.updateParams({page:page});   //更新地址里的数据      第一个page是 /:page    第二个是个参数page
				}
				
			}
			
			//console.log($scope.subjects);
		})
		
		
	}]);
	
	
})(angular);


