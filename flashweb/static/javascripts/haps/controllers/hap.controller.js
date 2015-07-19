/**
* HapsController
* @namespace flashweb.haps.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.controllers')
    .controller('HapController', HapController);

  HapController.$inject = ['$scope', 'Authentication', 'Haps'];

  /**
  * @namespace HapsController
  */
  function HapController($scope, Authentication, Haps) {
    var vm = this;
    vm.editHap = editHap;
    vm.submit = submit;
    vm.going;
    vm.comment='';

    vm.steps = ['status', 'comment', 'done'];
    vm.step = 0;
    vm.currentStep = currentStep;
    vm.nextStep = nextStep;

    function currentStep() {
      return vm.steps[vm.step];
    }

    function nextStep() {
      vm.step += 1;
    }

    function submit() {
      giveanswer(vm.going)
    }

    function giveanswer(going) {
      if(going){
        acceptInvite()
      } else {
        declineInvite()
      }
    }

    function acceptInvite() {
      var hapId = $scope.hap.id;
      var status = 1;
      var comment = vm.comment;
      Haps.accept(
        hapId,
        status,
        comment
      );
    }

    function declineInvite() {
      var hapId = $scope.hap.id;
      var status = 2;
      var comment = vm.comment;
      Haps.accept(
        hapId,
        status,
        comment
      );
    }

    function editHap() {
      console.log('edit hap');
    }
  }
})();
