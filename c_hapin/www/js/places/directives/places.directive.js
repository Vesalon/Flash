(function () {
  'use strict';

  angular
    .module('hapin.places.directives')
    .directive('places', places);

  function places() {

    var directive = {
      controller: 'PlacesController',
      controllerAs: 'hi',
      restrict: 'A',
      require: 'ngModel',
      scope: {
      //  places: '=',
        selectedPlace: '='
      },
      templateUrl: 'templates/private/places/places.html',
      // link: function (scope, element, attr) {
      //       if (scope.$last === true) {
      //           $timeout(function () {
      //               scope.$emit('ngRepeatFinished');
      //           });
      //       }
      //   }
    };

    return directive;
  }
})();
