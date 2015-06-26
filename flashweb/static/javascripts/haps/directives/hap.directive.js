/**
* Hap
* @namespace flashweb.hap.directives
*/
(function () {
  'use strict';

  angular
    .module('flashweb.hap.directives') //MIGHT BE flashweb.haps,
                                       //not flashweb.hap
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
      restrict: 'E',
      scope: {
        hap: '='
      },
      templateUrl: '/static/templates/haps/hap.html'
    };

    return directive;
  }
})();
