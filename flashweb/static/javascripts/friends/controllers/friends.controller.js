/**
* FriendsController
* @namespace flashweb.friends.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.controllers')
    .controller('FriendsController', FriendsController);

  FriendsController.$inject = ['$scope', 'Authentication', 'Friends', 'Snackbar'];

  /**
  * @namespace FriendsController
  */
  function FriendsController($scope, Authentication, Friends, Snackbar) {
    var vm = this;
    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.list = [];
    //vm.list = ["Tom", "Dick", "Harry"];
    //vm.list = $scope.list;
    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf flashweb.friends.controllers.FriendsController
    */
    function activate() {
      if (vm.isAuthenticated) {
       var authenticatedAccount = Authentication.getAuthenticatedAccount();

       Friends.get(authenticatedAccount.username)
           .then(friendsSuccessFn, friendsErrorFn);
     }
     /*
     $scope.$on('hap.created', function (event, hap) {
       vm.haps.unshift(hap);
     });

     $scope.$on('hap.created.error', function () {
       vm.haps.shift();
     });*/

     /**
      * @name friendsSuccessFn
      * @desc Update haps array on view
      */
      function friendsSuccessFn(data, status, headers, config) {
        vm.list = data.data;
      }


      /**
      * @name friendsErrorFn
      * @desc Show snackbar with error
      */
      function friendsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }


/*
      Friends.all().success(function(data) {
        vm.list = data;
      });
*/
      $scope.$watchCollection(function () { return $scope.friends; }, render);
    //  $scope.$watch(function () { return $(window).width(); }, render);
    }

    /**
    * @name render
    * @param {Array} current The current value of `vm.friends`
    * @param {Array} original The value of `vm.friends` before it was updated
    * @memberOf flashweb.friends.controllers.FriendsController
    */
    function render(current, original) {
      if (current !== original) {
        vm.list = [];
        for (var i = 0; i < current.length; ++i) {
          vm.list.push(current[i]);
        }
      }
    }
  }
})();
