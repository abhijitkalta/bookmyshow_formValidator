'use strict';

// Declare app level module which depends on views, and components
var bookmyshowApp = angular.module('bookmyshowApp',['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/formValidation',
    {
        templateUrl:'/app/formValidation/formValidation.html',

    });
  $routeProvider.otherwise({redirectTo: '/formValidation'});



}])