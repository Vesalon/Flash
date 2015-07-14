/**
* NewHapWizardController
* @namespace flashweb.haps.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.controllers')
    .controller('NewHapWizardController', NewHapWizardController);

  NewHapWizardController.$inject = ['$http', '$rootScope', '$scope', '$modalInstance', 'Authentication', 'snackbar', 'Friends'];


  /**
  * @namespace NewHapWizardController
  */
  function NewHapWizardController($http, $rootScope, $scope, $modalInstance, Authentication, snackbar, Friends) {
    console.log('entered NewHapWizardController()');

    var modal = this;
    //vm.submit = submit;

    modal.steps = ['one', 'two', 'three', 'four'];
    modal.step = 0;
    modal.friends = [];
    console.log(modal.steps);
    activate();

  function activate() {
    var authenticatedAccount = Authentication.getAuthenticatedAccount();

    Friends.get(authenticatedAccount.username)
      .then(friendsSuccessFn, friendsErrorFn);

    /**
    * @name friendsSuccessFn
    * @desc Update haps array on view
    */
    function friendsSuccessFn(data, status, headers, config) {
      console.log('friends success');
      modal.friends = data.data;
    }

    /**
    * @name friendsErrorFn
    * @desc Show snackbar with error
    */
    function friendsErrorFn(data, status, headers, config) {
        console.log('friends failure');
        // Snackbar.error(data.error);
    }


  }

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
