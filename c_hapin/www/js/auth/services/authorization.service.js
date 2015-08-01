'use strict';

  angular
    .module('hapin.auth.services')
    .factory('Authorization', Authorization);

  Authorization.$inject = ['$rootScope', '$state', 'Principal'];

  function Authorization($rootScope, $state, Principal) {

    // var Auth = {
    //   //  getAuthenticatedAccount: getAuthenticatedAccount,
    //     isAuthenticated: isAuthenticated,
    //   //  login: login,
    //   //  logout: logout,
    //   //  register: register,
    //   //  setAuthenticatedAccount: setAuthenticatedAccount,
    //   //  unauthenticate: unauthenticate
    // };
    //
    // return Auth;

    return {
      authorize: function() {
        // return Principal.identity()
        //   .then(function() {
        //     var isAuthenticated = Principal.isAuthenticated();
        //
        //     if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !Principal.isInAnyRole($rootScope.toState.data.roles)) {
        //       if (isAuthenticated) $state.go('accessdenied'); // user is signed in but not authorized for desired state
        //       else {
        //         // user is not authenticated. stow the state they wanted before you
        //         // send them to the signin state, so you can return them when you're done
        //         $rootScope.returnToState = $rootScope.toState;
        //         $rootScope.returnToStateParams = $rootScope.toStateParams;
        //
        //         // now, send them to the signin state so they can log in
        //         $state.go('login');
        //       }
        //     }
        //   });
      }
    };






}
