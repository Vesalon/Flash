(function(){
  'use strict';

  angular
    .module('hapin.places', [
      'hapin.places.controllers',
      //'hapin.haps.directives',
      'hapin.places.services',
      //'uiGmapgoogle-maps',
    ])
    // .config(function(uiGmapGoogleMapApiProvider) {
    //   uiGmapGoogleMapApiProvider.configure({
    //   //  key: 'THIS-IS-WHERE-YOU-PASTE-THE-MAP-API-KEY-YOU-COPIED-EARLIER',
    //     v: '3.17',
    //     libraries: 'places,geometry,visualization'
    //   });
    // });



  angular
    .module('hapin.places.controllers', []); //, ['checklist-model']);

  // angular
  //   .module('hapin.haps.directives', ['ngDialog']);

  angular
    .module('hapin.places.services', []);

})();
