(function () {
  'use strict';

  angular
    .module('hapin.friends.controllers')
    .controller('NewFriendAccountController', NewFriendAccountController);

  NewFriendAccountController.$inject = ['$rootScope', '$scope', 'Auth', 'snackbar', 'Friends'];

  function NewFriendAccountController($rootScope, $scope, Auth, snackbar, Friends) {
    console.log("entered NewFriendAccountController");
    var hi = this;
    var findIsOpen, aliasIsOpen, submitIsOpen;
    hi.submit = submit;
    hi.cancel = cancel;
    // hi.gotoAlias = gotoAlias;
    // hi.gotoSubmit = gotoSubmit;
    // hi.gotoFind = gotoFind;

    hi.status = {
      isFindOpen: {
        value: true,
        writable: true
      },
      isAliasOpen: {
        value: false,
        writable: true
      },
      isSubmitOpen: {
        value: false,
        writable: true
      }
    };

    function submit() {
      $rootScope.$broadcast('friend.created', {
        select: hi.data.username,
        alias: hi.data.alias,
        orig: {
          username: Auth.username()
        }
      });

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

      function cancel () {
            console.log('entered NewFriendAccountController.cancel');
      };

      // function gotoAlias () {
      //       console.log('entered NewFriendAccountController.gotoAlias');
      //       status.isAliasOpen = true;
      // };
      //
      // function gotoSubmit () {
      //       console.log('entered NewFriendAccountController.gotoSubmit');
      //       status.isSubmitOpen = true;
      // };
      //
      // function gotoFind () {
      //       console.log('entered NewFriendAccountController.gotoFind');
      //       status.isFindOpen = true;
      // };


  }
})();
