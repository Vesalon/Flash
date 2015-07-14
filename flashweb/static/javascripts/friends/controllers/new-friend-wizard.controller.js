/**
* NewFriendWizardController
* @namespace flashweb.friends.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.controllers')
    .controller('NewFriendWizardController', NewFriendWizardController);

  NewFriendWizardController.$inject = ['$http', '$rootScope', '$scope', '$modalInstance', 'Authentication', 'snackbar', 'Friends'];


  /**
  * @namespace NewFriendWizardController
  */
  function NewFriendWizardController($http, $rootScope, $scope, $modalInstance, Authentication, snackbar, Friends) {
    console.log('entered NewFriendWizardController()');

    var modal = this;
    //vm.submit = submit;

    modal.steps = ['one', 'two'];
    modal.step = 0;
    console.log(modal.steps);
  //  modal.wizard = {tacos: 2};

    modal.isFirstStep = function () {
        return modal.step === 0;
    };

    modal.isLastStep = function () {
        return modal.step === (modal.steps.length - 1);
    };

    modal.isCurrentStep = function (step) {
        return modal.step === step;
    };

    modal.setCurrentStep = function (step) {
        modal.step = step;
    };

    modal.getCurrentStep = function () {
        return modal.steps[modal.step];
    };

    modal.getNextLabel = function () {
        return (modal.isLastStep()) ? 'Submit' : 'Next';
    };

    modal.handlePrevious = function () {
        modal.step -= (modal.isFirstStep()) ? 0 : 1;
    };

    modal.handleNext = function () {
        if (modal.isLastStep()) {
            $modalInstance.close(modal.wizard);
        } else {
            modal.step += 1;
        }
    };

    modal.dismiss = function(reason) {
        $modalInstance.dismiss(reason);
    };
  }

})();
