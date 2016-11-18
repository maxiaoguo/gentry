'use strict';

/**
 * @ngdoc function
 * @name new2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the new2App
 */
angular.module("new2App",[])
  .controller("con",function($scope,$http,getdata){
	getdata.ajax('http://www.somenote.cn:1510/test','get',function(data){
		console.log(data)
		$scope.data=data
	})
	getdata.ajax('http://www.somenote.cn:1510/test2','get',function(data1){
		console.log(data1)
		$scope.data1=data1
	})
	getdata.ajax('http://www.somenote.cn:1510/aut','get',function(data2){
		console.log(data2)
		$scope.data2=data2
	})
	
	

})
.directive("auto",function(){
	return{
		restrict:'AEMC', 
		template:'<div class="da"><li ng-repeat="i in bj">{{i.title | create}}</li><li ng-repeat="b in gn">{{b.title | create}}</li></div><div class="center"><img  ng-repeat="t in gg" ng-src="{{t.img}}" /></div>',
		scope:true,
		transclude: true,
		scope:{bj:"=data",gn:"=data1",gg:"=data2"},
		link:function(s,e,attr){
			s.a=attr['b']
		}
		
	}
})
.filter("create",function(){
	return function(e) {
		if(e.length>10){
			return e.substring(0,10)+'....'
		}else{
			return e
		}
	}
})
.service('getdata',function($http){
	return{
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method
			}).success(function(e){
				callback(e)
			})
		}
	}
})

