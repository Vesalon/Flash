(function () {
  'use strict';

  angular
    .module('flashweb.haps', [
      'fashweb.haps.controllers',
      'flashweb.haps.directives',
      'flashweb.haps.services'
    ]);

  angular
    .module('flashweb.haps.controllers', []);

  angular
    .module('flashweb.haps.directives', ['ngDialog']);

  angular
    .module('flashweb.haps.services', []);
})();
