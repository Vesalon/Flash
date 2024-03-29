/**
* `FriendsController`
* @namespace flashweb.friends.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.controllers')
    .controller('FriendsController', FriendsController);

  FriendsController.$inject = ['$scope', 'Authentication', 'Friends', 'snackbar'];

  /**
  * @namespace FriendsController
  */
  function FriendsController($scope, Authentication, Friends, snackbar) {

    console.log('entering FriendsController');

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

        $scope.$on('friend.created', function (event, friend) {
          //console.log(friend);
          vm.list.unshift(friend);
        });

        $scope.$on('friend.created.error', function () {
          //console.log('error!!!!');
          vm.list.shift();
        });

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
        //sonsole.log(data.error);
        //Snackbar.error(data.error);
         //snackbar.create(data.error);
        //  $scope.snackbar = function () {
        //    snackbar.create('Oops!');
        //  }
      }


/*
      Friends.all().success(function(data) {
        vm.list = data;
      });
*/
    //   $scope.$watchCollection(function () { return $scope.friends; }, render);
    //  $scope.$watch(function () { return $(window).width(); }, render);
    }

    /**
    * @name render
    * @param {Array} current The current value of `vm.friends`
    * @param {Array} original The value of `vm.friends` before it was updated
    * @memberOf flashweb.friends.controllers.FriendsController
    */
    // function render(current, original) {
    //   console.log(original);
    //   console.log(current);
    //   if (current !== original) {
    //     vm.list = [];
    //     for (var i = 0; i < current.length; ++i) {
    //       vm.list.push(current[i]);
    //     }
    //   }
    // }

    // function openNewFriendWizard () {
    //   console.log('entering openNewFriendWizard()');
    //         var modalInstance = $modal.open({
    //             templateUrl: '/static/templates/friends/new-friend-wizard.html',
    //             controller: 'NewFriendWizardController',
    //             controllerAs: 'modal'
    //         });
    //   console.log('loaded');
    //         modalInstance.result
    //             .then(function (data) {
    //                 closeNewFriendWizard();
    //                 vm.data = data;
    //                 vm.submit();
    //             }, function (reason) {
    //                 vm.reason = reason;
    //             });
    //   }


  }
})();
