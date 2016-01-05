(function() {
  'use strict';

  angular
    .module('hapin.places.directives')
    .directive('place', place);

  //  place.$inject = ['$timeout'];

  function place($timeout) {

    var directive = {
      controller: 'PlaceController',
      controllerAs: 'hi',
      restrict: 'E',
      scope: {
        place: '=',
        mode: '@'
      },
      templateUrl: 'templates/private/places/place.html',

      link: function(scope, element, attrs, controller) {

        var iframe = element.find("iframe")[0];
        iframe.onload = function() {
          scope.$broadcast('iframeLoaded');
        };

        scope.$watch('place', function(place) {
          // console.log("scope.place CHANGED");
          //  console.log("place.address = ", scope.place);
          $timeout(
              function() {
                scope.map = undefined; // necessary for the iframe to reload so the spinner is removed
                scope.$apply();
              })
            .then(function() {
              console.log('place = ', place);
              if (scope.place) {
                console.log('loading map by formatted place: ', controller.formatForMap(scope.place.name, scope.place.address));
                controller.loadMap(controller.formatForMap(scope.place.name, scope.place.address));
              };

            })
        }, true);

        scope.$on('location-picker:location-picked', function() {
         console.log('directive caugth location-picker:location-picked location== ', scope.location);
          // controller.loadMap(scope.location.address);
          if (scope.location) {
            console.log('loading map by formatted location: ', controller.formatForMap(scope.location.name, scope.location.address));
            controller.loadMap(controller.formatForMap(scope.location.name, scope.location.address));
          };
        });

        // // cleanup : #12 in http://www.toptal.com/angular-js/top-18-most-common-angularjs-developer-mistakes
        // scope.$on('$destroy', controller.handleDestroyEvent());



      }
    };

    return directive;
  }
})();
