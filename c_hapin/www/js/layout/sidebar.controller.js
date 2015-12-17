'use strict';

  angular
    .module('hapin.layout.controllers')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$scope', '$state', 'Auth', '$timeout', '$mdSidenav', '$mdUtil', '$log'];

  function SidebarController($scope, $state, Auth, $timeout, $mdSidenav, $mdUtil, $log) {
    var hi = this;
    hi.logout = logout;
    hi.toggleLeft = buildToggler('left');
    hi.username = Auth.username();

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

      function logout() {
        Auth.logout();
        console.log('logged out');
        $state.go('site.public.login');
      }

  }

  // angular
  //   .module('hapin.layout.controllers')
  //   .controller('LeftCtrl', LeftCtrl);
  //
  // LeftCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];
  // function LeftCtrl($scope, $timeout, $mdSidenav, $log) {
  //
  //   var hi = this;
  //   hi.close = close;
  //
  //   function close() {
  //      $mdSidenav('left').close()
  //        .then(function () {
  //          $log.debug("close LEFT is done");
  //        });
  //    };
  // }
