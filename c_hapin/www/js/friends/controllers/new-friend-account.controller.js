(function () {
  'use strict';

  angular
    .module('hapin.friends.controllers')
    .controller('NewFriendAccountController', NewFriendAccountController);

  NewFriendAccountController.$inject = ['$rootScope', '$scope', '$state', 'Auth', 'snackbar', 'Friends', 'Profiles'];

  function NewFriendAccountController($rootScope, $scope, $state, Auth, snackbar, Friends, Profiles) {
    console.log("entered NewFriendAccountController");
    var hi = this;
    hi.submit = submit;
    hi.cancel = cancel;
    hi.search = search;

    hi.status = {
      isFindOpen: true,
      isAliasOpen: false,
      isSubmitOpen: false
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
      $state.go("friends");
    };

    function search () {
      console.log('entered NewFriendAccountController.search');
      console.log('search value = ' + hi.searchValue);

      Profiles.getBySearchValue(hi.searchValue).then(createFriendSuccessFn, createFriendErrorFn);

      function createFriendSuccessFn(data, status, headers, config) {
          console.log('SEARCH SUCCESS' );
          console.log( data);
          hi.userinfo = data.data.first_name + ' ' + data.data.username + ' ' + data.data.email;
          console.log( hi.userinfo);
      }

      function createFriendErrorFn(data, status, headers, config) {
        $rootScope.$broadcast('friend.created.error');
        if(data.status === 400){
          snackbar.create('the entered username is not valid');
        }else{
          snackbar.create('problem adding a new friend');
        }
      }
    };


  }
})();
