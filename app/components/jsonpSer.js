


(function(angular){
	
	var Smod=angular.module('jsonpSmod',[]);
	
	Smod.service('jsonpSer',['$document','$window',function($document,$window){
		
		this.jsonp=function(url,data,callback){
			var cbfunName='num'+Math.random().toString().replace('.','');
			$window[cbfunName]=callback;
		    //{id:1,name:zhangsan} ?id=1&name=zhangsan&
			var qSring='?';
			for ( var v in data){
				qSring += v + '=' + data[v]+'&';
			};
			//?id=1&name=zhangsan& callback=num4459933245
			qSring+='callback='+cbfunName;
			//window.num4459933245=callback
			var scriptEle=$document[0].createElement('script');
			scriptEle.src=url+qSring;
			$document[0].body.appendChild(scriptEle);
		};
		
	}]);
	
	
})(angular)
