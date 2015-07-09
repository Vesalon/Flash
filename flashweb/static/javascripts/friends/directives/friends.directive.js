/**
* Friends
* @namespace flashweb.friends.directives
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.directives')
    .directive('friends', friends);

  /**
  * @namespace Friends
  */
  function friends() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf flashweb.friends.directives.Friends
    */
    var directive = {
      controller: 'FriendsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        friends: '='
      },
      templateUrl: '/static/templates/friends/friends.html'
    };

    return directive;
  }
})();
