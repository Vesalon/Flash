
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
        controllerAs: 'hi',
        templateUrl: "templates/authentication/login.html"
      })
      .state('register', {
        url: "/register",
        controller: 'RegisterController',
        controllerAs: 'hi',
        templateUrl: "templates/authentication/register.html"
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
        data: {
          authorizedRoles: [USER_ROLES.account]
        }
      })   ;

    $urlRouterProvider.otherwise('/login');
    // $urlRouterProvider.otherwise(function ($injector, $location) {
    //   var $state = $injector.get("$state");
    //   $state.go("nav.haps");
    // });

    // $urlRouterProvider.otherwise(function($injector, $location){
    //    var state = $injector.get('$state');
    //    if(....)
    //      state.go('core');
    //    else(...)
    //      state.go('dashboard');
    //    ...
    //    return $location.path();
    // });

 }
