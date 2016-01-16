(function () {
  'use strict';

  angular
    .module('hapin.haps.directives')
    .directive('todo', todo);

  function todo() {

    var directive = {
      controller: 'TodoController',
      controllerAs: 'hi',
      restrict: 'E',
      // require: 'ngModel',
      scope: {
        guestlist: '=',
      },
      templateUrl: 'templates/private/haps/todo.html',
    };

    return directive;
  }
})();
