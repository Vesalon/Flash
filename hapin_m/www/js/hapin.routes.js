
  'use strict';

  angular
    .module('hapin.routes', [])
   .config(config);


  config.$inject = ['$stateProvider', '$urlRouterProvider', 'USER_ROLES'];

  function config($stateProvider, $urlRouterProvider, USER_ROLES) {
    $stateProvider
      .state('login', {
        url: "/login",
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: "/templates/authentication/login.html"
      })
      .state('register', {
        url: "/register",
        controller: 'RegisterController',
        controllerAs: 'vm',
        templateUrl: "/templates/authentication/register.html"
      })
      .state('nav', {
        url: "/nav",
        abstract: true,
        templateUrl: "templates/menu.html",
        //controller: 'NavCtrl'
      })
      .state('nav.haps', {
        url: "/haps",
        views: {
          'menuContent' :{
            templateUrl: "templates/haps/haps.html"
          }
        }
      })
      .state('nav.friends', {
        url: "/friends",
        views: {
          'menuContent' :{
            //controller: 'FriendsController',
            // controllerAs: 'vm',
            templateUrl: "templates/friends/friends.html"
          }
        },
        // data: {
        //   authorizedRoles: [USER_ROLES.account]
        // }
      })   ;

    $urlRouterProvider.otherwise('/nav/haps');
 }
