'use strict';

  angular
    .module('hapin.routes', ['ui.router.stateHelper'])
   .config(config);


  config.$inject = ['$stateProvider', '$urlRouterProvider', 'stateHelperProvider'];

  function config($stateProvider, $urlRouterProvider, stateHelperProvider) {

    stateHelperProvider
      .state({
        name: 'site',
        'abstract':true,
        template: '<ui-view/>',
        url: '',
        children: [
          {
            name: 'public',
            'abstract': true,
            template: '<ui-view/>',
            url: '',
            children: [
              {
                name: 'index',
                templateUrl: 'templates/public/index.html',
                url: '',
              },
              {
                name: 'login',
                templateUrl: 'templates/auth/login.html',
                url: '/login',
                controller: 'LoginController',
                controllerAs: 'hi',
              },
              {
                name: 'register',
                templateUrl: 'templates/auth/register.html',
                url: '/register',
                controller: 'RegisterController',
                controllerAs: 'hi',
              },
            ],
          },
          {
            name: 'private',
            'abstract': true,
            templateUrl: 'templates/private/index.html',
            url: '/private',
            children: [
              {
                name: 'sidebar',
                templateUrl: 'templates/private/sidebar.html',
                controller: 'NavCtrl',
                controllerAs: 'hi',
                url: '/sidebar',
              },
              {
                name: 'content',
                'abstract': true,
                template: '<ui-view/>',
                url: '',
                children: [
                  {
                    name: 'haps',
                    templateUrl: 'templates/private/haps/haps.html',
                    controller: 'HapsController',
                    controllerAs: 'hi',
                    url: '/haps',
                    // children: [
                    //   {
                    //     name: 'new-hap',
                    //     templateUrl: 'templates/private/haps/new-hap.html',
                    //     controller: 'NewHapController',
                    //     controllerAs: 'hi',
                    //     url: '/newhap',
                    //   },
                    // ],
                  },
                  {
                    name: 'friends',
                    templateUrl: 'templates/private/friends/friends.html',
                    controller: 'FriendsController',
                    controllerAs: 'hi',
                    url: '/friends',
                    children: [
                      {
                        name: 'new-friend',
                        templateUrl: 'templates/private/friends/new-friend-account.html',
                        controller: 'NewFriendAccountController',
                        controllerAs: 'hi',
                        url: '/newfriendaccount',
                      },
                    ],
                  },
                ],
              },
          ],
          },
        ],
      });
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
