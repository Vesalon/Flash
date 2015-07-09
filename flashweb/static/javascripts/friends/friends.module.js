(function () {
  'use strict';

  angular
    .module('flashweb.friends', [
      'ngRoute',
      'flashweb.friends.controllers',
      'flashweb.friends.directives',
      'flashweb.friends.services',
      'ngResource',
    ]);

  angular
    .module('flashweb.friends.controllers', []);

  angular
    .module('flashweb.friends.directives', ['ngDialog']);

  angular
    .module('flashweb.friends.services', ['ngResource']);
})();
