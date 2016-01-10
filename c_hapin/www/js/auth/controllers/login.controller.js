'use strict';

  angular
    .module('hapin.auth.controllers', [])
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$state', 'Auth', '$mdToast'];

  function LoginController($scope, $state, Auth, $mdToast) {
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
      // if (Authentication.isAuthenticated()) {
      //   $location.url('/');
      // }
    }


    function login() {
      Auth.login(hi.email, hi.password)
      .then(
        function(){
          if(Auth.isAuthenticated()){
            $state.go('site.private.content.haps');
          }else{
            // console.log('login unsuccessful; show toast');
            $mdToast.show(
              $mdToast.simple()
              .textContent('This is not a valid login!')
              .position('top')
              .hideDelay(3000)
            );
          }
        }
      )

      // // here, we fake authenticating and give a fake user
      // Principal.authenticate({
      //   username: 'catwoman',
      //   roles: ['Account']
      // });
      // //
      // if ($scope.returnToState)
      //    $state.go($scope.returnToState.name, $scope.returnToStateParams);
      // else $state.go('public.index');

    //   if(Auth.isAuthenticated()){
    //     $state.go('site.private.content.haps');
    //   }else{
    //     console.log('login unsuccessful; show toast');
    //     $mdToast.show(
    //   $mdToast.simple()
    //     .textContent('This is not a valid login!')
    //    .position('top')
    //     .hideDelay(3000)
    // );
    //
    //   }

    }

    function gotoRegister() {
      console.log("entering login.register function")
      $state.go("site.public.register");
    }

}
