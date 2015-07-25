'use strict';

angular
  .module('hapin.layout.controllers')
  .controller('SidemenuController', SidemenuController);

SidemenuController.$inject = ['$scope'];


function SidemenuController($scope, $timeout, $ionicModal, $ionicSideMenuDelegate) {


  $scope.showMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

}
