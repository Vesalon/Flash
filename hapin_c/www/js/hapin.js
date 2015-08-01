// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hapin', [
      //  'ionic',
        'ngMaterial',
        'ng-mfb',
        'ui.router',
        'hapin.constants',
        'hapin.routes',
        //'hapin.config',
        'hapin.authentication',
        // 'hapin.friends',
])

.run(function($rootScope, $state, Authentication, AUTH_EVENTS) {


  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

    // if ('data' in next && 'authorizedRoles' in next.data) {
    //   var authorizedRoles = next.data.authorizedRoles;
    //   if (!Authentication.isAuthorized(authorizedRoles)) {
    //     event.preventDefault();
    //     $state.go($state.current, {}, {reload: true});
    //     $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
    //   }
    // }

    // if (!Authentication.isAuthenticated()) {
    //   console.log("entering watcher, want to go to ", next.name)
    //   if (next.name !== 'login') {
    //     event.preventDefault();
    //     $state.go('login');
    //   }
    // }


  });

})
