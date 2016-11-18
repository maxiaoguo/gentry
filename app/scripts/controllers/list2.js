'use strict';

/**
 * @ngdoc function
 * @name new2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the new2App
 */
angular.module('new2App')
  .controller('list2', function ($scope,$http) {
     $http({
     	methed:"get",
     	url:"http://www.somenote.cn:1510/test2"
     }).success(function(data2){
     	$scope.jgr=data2
     })
  });