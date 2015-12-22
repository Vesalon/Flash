(function () {
  'use strict';

  angular
    .module('hapin.places.directives')
    .directive('places', places);

  function places() {

    var directive = {
      controller: 'PlacesController',
      controllerAs: 'hi',
      restrict: 'E',
      scope: {
        places: '='
      },
      templateUrl: 'templates/private/places/places.html'
    };

    return directive;
  }
})();
