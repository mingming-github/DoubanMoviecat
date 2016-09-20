


(function(angular){
	
	var Smod=angular.module('jsonpSmod',[]);
	
	Smod.service('jsonpSer',['$document','$window',function($document,$window){
		
		this.jsonp=function(url,data,callback){
			
		    //{id:1,name:zhangsan} ?id=1&name=zhangsan&
			var qSring='?';
			for ( var v in data){
				qSring += v + '=' + data[v]+'&';
			};
			
			//?id=1&name=zhangsan& callback=num4459933245
			var cbfunName='num'+Math.random().toString().replace('.','');
			qSring+='callback='+cbfunName;
			//$window[cbfunName]=callback;
			$window[cbfunName]=function(data){
				callback(data);
				$document[0].body.removeChild(scriptEle);  //用完就清除掉
			}
			//window.num4459933245=callback
			
			var scriptEle=$document[0].createElement('script');
			scriptEle.src=url+qSring;
			$document[0].body.appendChild(scriptEle);
		};
		
	}]);
	
	
})(angular)
