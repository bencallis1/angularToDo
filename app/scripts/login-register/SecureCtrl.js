angularToDoApp.controller('SecureCtrl', function($scope, $state, isLoggedIn){
  !isLoggedIn && $state.go('login');
});