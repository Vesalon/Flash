(function () {
  'use strict';

  angular
    .module('hapin.routes')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: "/www/templates/authentication/login.html"
      })
      .state('register', {
        url: "/register",
        controller: 'RegisterController',
        controllerAs: 'vm',
        templateUrl: "/www/templates/authentication/register.html"
      })
      .state('friends', {
        url: "/friends",
        controller: 'FriendsController',
        controllerAs: 'vm',
        templateUrl: "/www/templates/friends/friends.html"
      })
      .state('profile', {
        url: "/+:username",
        controller: 'ProfileController',
        controllerAs: 'vm',
        templateUrl: "/www/templates/profiles/profile.html"
      })

    $urlRouterProvider.otherwise("/");

})();
