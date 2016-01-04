(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('NewPlaceController', NewPlaceController);

  NewPlaceController.$inject = ['$scope', 'newPlace', '$mdDialog'];

  function NewPlaceController($scope, newPlace, $mdDialog) {

   $scope.newPlace = newPlace;


    $scope.save = function() {
      // $scope.place = angular.copy(placeCopy);
       console.log('save: $scope.newPlace=',$scope.newPlace );
       $mdDialog.hide($scope.newPlace);
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };



  }



})();
