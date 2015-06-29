/**
* NewHapController
* @namespace flashweb.haps.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.controllers')
    .controller('NewHapController', NewHapController);

  NewHapController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'Haps'];

  /**
  * @namespace NewHapController
  */
  function NewHapController($rootScope, $scope, Authentication, Snackbar, Haps) {
    var vm = this;

    vm.submit = submit;

    /**
    * @name submit
    * @desc Create a new Hap
    * @memberOf flashweb.haps.controllers.NewHapController
    */
    function submit() {
      $rootScope.$broadcast('hap.created', {
        title: vm.title,
        desc: vm.desc,
        location: vm.location,
        time: vm.time,
        author: {
          username: Authentication.getAuthenticatedAccount().username
        }
      });

      $scope.closeThisDialog();

      Haps.create(vm.title, vm.desc, vm.location, vm.time).then(createHapSuccessFn, createHapErrorFn);


      /**
      * @name createHapSuccessFn
      * @desc Show snackbar with success message
      */
      function createHapSuccessFn(data, status, headers, config) {
        Snackbar.show('Success! Hap created.');
      }


      /**
      * @name createHapErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createHapErrorFn(data, status, headers, config) {
        $rootScope.$broadcast('hap.created.error');
        Snackbar.error(data.error);
      }
    }
  }
})();
