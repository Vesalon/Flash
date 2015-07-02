/**
* HapsController
* @namespace flashweb.haps.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.controllers')
    .controller('HapsController', HapsController);

  HapsController.$inject = ['$scope'];

  /**
  * @namespace HapsController
  */
  function HapsController($scope) {
    var vm = this;

    vm.col = [];
    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf flashweb.haps.controllers.HapsController
    */
    function activate() {
      $scope.$watchCollection(function () { return $scope.haps; }, render);
    //   $scope.$watch(function () { return $(window).width(); }, render);
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
        console.log(original);
        console.log(current);
        vm.col = [];
        for (var i = 0; i < current.length; ++i) {
          vm.col.push(current[i]);
        }
        console.log(vm.col);
      }
    }
  }
})();
