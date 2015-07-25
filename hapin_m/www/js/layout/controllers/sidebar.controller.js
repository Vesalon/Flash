angular.module('hapin.layout.controllers')
// .factory('Menu', function() {
//   return {
//     all: all,
//   }
//
//   function all() {
//       var projectString = window.localStorage['menu'];
//       if(projectString) {
//         return angular.fromJson(projectString);
//       }
//       return [];
//   }
// })

.controller('MenuCtrl', MenuCtrl);

function MenuCtrl($scope, $timeout, $ionicModal, $ionicSideMenuDelegate) {

  $scope.menu = ['settings', 'account'];

  // Called to select the given project
  $scope.selectMenuItem = function(project, index) {
    $scope.activeProject = project;
    Projects.setLastActiveIndex(index);
    $ionicSideMenuDelegate.toggleLeft(false);
  };

  $scope.showMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

}
