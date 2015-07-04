'use strict';

angular
  .module('angularToDoApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.sortable',
      "firebase"])

    .filter('todoFilter', function ($location) {
      return function (input) {
        var filtered = {};
        angular.forEach(input, function (todo, id) {
          var path = $location.path();
          if (path === '/active') {
            if (!todo.completed) {
              filtered[id] = todo;
            }
          } else if (path === '/completed') {
            if (todo.completed) {
              filtered[id] = todo;
            }
          } else {
            filtered[id] = todo;
          }
        });
        return filtered;
      };
    })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
