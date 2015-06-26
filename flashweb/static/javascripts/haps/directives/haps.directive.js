/**
* Haps
* @namespace flashweb.haps.directives
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.directives')
    .directive('haps', haps);

  /**
  * @namespace Haps
  */
  function haps() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf flashweb.haps.directives.Haps
    */
    var directive = {
      controller: 'HapsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        posts: '='
      },
      templateUrl: '/static/templates/haps/haps.html'
    };

    return directive;
  }
})();
