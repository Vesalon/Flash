'use strict';

angular
  .module('hapin.haps.controllers')
  .controller('HapsController', HapsController);

HapsController.$inject = ['$scope'];

function HapsController($scope) {
  var hi = this;
  hi.col = [];
  activate();

  function activate() {
    $scope.$watchCollection(function () { return $scope.haps; }, render);
  }

  function render(current, original) {
    if (current !== original) {
      //console.log(original);
    //  console.log(current);
      hi.col = [];
      for (var i = 0; i < current.length; ++i) {
        hi.col.push(current[i]);
      }
      //console.log(hi.col);
    }
  }
}
