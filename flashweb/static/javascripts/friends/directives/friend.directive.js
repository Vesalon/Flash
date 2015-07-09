/**
* Friend
* @namespace flashweb.friends.directives
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.directives')
    .directive('friend', friend);

  /**
  * @namespace Friend
  */
  function friend() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf flashweb.friends.directives.Friend
    */
    var directive = {
      restrict: 'E',
      scope: {
        friend: '='
      },
      templateUrl: '/static/templates/friends/friend.html'
    };

    return directive;
  }
})();
