/**
* NewFriendController
* @namespace flashweb.friends.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.controllers')
    .controller('NewFriendController', NewFriendController);

  NewFriendController.$inject = ['$http', '$rootScope', '$scope', '$modal', 'Authentication', 'snackbar', 'Friends'];

  /**
  * @namespace NewFriendController
  */
  function NewFriendController($http, $rootScope, $scope, $modal, Authentication, snackbar, Friends) {
    var vm = this;

    vm.submit = submit;
    vm.openNewFriendWizard = openNewFriendWizard;
    vm.closeNewFriendWizard = closeNewFriendWizard;


    /**
    * @name submit
    * @desc Create a new Friend
    * @memberOf flashweb.haps.controllers.NewFriendController
    */
    function submit() {
      $rootScope.$broadcast('friend.created', {
        select: vm.data.username,
        alias: vm.data.alias,
        orig: {
          username: Authentication.getAuthenticatedAccount().username
        }
      });
    //   console.log(title, desc, location, time);
      $scope.closeThisDialog();
      //console.log('friend SUBMIT ALMOST DONE');

      Friends.create(vm.data.username, vm.data.alias).then(createFriendSuccessFn, createFriendErrorFn);
      //console.log('SUBMIT SENT');

      /**
      * @name createHapSuccessFn
      * @desc Show snackbar with success message
      */
      function createFriendSuccessFn(data, status, headers, config) {
          //console.log('SUBMIT SUCCESS');
          //Snackbar.show('Success! Friend added.');
      }


      /**
      * @name createHapErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createFriendErrorFn(data, status, headers, config) {
        //console.log(data.status);
        $rootScope.$broadcast('friend.created.error');
        if(data.status === 400){
          snackbar.create('the entered username is not valid');
        }else{
          snackbar.create('problem adding a new friend');
        }
      }
    }




    function openNewFriendWizard (source) {
      console.log('entering openNewFriendWizard()');

      vm.source = source;
      console.log(vm.source);

            var modalInstance = $modal.open({
                templateUrl: '/static/templates/friends/new-friend-wizard.html',
                controller: 'NewFriendWizardController',
                controllerAs: 'modal'
            });

      console.log('loaded');
      $scope.closeThisDialog();

            modalInstance.result
                .then(function (data) {
                    closeNewFriendWizard();
                    console.log(data);
                    vm.data = data;
                    vm.submit();
                }, function (reason) {
                    vm.reason = reason;
                });
      }

      function closeNewFriendWizard () {
            vm.reason = null;
      };


  }
})();
