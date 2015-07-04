'use strict';


angular.module('angularToDoApp')
  .controller('MainCtrl', function ($scope) {
      $scope.username = 'BC Todo';

    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

       //this adds new todo to the todos array and then clears the input field
      $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };

      $scope.removeTodo = function($index) {
        $scope.todos.splice(index, 1);
      };

  });
