(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('GuestsController', GuestsController);

  GuestsController.$inject = ['$scope', '$state', 'Auth', 'Friends', '$rootScope'];

  function GuestsController($scope, $state, Auth, Friends, $rootScope) {
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    hi.friends = [];
    hi.guestlist = [];

    activate();

    function activate() {

      if (hi.isAuthenticated) {
        Friends.get()
          .then(friendsSuccessFn, friendsErrorFn);
      }

      function friendsSuccessFn(data, status, headers, config) {
        hi.friends = data.data;
      }

      function friendsErrorFn(data, status, headers, config) {
        console.log(data.error);
      }

    }

    hi.tester = function() {
      console.log(hi.guestlist);
    }

    hi.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) list.splice(idx, 1);
      else list.push(item);

      hi.fireGuestSelectEvent(item);

    };

    hi.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

    hi.fireGuestSelectEvent = function(guest) {
      // console.log(hi.guestlist);
      $rootScope.$broadcast('guests:guest-selected', {
        guestlist: hi.guestlist
      });
    }

  }

})();
