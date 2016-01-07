(function () {
  'use strict';

  angular
    .module('hapin.haps.directives')
    .directive('guests', guests);

  function guests() {

    var directive = {
      controller: 'GuestsController',
      controllerAs: 'hi',
      restrict: 'E',
      // require: 'ngModel',
      scope: {
        guestlist: '=',
      },
      templateUrl: 'templates/private/haps/guests.html',
    };

    return directive;
  }
})();
