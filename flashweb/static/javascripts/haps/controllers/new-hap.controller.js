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
        console.log('SUBMIT STARTED');
      $rootScope.$broadcast('hap.created', {
        title: vm.title,
        desc: vm.desc,
        location: vm.location,
        time: vm.time,
        organizer: {
          username: Authentication.getAuthenticatedAccount().username
        }
      });
    //   console.log(title, desc, location, time);
      $scope.closeThisDialog();
      console.log('SUBMIT ALMOST DONE');

      Haps.create(vm.title, vm.desc, vm.location, vm.time).then(createHapSuccessFn, createHapErrorFn);
      console.log('SUBMIT SENT');

      /**
      * @name createHapSuccessFn
      * @desc Show snackbar with success message
      */
      function createHapSuccessFn(data, status, headers, config) {
          console.log('SUBMIT SUCCESS');
          Snackbar.show('Success! Hap created.');
      }


      /**
      * @name createHapErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createHapErrorFn(data, status, headers, config) {
          console.log('SUBMIT ERROR');
          $rootScope.$broadcast('hap.created.error');
        Snackbar.error(data.error);
      }
    }
  }
})();
