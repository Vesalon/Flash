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

    hi.notFound = true;
    hi.isExisting = false;

    function submit() {
      console.log('hi.alias = ', hi.alias);


      $rootScope.$broadcast('friend.created', {
        select: hi.username,
        alias: hi.alias,
        orig: {
          username: Auth.username()
        }
      });

      Friends.create(hi.username, hi.alias).then(createFriendSuccessFn, createFriendErrorFn);
      console.log('SUBMIT SENT');

      function createFriendSuccessFn(data, status, headers, config) {
          console.log('SUBMIT SUCCESS');
          //Snackbar.show('Success! Friend added.');
          $state.go('site.private.content.friends');
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
      $state.go("site.private.content.friends");
    };

    function search () {
      console.log('entered NewFriendAccountController.search');
      console.log('search value = ' + hi.searchValue);
      //first, check if this person is already my Friend
      Friends.getFriend(hi.searchValue).then(searchExistingFriendSuccessFn, searchExistingFriendErrorFn);
      //Profiles.getBySearchValue(hi.searchValue).then(searchFriendSuccessFn, searchFriendErrorFn);

      function searchExistingFriendSuccessFn(data, status, headers, config) {
        console.log('data = ' + data);
        if(data.data !== undefined){
          console.log( data);
          hi.userinfo = hi.searchValue + ' is already your friend.';
          hi.notFound = true;
        }else{
          //this person is not my friend yet. try to find matching account
          Profiles.getBySearchValue(hi.searchValue).then(searchFriendSuccessFn, searchFriendErrorFn);
        }
      }

      function searchExistingFriendErrorFn(data, status, headers, config) {
        console.log('error in searchExistingFriendErrorFn');
        $rootScope.$broadcast('friend.created.error');
        // if(data.status === 400){
        //   snackbar.create('the entered username is not valid');
        // }else{
        //   snackbar.create('problem adding a new friend');
        // }
      }

      function searchFriendSuccessFn(data, status, headers, config) {
          console.log('SEARCH SUCCESS' );
          console.log( data);
          hi.userinfo = data.data.first_name + ' ' + data.data.username + ' ' + data.data.email;
          hi.notFound = false;
          hi.username = data.data.username;
        //  console.log( hi.username);
          console.log( hi.userinfo);
      }

      function searchFriendErrorFn(data, status, headers, config) {
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
