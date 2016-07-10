(function() {
  'use strict';

  angular
    .module('hapin.utils.directives')
    .directive('slidingCardList', slidingCardList);

  slidingCardList.$inject = ['$rootScope', '$animate'];

  function slidingCardList($rootScope, $animate) {
    return{
      restrict: 'E',
      templateUrl: 'templates/utils/sliding-card-list.html',
      scope: {
        cardList: '@',
        type: '@'
      },
      // controller: 'SlidingCardController',
      //
      link: function(scope, element, attrs, controller) {
        // console.log('entering slideingCardList link function: element=', element);

        scope.$on('haps:list-updated', function(ev, args) {
          console.log('caught event haps:list-updated');
          scope.cardList = args.list;
          // console.log('entering slideingCardList link function: cardList=', scope.cardList);
          console.log('entering haps:list-updated link function: element=', element);

        });

        scope.$on('sliding-card:hap-swiped-left', function(ev, args) {
          // console.log('caught sliding-card:hap-swiped-left');
          var id = args.value;
          console.log('raising event sliding-card-list:hap-swiped-left for id=', id);
          // console.log('hap=', args.object);
          $rootScope.$broadcast('sliding-card-list:' + scope.type + '-swiped-left', {id: id});
          slideCardsUp(id);
        });

        scope.$on('sliding-card:hap-swiped-right', function(ev, args) {
          // console.log('caught sliding-card:hap-swiped-right');
          var id = args.value;
          console.log('rasing event sliding-card-list:hap-swiped-right for id=', id);
          // var hap = args.object;
          $rootScope.$broadcast('sliding-card-list:' + scope.type + '-swiped-right', {id: id});
          slideCardsUp(id);
        });

        function slideCardsUp(id){
          console.log('entering slideCardsUp id=', id);
          var index = -1;
          for (var i = 0; i < scope.cardList.length; ++i) {
            if (scope.cardList[i].id == id) {
              index = i;
              break;
            }
          }
          // $scope.$broadcast('haps:list-updated', {list: hi.list});
          scope.cardList.splice(index,1);
          scope.$apply();
        }


      }

    }
  };

})();
