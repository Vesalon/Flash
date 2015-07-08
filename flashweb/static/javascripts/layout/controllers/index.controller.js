/**
* IndexController
* @namespace flashweb.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication', 'Haps', 'Snackbar'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, Authentication, Haps, Snackbar) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.haps = [];

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf flashweb.layout.controllers.IndexController
    */
    function activate() {
      if (vm.isAuthenticated) {
        var authenticatedAccount = Authentication.getAuthenticatedAccount();
        Haps.get(authenticatedAccount.username)
            .then(hapsSuccessFn, hapsErrorFn);
      } else {
        // Haps.all().then(hapsSuccessFn, hapsErrorFn);
      }
      $scope.$on('hap.created', function (event, hap) {
        vm.haps.unshift(hap);
      });

      $scope.$on('hap.created.error', function () {
        vm.haps.shift();
      });


      /**
      * @name hapsSuccessFn
      * @desc Update haps array on view
      */
      function hapsSuccessFn(data, status, headers, config) {
        vm.haps = data.data;
      }


      /**
      * @name hapsErrorFn
      * @desc Show snackbar with error
      */
      function hapsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }

    function login() {
        window.location = '/login';
    }

    function register() {
        window.location = '/register';
    }
  }
})();
