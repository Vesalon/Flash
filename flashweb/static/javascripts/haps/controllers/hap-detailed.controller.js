/**
* HapsController
* @namespace flashweb.haps.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.controllers')
    .controller('HapDetailedController', HapDetailedController);

  HapDetailedController.$inject = ['$scope', '$routeParams', 'Haps', 'snackbar'];

  /**
  * @namespace HapsController
  */
  function HapDetailedController($scope, $routeParams, Haps, snackbar) {
    var vm = this;
    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf flashweb.haps.controllers.HapsController
    */
    function activate() {
      var hapId = $routeParams.hapId;
      console.log(hapId);
      Haps.getSingle(hapId).then(hapsSuccessFn, hapsErrorFn);

      /**
        * @name hapsSucessFn
        * @desc Update `haps` on viewmodel
        */
      function hapsSuccessFn(data, status, headers, config) {
        //console.log('loaded haps');
        vm.hap = data.data;
        console.log(vm.hap);
      }


      /**
        * @name hapsErrorFn
        * @desc Show error snackbar
        */
      function hapsErrorFn(data, status, headers, config) {
        //console.log('could not load haps');
        snackbar.create(data.data.error);
      }
    }
  }
})();
