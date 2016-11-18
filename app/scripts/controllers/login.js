angular.module('new2App').controller('login',function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1510/aut",
		method:'get',
	}).success(function(e){
		$scope.mdata=e
	})
})
