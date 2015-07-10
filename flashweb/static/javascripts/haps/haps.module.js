(function () {
  'use strict';

  angular
    .module('flashweb.haps', [
      'flashweb.haps.controllers',
      'flashweb.haps.directives',
      'flashweb.haps.services',
    ]);

  angular
    .module('flashweb.haps.controllers', ['checklist-model']);

  angular
    .module('flashweb.haps.directives', ['ngDialog']);

  angular
    .module('flashweb.haps.services', []);
})();
