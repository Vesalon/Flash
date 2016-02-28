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
        object: '@',
        type: '@',
        value: '@',
        headline: '@',
        subhead: '@',
        leftbuttontext: '@',
        rightbuttontext: '@',
      },
      // controller: 'SlidingCardController',
      //
      link: function(scope, element, attrs, controller) {

        var card = element.find('md-card')[0];

        scope.onSwipeLeft = function(ev) {
          console.log('You swiped LEFT for value=', scope.value);
          // scope.moveDir='move-left'; // goes with ng-class="moveDir"  in the html
          $animate.addClass(card, 'move-left')
          .then(function(){
              $rootScope.$broadcast('sliding-card:' + scope.type + '-swiped-left', {
                value: scope.value,
                object: scope.object
              });
              console.log('after card=', card);
            }
          )
        };

        scope.onSwipeRight = function(ev) {
          console.log('You swiped right for value=', scope.value);
          // scope.moveDir='move-left'; // goes with ng-class="moveDir"  in the html
          $animate.addClass(card, 'move-right')
          .then(function(){
              $rootScope.$broadcast('sliding-card:' + scope.type + '-swiped-right', {
                value: scope.value,
                object: scope.object
              });
              console.log('after card=', card);
            }
          )
        };

      }

    }
  };

  // angular
  //   .module('hapin.utils.directives')
  //   .controller('SlidingCardController', SlidingCardController);
  //
  //   SlidingCardController.$inject = ['$scope', '$rootScope', '$animate', '$element'];
  //
  //   function SlidingCardController(scope, $rootScope, $animate, $element) {
  //
  //     // scope.onSwipeLeft = function(ev) {
  //     //   console.log('You swiped LEFT for value=', scope.value);
  //     //   //scope.moveDir='move-left';
  //     //   $animate.addClass($element, 'move-left').then(
  //     //   $rootScope.$broadcast('sliding-card:' + scope.type + '-swiped-left', {
  //     //     value: scope.value,
  //     //     object: scope.object
  //     //   })
  //     //   );
  //     // };
  //
  //       // scope.onSwipeRight = function(ev) {
  //       //   console.log('You swiped RIGHT for value=', scope.value);
  //       //   scope.moveDir='move-right';
  //       //   $rootScope.$broadcast('sliding-card:' + scope.type + '-swiped-right', {
  //       //     value: scope.value,
  //       //     object: scope.object
  //       //   })
  //       // };
  //
  //   }


})();
