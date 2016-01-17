(function() {
  'use strict';

  angular
    .module('hapin.utils.directives')
    .directive('slidingCard', slidingCard);

  slidingCard.$inject = ['$rootScope', '$animate'];

  function slidingCard($rootScope, $animate) {
    return{
      restrict: 'E',
      templateUrl: 'templates/utils/sliding-card.html',
      scope: {
        headline: '@',
        subhead: '@',
        leftbuttontext: '@',
        rightbuttontext: '@',
      },
      controller: 'SlidingCardController',
      //
      // link: function(scope, element, attrs, controller) {
      //
      //   var iframe = element.find("iframe")[0];
      //
      //   iframe.onload = function() {
      //     $rootScope.$broadcast('map-presenter:map-loaded');
      //   };
      //
      //   // this will exec every time a character is typed in location-picker
      //   // which in turn will call loadMap() on every character - trying to fix this
      //   scope.$watch('location', function(location) {
      //     // console.log("scope.place CHANGED");
      //     console.log("location = ", scope.location);
      //     $timeout(
      //         function() {
      //           scope.map = undefined; // necessary for the iframe to reload so the spinner is removed
      //           scope.$apply();
      //           console.log('map is set to undefined');
      //         })
      //       .then(function() {
      //       //  console.log('place = ', place);
      //         if (scope.location) {
      //           console.log('$watch: loading map by formatted place: ', controller.formatForMap(scope.location.name, scope.location.address));
      //           controller.loadMap(controller.formatForMap(scope.location.name, scope.location.address));
      //           // console.log('loading map for location', scope.location);
      //           // controller.loadMap(scope.location);
      //         };
      //
      //       })
      //   }, true);
      //
      //
      //
      // }


    };
  };

  angular
    .module('hapin.utils.directives')
    .controller('SlidingCardController', SlidingCardController);

    SlidingCardController.$inject = ['$scope', 'Auth', 'Places', '$sce', '$timeout'];

    function SlidingCardController($scope, Auth, Places, $sce, $timeout) {
      $scope.myValue=false;

      $scope.onSwipeLeft = function(ev) {
        console.log('You swiped LEFT');
        // $scope.myValue=true;
          // alert('You swiped LEFT');
        };

        $scope.onSwipeRight = function(ev) {
          console.log('You swiped RIGHT');
          // $scope.myValue=true;
            // alert('You swiped RIGHT');
          };

    }


})();
