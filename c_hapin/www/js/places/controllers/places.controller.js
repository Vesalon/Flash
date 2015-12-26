(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('PlacesController', PlacesController);

  PlacesController.$inject = ['$scope', '$mdDialog', '$mdMedia']

  function PlacesController($scope, $mdDialog, $mdMedia) {
    var hi = this;
    hi.places = [];
    hi.editPlace = editPlace;

    activate();

    function activate() {
      console.log('PlacesController.activate()');
      $scope.$watchCollection(function() {
        return $scope.places;
      }, render);
    }

    /**
     * @name render
     * @desc Renders Haps into columns of approximately equal height
     * @param {Array} current The current value of `vm.haps`
     * @param {Array} original The value of `vm.haps` before it was updated
     * @memberOf flashweb.haps.controllers.HapsController
     */
    function render(current, original) {
      if (current !== original) {
        //console.log(original);
        //  console.log(current);
        hi.places = [];
        for (var i = 0; i < current.length; ++i) {
          hi.places.push(current[i]);
          console.log('PlacesController.render: pushing=', current[i]);
        }
        console.log('PlacesController.render: hi.places.length=', hi.places.length);
      }
    }

    function editPlace(ev, place) {
      console.log('PlacesController: selected place=', place);
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
        controller: 'EditPlaceController',
        controllerAs: 'hi',
        // controller: ['$scope', 'place', function($scope, place) {
        //   $scope.place = place;
        //   console.log('inline controller: place=', $scope.place);
        // }],
        templateUrl: 'templates/private/places/editplace.html',
        // template: '',
        locals: {
          place: place,
        },
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: useFullScreen,
      })
    };

  }
})();
