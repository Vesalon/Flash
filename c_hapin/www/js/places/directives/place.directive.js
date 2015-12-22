(function () {
  'use strict';

  angular
    .module('hapin.places.directives')
    .directive('place', place);

  function place() {

    var directive = {
      controller: 'PlaceController',
      controllerAs: 'hi',
      restrict: 'E',
      scope: {
        place: '='
      },
      templateUrl: 'templates/private/places/place.html'
    };

    return directive;
  }
})();
