// /**
// * ProfileController
// * @namespace flashweb.profiles.controllers
// */
// (function () {
//   'use strict';
//
//   angular
//     .module('flashweb.profiles.controllers')
//     .controller('ProfileController', ProfileController);
//
//   ProfileController.$inject = ['$location', '$routeParams', 'Haps', 'Profile', 'snackbar'];
//
//   /**
//   * @namespace ProfileController
//   */
//   function ProfileController($location, $routeParams, Haps, Profile, snackbar) {
//     var vm = this;
//
//     vm.profile = undefined;
//     vm.haps = [];
//
//     activate();
//
//     /**
//     * @name activate
//     * @desc Actions to be performed when this controller is instantiated
//     * @memberOf flashweb.profiles.controllers.ProfileController
//     */
//     function activate() {
//       var username = $routeParams.username.substr(1);
//
//       Profile.get(username).then(profileSuccessFn, profileErrorFn);
//       Haps.get(username).then(hapsSuccessFn, hapsErrorFn);
//
//       /**
//       * @name profileSuccessProfile
//       * @desc Update `profile` on viewmodel
//       */
//       function profileSuccessFn(data, status, headers, config) {
//         vm.profile = data.data;
//       }
//
//
//       /**
//       * @name profileErrorFn
//       * @desc Redirect to index and show error Snackbar
//       */
//       function profileErrorFn(data, status, headers, config) {
//         $location.url('/');
//         snackbar.create('That user does not exist.');
//       }
//
//
//       /**
//         * @name hapsSucessFn
//         * @desc Update `haps` on viewmodel
//         */
//       function hapsSuccessFn(data, status, headers, config) {
//         //console.log('loaded haps');
//         vm.haps = data.data;
//       }
//
//
//       /**
//         * @name hapsErrorFn
//         * @desc Show error snackbar
//         */
//       function hapsErrorFn(data, status, headers, config) {
//         //console.log('could not load haps');
//         snackbar.create(data.data.error);
//       }
//     }
//   }
// })();
