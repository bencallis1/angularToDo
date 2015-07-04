'use strict';

/**
 * @ngdoc function
 * @name angularToDoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularToDoApp
 */
angular.module('angularToDoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
