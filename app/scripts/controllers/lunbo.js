angular.module('mag',[]).directive('gentry',function(){
		return{
			restrict:'EACM',
			templateUrl:'views/lunbo.html',
			scope:{fdata:"=data"},//“=”变量  “@”字符串
			replace:true,
			link:function(scope,el,attr){
				scope.a=attr['b']
			}
		}
})
//.service("getdata",function($http){
//	this.ajax=function(a,b,c){
////		$http()
////	}
////	this.getodd=function(){
////		
////	}
////	this.geteven=function(){
////		
////	}
//	return {
//		ajax:function(url,method,callback){
//			$http({
//				url:url,
//				method:method,
//			}).success(function(e){
//				callback(e)
//			})
//		}
//	},
//	log:function(e){
//		console.log(e)
//	},
//	getodd:function(e){
//		var arr=[]
//		for(var i=0;i<e.length;i=i+2){
//			arr.push(e[i])
//		}
//		return arr
//	},
//	geteven:function(e){
//		var arr=[]
//		for(var i=0;i<e.length;i=i+2){
//			arr.push(e[i])
//		}
//		return arr
//	}
//}).filter("substr",function(){
//	return function(e){
//		if(e==1){
//			return ***
//		}else{
//			return e
//		}
//	}
//})
