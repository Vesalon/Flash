
  'use strict';

  angular
    .module('hapin.routes', [])
   .config(config);


  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
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
      .state('friends', {
        url: "/friends",
        views: {
          'menuContent' :{
            templateUrl: "templates/friends/friends.html"
          }
        }
        // controller: 'FriendsController',
        // controllerAs: 'vm',
        // templateUrl: "/templates/friends/friends.html"
      });

    $urlRouterProvider.otherwise("/");
 }
