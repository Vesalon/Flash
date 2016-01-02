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
          console.log("ADDRESS changed");
          if (address && address.length)
            console.log("there is a vailid address");
            controller.loadMap()
        }, true);

        // scope.$applyAsync(function() {
        //   console.log('$scope.$applyAsync');
        //   controller.loadMap();
        // });

      }
    };

    return directive;
  }
})();
