(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('GuestsController', GuestsController);

  GuestsController.$inject = ['$scope', '$state', 'Auth', 'Friends', '$rootScope', '$mdDialog', 'sharedProp'];

  function GuestsController($scope, $state, Auth, Friends, $rootScope, $mdDialog, sharedProp) {
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
        var theHap = sharedProp.getHap();
        // console.log(theHap);
        if(theHap != undefined && theHap.guestlist != undefined && theHap.guestlist.length > 0) {
          for(var i = 0; i < data.data.length; i++) {
            var add = false;
            for(var j = 0; j < theHap.guestlist.length; j++) {
              if(theHap.guestlist[j].id == data.data[i].id) {
                add = true;
                break;
              }
            }
            if(add) {
              // console.log(data.data[i].alias + " is in guestlist");
              hi.guestlist.push(data.data[i]);
            } else {
              hi.friends.push(data.data[i]);
            }
          }
        } else {
          hi.friends = data.data;
        }
      }

      function friendsErrorFn(data, status, headers, config) {
        console.log(data.error);
      }

    }

    hi.tester = function() {
      console.log(hi.guestlist);
    }

    hi.toggle = function(item, list) {
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
