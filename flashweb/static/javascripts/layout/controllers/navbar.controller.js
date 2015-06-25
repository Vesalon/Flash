/**
* NavbarController
* @namespace flashweb.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf flashweb.layout.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }
})();
