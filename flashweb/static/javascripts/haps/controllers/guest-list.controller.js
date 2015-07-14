/**
* GuestListController
* @namespace flashweb.haps.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.controllers')
    .controller('GuestListController', GuestListController);

  GuestListController.$inject = ['$http', '$rootScope', '$scope', 'Authentication', 'Haps', 'Friends'];

  /**
  * @namespace GuestListController
  */
  function GuestListController($http, $rootScope, $scope, Authentication, Haps, Friends) {
    var vm = this;

    vm.submit = submit;

    vm.friends = [];

    vm.guests = [];

    activate();

    function activate() {
      var authenticatedAccount = Authentication.getAuthenticatedAccount();

      Friends.get(authenticatedAccount.username)
        .then(friendsSuccessFn, friendsErrorFn);

      /**
      * @name friendsSuccessFn
      * @desc Update haps array on view
      */
      function friendsSuccessFn(data, status, headers, config) {
        console.log('friends success');
        vm.friends = data.data;
      }

      /**
      * @name friendsErrorFn
      * @desc Show snackbar with error
      */
      function friendsErrorFn(data, status, headers, config) {
          console.log('friends failure');
          // Snackbar.error(data.error);
      }


    }

    /**
    * @name submit
    * @desc Create a new Hap
    * @memberOf flashweb.haps.controllers.GuestListController
    */
    function submit() {
      console.log(vm.guests);
      $rootScope.$broadcast('guestlist.created', {
        guests: vm.guests,
      });
    //   console.log(title, desc, location, time);
      $scope.closeThisDialog();
      console.log('SUBMIT ALMOST DONE');

      console.log('SUBMIT SENT');

      /**
      * @name createHapSuccessFn
      * @desc Show snackbar with success message
      */
      function createHapSuccessFn(data, status, headers, config) {
          console.log('SUBMIT SUCCESS');
      }


      /**
      * @name createHapErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createHapErrorFn(data, status, headers, config) {
          console.log('SUBMIT ERROR');
          $rootScope.$broadcast('hap.created.error');
        // Snackbar.error(data.error);
      }
    }
  }
})();
