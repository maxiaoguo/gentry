'use strict';

/**
 * @ngdoc overview
 * @name new2App
 * @description
 * # new2App
 *
 * Main module of the application.
 */
angular
  .module('new2App', ['ui.router']).config(function($stateProvider,$urlRouterProvider){
  	$stateProvider.state('list1',{
  		url:"/list1",
  		templateUrl:"views/list1.html",
  		controller:"list1"
  	}).state('list2',{
  		url:"/list2",
  		templateUrl:"views/list2.html",
  		controller:"list2"
  	})
  })
