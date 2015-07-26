(function () {
  'use strict';

  angular
    .module('hapin.authentication.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Authentication'];

  function LoginController($location, $scope, Authentication) {
    var vm = this;
console.log("entering login function 1")
    vm.login = login;

    activate();

    function activate() {
      console.log("entering login function 3", Authentication.isAuthenticated())
      // If the user is authenticated, they should not be here.
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }

    function login() {
      console.log("entering login function 2")
      Authentication.login(vm.email, vm.password);
    }
  }
})();
