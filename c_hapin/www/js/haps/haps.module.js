'use strict';

angular
  .module('hapin.haps', [
    'hapin.haps.controllers',
    //'hapin.haps.directives',
    'hapin.haps.services',
    // 'uiGmapgoogle-maps',
    'hapin.haps.directives',
  ])
  // .config(function(uiGmapGoogleMapApiProvider) {
  //   uiGmapGoogleMapApiProvider.configure({
  //   //  key: 'THIS-IS-WHERE-YOU-PASTE-THE-MAP-API-KEY-YOU-COPIED-EARLIER',
  //     v: '3.17',
  //     libraries: 'places,geometry,visualization'
  //   });
  // });



angular
  .module('hapin.haps.controllers', ['mdPickers','scDateTime']); //, ['checklist-model']);

angular
  .module('hapin.haps.directives', []);

angular
  .module('hapin.haps.services', []);
