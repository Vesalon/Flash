/**
* Hap
* @namespace flashweb.hap.directives
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.directives')
    .directive('hap', hap);

  /**
  * @namespace hap
  */
  function hap() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf flashweb.hap.directives.Hap
    */
    var directive = {
      controller: 'HapController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        hap: '='
      },
      templateUrl: '/static/templates/haps/hap.html'
    };

    return directive;
  }
})();
