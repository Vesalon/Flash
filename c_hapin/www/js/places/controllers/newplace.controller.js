(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('NewPlaceController', NewPlaceController);

  NewPlaceController.$inject = ['$scope', 'newPlace', '$mdDialog', '$rootScope', 'Auth', 'Places'];

  function NewPlaceController($scope, newPlace, $mdDialog, $rootScope, Auth, Places) {

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
         nickname: $scope.newPlace.nickname,
         name: $scope.newPlace.name,
         address: $scope.newPlace.address,
         orig: {
           username: Auth.username()
         }
       });

       Places.create($scope.newPlace.nickname, $scope.newPlace.name, $scope.newPlace.address, null,null).then(createPlaceSuccessFn, createPlaceSuccessFn);

       function createPlaceSuccessFn(data, status, headers, config) {
           console.log('SUBMIT SUCCESS');
           //Snackbar.show('Success! Friend added.');
          //  $state.go('site.private.content.friends');
       }

       function createPlaceSuccessFn(data, status, headers, config) {
         //console.log(data.status);
         $rootScope.$broadcast('friend.created.error');
        //  if(data.status === 400){
        //    snackbar.create('the entered username is not valid');
        //  }else{
        //    snackbar.create('problem adding a new friend');
        //  }
       }
    };

  }



})();
