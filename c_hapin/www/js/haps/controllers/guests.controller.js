(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('GuestsController', GuestsController);

  GuestsController.$inject = ['$scope', '$state', 'Auth', 'Friends', '$rootScope', '$mdDialog'];

  function GuestsController($scope, $state, Auth, Friends, $rootScope, $mdDialog) {
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    hi.friends = [];
    hi.guestlist = [];
    hi.cancelFilter = cancelFilter;
    hi.showFilter = false;
    hi.clearGuestlist = clearGuestlist;
    hi.fireCancelEvent = fireCancelEvent;
    hi.fireSelectedGuestsEvent = fireSelectedGuestsEvent;

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

      // don't fire it for every toggle; DONE button in the end will fire it
      // hi.fireGuestSelectEvent(item);

    };

    hi.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

    // hi.fireGuestSelectEvent = function(guest) {
    //   // console.log(hi.guestlist);
    //   $rootScope.$broadcast('guests:guest-selected', {
    //     guestlist: hi.guestlist
    //   });
    // }

    function cancelFilter(){
      hi.showFilter = false;
      $scope.friendsquery = "";
    }

    function clearGuestlist(){
      hi.guestlist = [];
    }

    function fireCancelEvent($event) {
      console.log('fired guests:cancel')
      hi.guestlist = [];
      $rootScope.$broadcast('guests:cancel');
      $mdDialog.cancel();
    };

    function fireSelectedGuestsEvent($event, place) {
      // $scope.$emit('places:place-selected', {
      //   place: place
      // });
      console.log('fired guests:guests-selected')
      $rootScope.$broadcast('guests:guests-selected', {
        guestlist: hi.guestlist
      });
      $mdDialog.hide();
    };

  }

})();
