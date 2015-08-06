(function () {
  'use strict';

angular
  .module('hapin.navbar')
  .controller('NavCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $state, Auth) {

    $scope.toggleLeft = buildToggler('left');
  //  $scope.getUsername = getUsername;
    $scope.logout = logout;
    $scope.username = Auth.username();


/**
 * Build handler to open/close a SideNav; when animation finishes
 * report completion in console
 */
  function buildToggler(navID) {
    var debounceFn =  $mdUtil.debounce(function(){
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    },100);
    return debounceFn;
  }

  // function getUsername() {
  //   return Auth.username();
  // }

  function logout() {
    Auth.logout();
    console.log('logged out');
    $state.go('site.public.login');
  }

})
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });

  };
});

})();
