(function () {
  'use strict';

  angular
    .module('flashweb.friends', [
      'flashweb.friends.controllers',
      'flashweb.friends.directives',
      'flashweb.friends.services',
    ]);

  angular
    .module('flashweb.friends.controllers', []);

  angular
    .module('flashweb.friends.directives', ['ngDialog']);

  angular
    .module('flashweb.friends.services', []);
})();
