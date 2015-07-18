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
    vm.acceptInvite = acceptInvite;
    vm.declineInvite = declineInvite;
    vm.editHap = editHap;

    function acceptInvite() {
      var hapId = $scope.hap.id;
      var status = 1;
      var comment = '';
      Haps.accept(
        hapId,
        status,
        comment
      );
    }

    function declineInvite() {
      console.log('TESTING DECLINE');
    }

    function editHap() {
      console.log('edit hap');
    }
  }
})();
