(function() {
  'use strict';

  angular
    .module('hapin.utils', [
      'hapin.utils.controllers',
      'hapin.utils.directives',
      'hapin.utils.services',
    ]);

  angular
    .module('hapin.utils.controllers', []); //, ['checklist-model']);

  angular
    .module('hapin.utils.directives', []);

  angular
    .module('hapin.utils.services', []);


}) ();
