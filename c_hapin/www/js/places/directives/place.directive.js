(function() {
  'use strict';

  angular
    .module('hapin.places.directives')
    .directive('place', place);

  //  place.$inject = ['$timeout'];

  function place() {

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

        element.find("iframe")[0].onload = function() {
          // console.log('directive: iframe loaded');
          scope["onIframeLoaded"]();
        };

        // element.bind("ready", function(){
        //         controller.loadMap();
        //       });

        // scope.$apply(function() {
        //   scope.$eval(controller.loadMap());
        // });

        // $timeout(function() {
        //   console.log('PlaceController: about to get the map');
        //   console.log('PlaceController: starting to get the map');
        //   controller.loadMap()
        // }, 2000);



        scope.$watch('address', function(address) {
          // console.log("ADDRESS changed");
          // console.log("place.address = ", scope.place);
          if (scope.place && scope.place.address && scope.place.address.length) {
            // console.log("there is a vailid address");
            controller.loadMap(scope.place.address);
          };
        }, true);

        scope.$on('location-picker:location-picked', function() {
          // console.log('directive caugth location-picker:location-picked location== ', scope.location);
          controller.loadMap(scope.location.address);
        });

        // scope.$applyAsync(function() {
        //   console.log('$scope.$applyAsync');
        //   controller.loadMap();
        // });

      }
    };

    return directive;
  }
})();