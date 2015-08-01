'use strict';

angular
  .module('hapin.haps', [
    'hapin.haps.controllers',
    //'hapin.haps.directives',
    'hapin.haps.services',
  ]);

angular
  .module('hapin.haps.controllers', []); //, ['checklist-model']);

// angular
//   .module('hapin.haps.directives', ['ngDialog']);

angular
  .module('hapin.haps.services', []);
