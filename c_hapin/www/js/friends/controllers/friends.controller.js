'use strict';

angular
  .module('hapin.friends.controllers', [])
  .controller('FriendsController', FriendsController);

FriendsController.$inject = ['$scope', 'Auth', 'Friends'];

function FriendsController($scope, Auth, Friends) {
  console.log('entering FriendsController');
  var hi = this;
  hi.isAuthenticated = Auth.isAuthenticated();
  hi.list = [];
  activate();

  function activate() {
    if (hi.isAuthenticated) {
     Friends.get()
        .then(friendsSuccessFn, friendsErrorFn);
    }

     $scope.$on('friend.created', function (event, friend) {
       console.log('friend.created ' + friend);
       hi.list.unshift(friend);
     });

     $scope.$on('friend.created.error', function () {
       console.log('friend.created.erro!!!!');
       hi.list.shift();
     });

    function friendsSuccessFn(data, status, headers, config) {
      hi.list = data.data;
    }

    function friendsErrorFn(data, status, headers, config) {
      console.log(data.error);
    }

  }
}
