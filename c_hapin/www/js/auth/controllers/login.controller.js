'use strict';

  angular
    .module('hapin.auth.controllers', [])
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$state', 'Auth'];

  function LoginController($scope, $state, Auth) {
    var hi = this;
    hi.login = login;
    hi.gotoRegister = gotoRegister;
    activate();


    function activate(){
      console.log("login activated.")
      // // If the user is authenticated, they should not be here.
      // if (Authentication.isAuthenticated()) {
      //   $location.url('/');
      // }
    }


    function login() {
      console.log("login() entered.")
      Auth.login(hi.email, hi.password);

      // // here, we fake authenticating and give a fake user
      // Principal.authenticate({
      //   username: 'catwoman',
      //   roles: ['Account']
      // });
      // //
      // if ($scope.returnToState)
      //    $state.go($scope.returnToState.name, $scope.returnToStateParams);
      // else $state.go('public.index');
    }

    function gotoRegister() {
      console.log("entering login.register function")
      $state.go("register");
    }

}
