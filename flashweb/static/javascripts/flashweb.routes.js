(function () {
  'use strict';

  angular
    .module('flashweb.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
    }).when('/+:username', {
      controller: 'ProfileController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/profile.html'
    }).when('/+:username/settings', {
      controller: 'ProfileSettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/settings.html'
    }).when('/+:username/friends', {
      controller: 'FriendsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/friends/friends.html'
    }).when('/+:username/haps/:hapId', {
      controller: 'HapDetailedController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/haps/hap-detailed.html'
    }).otherwise('/');
  }
})();
