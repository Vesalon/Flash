/**
* IndexController
* @namespace flashweb.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$modal', 'Authentication', 'Haps', 'snackbar'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, $modal, Authentication, Haps, snackbar) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.openNewHapWizard = openNewHapWizard;
    vm.haps = [];
    vm.friendIds = [];
    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf flashweb.layout.controllers.IndexController
    */
    function activate() {
      if (vm.isAuthenticated) {
        var authenticatedAccount = Authentication.getAuthenticatedAccount();

        Haps.get(authenticatedAccount.username)
            .then(hapsSuccessFn, hapsErrorFn);

      } else {
        // Haps.all().then(hapsSuccessFn, hapsErrorFn);
      }
      $scope.$on('hap.created', function (event, hap) {
        vm.haps.unshift(hap);
      });

      $scope.$on('hap.created.error', function () {
        vm.haps.shift();
      });


      /**
      * @name hapsSuccessFn
      * @desc Update haps array on view
      */
      function hapsSuccessFn(data, status, headers, config) {
        vm.haps = data.data;
        for(var index in vm.haps){
          vm.haps[index].isHost = vm.haps[index].organizer.username === authenticatedAccount.username;
        }
      }


      /**
      * @name hapsErrorFn
      * @desc Show snackbar with error
      */
      function hapsErrorFn(data, status, headers, config) {
        snackbar.create('there was a problem getting your haps')
      }
    }

    function login() {
        window.location = '/login';
    }

    function register() {
        window.location = '/register';
    }

    function submit() {
      for(var index in vm.guests){
          vm.friendIds[index] = vm.guests[index].id;
      }

      $scope.$broadcast('hap.created', {
        title: vm.title,
        desc: vm.desc,
        location: vm.location,
        time: vm.time,
        friendIds: vm.friendIds,
        organizer: {
          username: Authentication.getAuthenticatedAccount().username
        }
      });

      Haps.create(vm.title, vm.desc, vm.location, vm.time, vm.friendIds)
        .then(createHapSuccessFn, createHapErrorFn);

        function createHapSuccessFn(data, status, headers, config) {
            //console.log('SUBMIT SUCCESS');
            snackbar.create('Success! Hap created.');
        }

        function createHapErrorFn(data, status, headers, config) {
            //console.log('SUBMIT ERROR');
            $rootScope.$broadcast('hap.created.error');
          snackbar.create(data.error);
        }
    }

    function openNewHapWizard() {
      console.log('something or other');
      var modalInstance = $modal.open({
          templateUrl: '/static/templates/haps/new-hap-wizard.html',
          controller: 'NewHapWizardController',
          controllerAs: 'modal'
      });

      modalInstance.result
          .then(function (data) {
              closeNewHapWizard();
              console.log(data);
              vm.title = data.title;
              vm.desc = data.desc;
              vm.location = data.location;
              vm.time = data.time;
              vm.guests = data.guests;
              submit();
          }, function (reason) {
              vm.reason = reason;
          });
    }

    function closeNewHapWizard () {
          vm.reason = null;
    }
  }
})();
