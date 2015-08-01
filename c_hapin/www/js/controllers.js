
angular
  .module('hapin')
  .controller('TestCtrl', ['$scope', 'Auth', function($scope, Auth) {

    $scope.username = Auth.username();

}]);


function ViewCtrl($scope) {
    $scope.status = "Also totally works!";
}
