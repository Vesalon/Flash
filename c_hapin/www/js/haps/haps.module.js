'use strict';

angular
  .module('hapin.haps', [
    'hapin.haps.controllers',
    //'hapin.haps.directives',
    'hapin.haps.services',
    'uiGmapgoogle-maps',
  ])
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
    //  key: 'THIS-IS-WHERE-YOU-PASTE-THE-MAP-API-KEY-YOU-COPIED-EARLIER',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  });



angular
  .module('hapin.haps.controllers', ['scDateTime']); //, ['checklist-model']);

// angular
//   .module('hapin.haps.directives', ['ngDialog']);

angular
  .module('hapin.haps.services', []);
