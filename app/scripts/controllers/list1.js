'use strict';

/**
 * @ngdoc function
 * @name new2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the new2App
 */
angular.module('new2App')
  .controller('list1', function ($scope,$http) {
     $http({
     	methed:"get",
     	url:"http://www.somenote.cn:1510/test"
     }).success(function(data){
     	$scope.wyc=data
     })
  });
