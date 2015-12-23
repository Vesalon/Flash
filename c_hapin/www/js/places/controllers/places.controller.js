(function () {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('PlacesController', PlacesController);

  PlacesController.$inject = ['$scope'];

  function PlacesController($scope) {
    var hi = this;
    hi.places = [];
    activate();

    function activate() {
      console.log('PlacesController.activate()');
      $scope.$watchCollection(function () { return $scope.places; }, render);
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
  }
})();
