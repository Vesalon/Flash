(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('PlacesDialogController', PlacesDialogController);

  PlacesDialogController.$inject = ['$scope', '$mdDialog', 'Places'];

  function PlacesDialogController($scope, $mdDialog, Places) {
  var  hi = this;
  //  $scope.place = place;
  //  hi.placesList = [];
  // $scope.mode = 'edit';
  //  console.log('editedPlace=',$scope.editedPlace );
  //console.log('mode=',$scope.mode );

  // if (hi.isAuthenticated) {
  //  Places.get()
  //     .then(placesSuccessFn, placesErrorFn);
  // }
  //
  //  $scope.$on('place.created', function (event, place) {
  //    console.log('place.created ' + place);
  //    hi.placesList.unshift(place);
  //  });
  //
  //  $scope.$on('place.created.error', function () {
  //    console.log('place.created.erro!!!!');
  //    hi.placesList.shift();
  //  });
  //
  // function placesSuccessFn(data, status, headers, config) {
  //   hi.placesList = data.data;
  // }
  //
  // function placesErrorFn(data, status, headers, config) {
  //   console.log(data.error);
  // }

    // $scope.save = function() {
    //   // $scope.place = angular.copy(placeCopy);
    //   // console.log('save: $scope.place=',$scope.place );
    //    $mdDialog.hide();
    // };
    //
    // $scope.cancel = function() {
    //   $mdDialog.cancel();
    // };

  }



})();
