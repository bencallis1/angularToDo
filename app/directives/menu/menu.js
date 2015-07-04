angularToDoApp.directive('menu', function(authService){
  return {
    templateUrl: '/menu.html',
    restrict: 'E',
    replace: true,
    link: function(scope, ele){
      scope.user = authService.cachedUser;
      //meh?
      scope.$watch(function() { return authService.cachedUser; }, function(newVal) {
        scope.user = newVal;
      }, true);
    }
  }
});