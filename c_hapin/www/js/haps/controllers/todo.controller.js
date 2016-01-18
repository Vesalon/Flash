(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['$scope', '$state', 'Auth', 'Friends', '$rootScope', '$mdDialog'];

  function TodoController($scope, $state, Auth, Friends, $rootScope, $mdDialog) {
    var hi = this;
    hi.list = [];

    hi.add = function() {
      console.log(hi.item);
      if(hi.item) {
        hi.list.push(hi.item);
        hi.item = '';
      }
      console.log(hi.list);
    }

    hi.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) list.splice(idx, 1);
      else list.push(item);
    };

    hi.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

    function fireCancelEvent($event) {
      console.log('fired guests:cancel')
      hi.guestlist = [];
      $rootScope.$broadcast('guests:cancel');
      $mdDialog.cancel();
    };

    function fireSelectedGuestsEvent($event, place) {
      console.log('fired guests:guests-selected')
      $rootScope.$broadcast('guests:guests-selected', {
        guestlist: hi.guestlist
      });
      $mdDialog.hide();
    };

  }

})();
