'use strict';

angular
  .module('hapin.routes', ['ui.router.stateHelper'])
  .config(config);


config.$inject = ['$stateProvider', '$urlRouterProvider', 'stateHelperProvider'];

function config($stateProvider, $urlRouterProvider, stateHelperProvider) {

  $stateProvider
    .state({
      name: 'site',
      'abstract': true,
      template: '<ui-view/>',
      url: '',
    })
    .state('site.public', {
      'abstract': true,
      template: '<ui-view/>',
      url: '',
    })
    .state('site.public.index', {
      templateUrl: 'templates/public/index.html',
      controller: 'PublicIndexCtrl',
      controllerAs: 'hi',
      url: '',
    })
    .state('site.public.login', {
      templateUrl: 'templates/auth/login.html',
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'hi',
    })
    .state('site.public.register', {
      templateUrl: 'templates/auth/register.html',
      url: '/register',
      controller: 'RegisterController',
      controllerAs: 'hi',
    })
    .state('site.private', {
      'abstract': true,
      //    templateUrl: 'templates/private/index.html',
      //  controller: 'NavCtrl',
      //  controllerAs: 'hi',
      url: '/private',
      views: {
        '': {
          templateUrl: 'templates/private/index.html'
        },
        'sidebar@site.private': {
          templateUrl: 'templates/private/sidebar.html',
          controller: 'SidebarController', //'NavCtrl',
          controllerAs: 'hi',
        }

      }

    })
    .state('site.private.content', {
      'abstract': true,
      template: '<ui-view/>',
      url: '',
    })

  .state('site.private.content.haps', {
      templateUrl: 'templates/private/haps/haps.html',
      controller: 'HapsController',
      controllerAs: 'hi',
      url: '/haps',
    })
    .state('site.private.content.newhap', {
        templateUrl: 'templates/private/haps/new-hap.html',
        // controller: 'HapsController',
        // controllerAs: 'hi',
        url: '/newhap',
      })
    .state('site.private.content.friends', {
      templateUrl: 'templates/private/friends/friends.html',
      controller: 'FriendsController',
      controllerAs: 'hi',
      url: '/friends',
    })
    .state('site.private.content.newfriend', {
      templateUrl: 'templates/private/friends/new-friend-account.html',
      controller: 'NewFriendAccountController',
      controllerAs: 'hi',
      url: '/newfriend',
    })
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
