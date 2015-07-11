/**
* NewHapController
* @namespace flashweb.haps.controllers
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.controllers')
    .controller('NewHapController', NewHapController);

  NewHapController.$inject = ['$http', '$rootScope', '$scope', 'Authentication', 'Snackbar', 'Haps'];

  /**
  * @namespace NewHapController
  */
  function NewHapController($http, $rootScope, $scope, Authentication, Snackbar, Haps) {
    var vm = this;

    vm.submit = submit;
    includeSignature();
    vm.friendIds = [];
    activate();



    function activate() {
        $scope.$on('guestlist.created', function (event, content) {
          var guests = content.guests;
          for(var index in guests){
              vm.friendIds[index] = guests[index].id;
          }
          console.log(vm.friendIds);
        });

        $scope.$on('guestlist.created.error', function () {
            console.log('error selecting guestlist');
        });
    }

    /**
    * @name submit
    * @desc Create a new Hap
    * @memberOf flashweb.haps.controllers.NewHapController
    */
    function submit() {
    //   console.log(vm.guests);
      $rootScope.$broadcast('hap.created', {
        title: vm.title,
        desc: vm.desc,
        location: vm.location,
        time: vm.time,
        friendIds: vm.friendIds,
        organizer: {
          username: Authentication.getAuthenticatedAccount().username
        }
      });
    //   console.log(title, desc, location, time);
      $scope.closeThisDialog();
      console.log('SUBMIT ALMOST DONE');

      Haps.create(vm.title, vm.desc, vm.location, vm.time, vm.friendIds).then(createHapSuccessFn, createHapErrorFn);
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

    function includeSignature() {
      $http.get(
        '/api/v1/accounts/'
        + Authentication.getAuthenticatedAccount().username
        + '/')
          .then(function(result) {
            if(result.data.include_signature){
                vm.desc = '\n\n' + result.data.signature;
            }
          });
    }
  }
})();
