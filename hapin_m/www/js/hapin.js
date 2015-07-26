// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hapin', [
        'ionic',
        'hapin.constants',
        'hapin.routes',
        'hapin.authentication',
        'hapin.friends',
])

.run(function($ionicPlatform, $rootScope, $state, Authentication, AUTH_EVENTS) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

    // if ('data' in next && 'authorizedRoles' in next.data) {
    //   var authorizedRoles = next.data.authorizedRoles;
    //   if (!Authentication.isAuthorized(authorizedRoles)) {
    //     event.preventDefault();
    //     $state.go($state.current, {}, {reload: true});
    //     $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
    //   }
    // }

    if (!Authentication.isAuthenticated()) {
      if (next.name !== 'login') {
        event.preventDefault();
        $state.go('login');
      }
    }


  });

})
