  'use strict';

  angular
    .module('hapin.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  function RegisterController($location, $scope, Authentication) {
   var hi = this;

   hi.register = register;

   activate();

    function activate() {
      // If the user is authenticated, they should not be here.
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }

   function register() {
     Authentication.register(hi.email, hi.password, hi.username);
   }
 }
