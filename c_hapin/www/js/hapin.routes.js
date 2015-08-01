'use strict';

  angular
    .module('hapin.routes', [])
   .config(config);


  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {

    //  $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('site', {
        'abstract': true,
        url: '',
        template: '<ui-view/>'
      // resolve: {
      //   authorize: ['authorization',
      //     function(authorization) {
      //       return authorization.authorize();
      //     }
      //   ]
      // }
      })
      .state('login', {
        parent: 'site',
        url: "/login",
        templateUrl: "templates/auth/login.html",
        controller: "LoginController",
        controllerAs: "hi"
      })
      .state('register', {
        parent: 'site',
        url: "/register",
        templateUrl: "templates/auth/register.html",
        controller: "RegisterController",
        controllerAs: "hi"
      })
      .state('private', {
        parent: 'site',
        'abstract': true,
        url: '/private',
        // data: {
        //   roles: ['Account']
        // },
        templateUrl: 'templates/private/index.html'
      })
      .state('sidebar', {
        parent: 'private',
        'abstract': true,
        url: '/sidebar',
        // data: {
        //   roles: ['Account']
        // },
        templateUrl: 'templates/private/sidebar.html'
      })
      .state('temp', {
        parent: 'sidebar',
        url: "/temp",
        templateUrl: "templates/private/temp.html",
        //controller: "TestCtrl"
      })
      .state('public', {
        parent: 'site', 'abstract': true, url: '', templateUrl: 'templates/public/index.html'
      })
      .state('public.index', {
        parent: 'public', url: "/index", templateUrl: "templates/public/index.html"
      })
      .state('accessdenied', {
        parent: 'private',
        url: '/denied',
        templateUrl: 'templates/private/denied.html'
        // data: {
        //   roles: []
        // },
        // views: {
        //   'content@': {
        //     templateUrl: 'denied.html'
        //   }
        // }
      })
    ;


  }

  // angular
  //   .module('hapin.routes', ['ngRoute'])
  //  .config(config);

  // config.$inject = ['$routeProvider'];
  //
  // function config($routeProvider) {
  //   $routeProvider
  //   .when('/', {
  //       controller: TestCtrl,
  //       templateUrl: 'partials/main.html'
  //   })
  //   .when('/view', {
  //       controller: ViewCtrl,
  //       templateUrl: 'partials/view.html'
  //   });
  //
  // //  $urlRouterProvider.otherwise('templates/authentication/login.html');
  // }
