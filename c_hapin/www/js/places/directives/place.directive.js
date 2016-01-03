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

        // scope.$on('new-hap:place-deselected', function() {
        //   // console.log('caught new-hap:place-deselected');
        //   scope.map.url = "";
        // });

        // scope.$on('places:place-selected', function() {
        //   $timeout(function() {
        //     controller.loadMap(scope.place.address);
        //   })
        // });


        // myIframe.addEventListener('load', function () { console.log(this.contentWindow.location); });

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

        // scope.$watch('address', function(address) {
        //    console.log("ADDRESS changed");
        //    console.log("place.address = ", scope.place);
        //   if (scope.place && scope.place.address && scope.place.address.length) {
        //     // console.log("there is a vailid address");
        //     controller.loadMap(scope.place.address);
        //   };
        // }, true);

        scope.$watch('place', function(place) {
           console.log("scope.place CHANGED");
           console.log("place.address = ", scope.place);
          scope.map = undefined; // necessary for the iframe to reload and spinner to hide
           if (scope.place && scope.place.address && scope.place.address.length) {
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
