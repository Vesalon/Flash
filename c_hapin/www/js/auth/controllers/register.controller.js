'use strict';

  angular
    .module('hapin.auth.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope'];

  /**
  * @namespace RegisterController
  */
  function RegisterController($scope) {
    var hi = this;
    hi.register = register;
    activate();

    function activate() {
      console.log("register avtivated")
      // // If the user is authenticated, they should not be here.
      // if (Authentication.isAuthenticated()) {
      //   $location.url('/');
      // }
    }

   function register() {
     console.log("register() entered")
    //  Authentication.register(vm.email, vm.password, vm.username);
   }
 }
