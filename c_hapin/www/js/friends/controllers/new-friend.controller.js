(function () {
  'use strict';

  angular
    .module('hapin.friends.controllers')
    .controller('NewFriendController', NewFriendController);

  NewFriendController.$inject = ['$http', '$rootScope', '$scope', '$modal', 'Auth', 'snackbar', 'Friends'];

  function NewFriendController($http, $rootScope, $scope, $modal, Auth, snackbar, Friends) {
    console.log("entered NewFriendController");
    var hi = this;
    hi.submit = submit;
    hi.openNewFriendWizard = openNewFriendWizard;
    hi.closeNewFriendWizard = closeNewFriendWizard;

    function submit() {
      $rootScope.$broadcast('friend.created', {
        select: hi.data.username,
        alias: hi.data.alias,
        orig: {
          username: Auth.username()
        }
      });
    //   console.log(title, desc, location, time);
      $scope.closeThisDialog();
      //console.log('friend SUBMIT ALMOST DONE');
      Friends.create(hi.data.username, hi.data.alias).then(createFriendSuccessFn, createFriendErrorFn);
      //console.log('SUBMIT SENT');

      function createFriendSuccessFn(data, status, headers, config) {
          console.log('SUBMIT SUCCESS');
          //Snackbar.show('Success! Friend added.');
      }

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
      hi.source = source;
      console.log(hi.source);

      var modalInstance = $modal.open({
          templateUrl: '/www/templates/friends/new-friend-wizard.html',
          controller: 'NewFriendWizardController',
          controllerAs: 'modal'
      });

      console.log('loaded');
      $scope.closeThisDialog();

      modalInstance.result
          .then(function (data) {
              closeNewFriendWizard();
              console.log(data);
              hi.data = data;
              hi.submit();
          }, function (reason) {
              hi.reason = reason;
          });
      }

      function closeNewFriendWizard () {
            hi.reason = null;
      };

  }
})();
