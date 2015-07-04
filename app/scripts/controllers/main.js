'use strict';

/**
 * @ngdoc function
 * @name angularToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularToDoApp
 */
angular.module('angularToDoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
  });
