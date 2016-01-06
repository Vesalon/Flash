(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('NewPlaceController', NewPlaceController);

  NewPlaceController.$inject = ['$scope', 'newPlace', '$mdDialog'];

  function NewPlaceController($scope, newPlace, $mdDialog) {

   $scope.newPlace = newPlace;


    $scope.done = function() {
      // $scope.place = angular.copy(placeCopy);
       console.log('done: $scope.newPlace=',$scope.newPlace );
       $mdDialog.hide($scope.newPlace);
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.add = function() {
      // $scope.place = angular.copy(placeCopy);
       console.log('adding: $scope.newPlace=',$scope.newPlace );

       $rootScope.$broadcast('place.created', {
         select: hi.username,
         alias: hi.alias,
         orig: {
           username: Auth.username()
         }
       });

       Place.create($scope.newPlace.nickname, $scope.newPlace.name, $scope.newPlace.address, null,null)
        .then(createFriendSuccessFn, createFriendErrorFn);

    };

  }



})();
