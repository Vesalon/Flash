/**
* NewFriendController
* @namespace flashweb.friends.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.controllers')
    .controller('NewFriendController', NewFriendController);

  NewFriendController.$inject = ['$http', '$rootScope', '$scope', 'Authentication', 'Snackbar', 'Friends'];

  /**
  * @namespace NewFriendController
  */
  function NewFriendController($http, $rootScope, $scope, Authentication, Snackbar, Friends) {
    var vm = this;

    vm.submit = submit;

    /**
    * @name submit
    * @desc Create a new Friend
    * @memberOf flashweb.haps.controllers.NewFriendController
    */
    function submit() {
      $rootScope.$broadcast('friend.created', {
        select: vm.select,
        alias: vm.select,
        orig: {
          username: Authentication.getAuthenticatedAccount().username
        }
      });
    //   console.log(title, desc, location, time);
      $scope.closeThisDialog();
      console.log('friend SUBMIT ALMOST DONE');

      Friends.create(vm.select.username, vm.alias).then(createFriendSuccessFn, createFriendErrorFn);
      console.log('SUBMIT SENT');

      /**
      * @name createHapSuccessFn
      * @desc Show snackbar with success message
      */
      function createFriendSuccessFn(data, status, headers, config) {
          console.log('SUBMIT SUCCESS');
          Snackbar.show('Success! Friend added.');
      }


      /**
      * @name createHapErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createFriendErrorFn(data, status, headers, config) {
          console.log('SUBMIT ERROR');
          $rootScope.$broadcast('friend.created.error');
        Snackbar.error(data.error);
      }
    }

  }
})();
