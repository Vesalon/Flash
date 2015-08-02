// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hapin', [
      //  'ionic',
        'ngMaterial',
        // 'ng-mfb',
          'ngMockE2E',
         'ui.router',
         'hapin.constants',
         'hapin.routes',
         'hapin.config',
         'hapin.auth',
         'hapin.layout',
         'hapin.haps',
         'hapin.navbar',

])

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

.run(function($httpBackend) {

  var accounts = [{"username":"Geo","password":"pass","email":"geo@a.com"}];

  //login
  $httpBackend.whenPOST('/api/v1/auth/login/')
    .respond(function(method, url, data) {
      var o = angular.fromJson(data);
      //console.log(o); // {"email":"Nina","password":"mypass"}
    //  console.log(accounts);
      var account = accounts.filter(function (a) {
          return a.email === o.email;
        })[0];
      console.log("account = ", account);
      //identity = {username: account.username, role: 'Account'}
      return [200, account, {}];
  });

  //register
  $httpBackend.whenPOST('/api/v1/accounts/')
    .respond(function(method, url, data) {
      var account = angular.fromJson(data);
      console.log(data); // {"username":"Nina","password":"pass","email":"nina@a.com"}
      accounts.push(account);
      console.log(accounts);
      return [200, account, {}];
  });

  // //   // don't mock - for html views
  // $httpBackend.whenGET(/^\/templates\//).passThrough();
  // $httpBackend.whenGET(/\.html$/).passThrough();
  //
  // // don't mock - for everything else
  //   $httpBackend.whenGET(/^\w+.*/).passThrough();
  //   $httpBackend.whenPOST(/^\w+.*/).passThrough();

  $httpBackend.whenGET(/templates\/\w+.*/).passThrough();

});
