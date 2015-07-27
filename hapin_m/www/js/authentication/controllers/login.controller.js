(function () {
  'use strict';

  angular
    .module('hapin.authentication.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Authentication'];

  function LoginController($location, $scope, Authentication) {
    var hi = this;
console.log("entering login function 1")
    hi.login = login;
    hi.register = register;

    activate();

    function activate() {
      console.log("entering login function 3", Authentication.isAuthenticated())
      // If the user is authenticated, they should not be here.
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
        console.log("exiting login function 3");
    }

    function login() {
      console.log("entering login function 2");
      Authentication.login(hi.email, hi.password);
    }

    function register() {
      console.log("entering login.register function")
      $location.url('/register');

    }
  }
})();
