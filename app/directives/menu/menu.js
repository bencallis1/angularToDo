var app = angular.module('angularTodo');

app.directive('menu', function(Auth){
  return {
    templateUrl: 'directives/menu/menu.html',
    restrict: 'E',
    replace: true,
    link: function(scope, ele){
      scope.user = authService.cachedUser;
      //meh?
      scope.$watch(function() { return Auth.cachedUser; }, function(newVal) {
        scope.user = newVal;
      }, true);
    }
  }
});
