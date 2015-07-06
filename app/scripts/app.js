'use strict';

var angularToDoApp = angular.module('angularToDoApp', ['ngAnimate', 'ngMaterial', 'ngCookies', 'ngResource', 'ui.router', 'ngSanitize', 'ngTouch', 'ui.sortable',
      "firebase"])


angularToDoApp.constant('FBURL', 'https://anotherthingtodo.firebaseio.com/');

angularToDoApp.config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.when('', '/');
      $urlRouterProvider.otherwise('/login');
      $stateProvider
          .state('home',{
            url: '/',
            templateUrl: 'scripts/home/home.html',
            controller: 'HomeCtrl'
          })
          .state('login',{
            url: '/login',
            templateUrl: 'scripts/login-register/login-logout/login.html',
            controller: 'LoginCtrl'
          })
          .state('logout', {
            url: '/logout',
            templateUrl: 'scripts/login-register/login-logout/logout.html',
            controller: 'LoginCtrl',
            resolve: {
              logout: function(authService){
                authService.logout();
              }
            }
          })
          .state('register', {
            url: '/register',
            templateUrl: 'scripts/login-register/registration/register.html',
            controller: 'RegisterCtrl'
          })
          .state('secure', {
            abstract: true,
            template: '<div ui-view>',
            controller: 'SecureCtrl',
            resolve: {
              isLoggedIn: function(authService){
                return authService.isLoggedIn();
              }
            }
          })
          .state('secure.dashboard', {
            url: '/dashboard',
            templateUrl: 'scripts/secure/dashboard.html',
            controller: 'DashboardCtrl'
          });

    });

angularToDoApp.filter('todoFilter', function ($location) {
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

