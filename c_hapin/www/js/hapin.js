// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hapin', [
        //  'ionic',
         'ngMaterial',
         'ng-mfb',
         'ui.router',
         'ui.router.stateHelper',
         'uiGmapgoogle-maps',        


         'angular.snackbar',
         'ui.bootstrap',
         'hapin.constants',
         'hapin.routes',
         'hapin.config',
         'hapin.auth',
         'hapin.layout',
         //'hapin.utils',

         'hapin.haps',
         'hapin.friends',
         'hapin.places',
         'hapin.profiles',
         'hapin.public',

         // add/remove for mock backend
         'ngMockE2E',
         'hapin.dev',
])

  .run(function($httpBackend) {
    $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
    $httpBackend.whenGET(/img\/\w+.*/).passThrough();
  });

// .run(['$rootScope', '$state', '$stateParams', 'Authorization', 'Principal',
//     function($rootScope, $state, $stateParams, Authorization, Principal) {
//       $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
//         $rootScope.toState = toState;
//         $rootScope.toStateParams = toStateParams;
//
//         if (Principal.isIdentityResolved()) Authorization.authorize();
//       });
//     }
//   ]);

// .run(function($rootScope, $state, Auth, AUTH_EVENTS) {
//   $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
//
//     if ('data' in next && 'authorizedRoles' in next.data) {
//       var authorizedRoles = next.data.authorizedRoles;
//       if (!Auth.isAuthorized(authorizedRoles)) {
//         event.preventDefault();
//         $state.go($state.current, {}, {reload: true});
//         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
//       }
//     }
//
//     if (!Auth.isAuthenticated()) {
//       console.log("entering watcher, want to go to ", next.name)
//       if (next.name !== 'login') {
//         event.preventDefault();
//         $state.go('login');
//       }
//     }
//
//
//   });
//
// })
