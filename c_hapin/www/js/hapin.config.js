'use strict';

angular
  .module('hapin.config', [])
  .config(config);

config.$inject = ['$locationProvider', '$compileProvider', '$mdIconProvider', '$mdThemingProvider'];

/**
 * @name config
 * @desc Enable HTML5 routing
 */
function config($locationProvider, $compileProvider, $mdIconProvider, $mdThemingProvider) {
  //   //$locationProvider.html5Mode(true);
  //   //  $locationProvider.hashPrefix('!');
  // // http://stackoverflow.com/questions/19974097/angularjs-and-phonegap-location-path-causes-subsequent-tempateurl-lookup-to-fa
  // // http://stackoverflow.com/questions/16677528/location-switching-between-html5-and-hashbang-mode-link-rewriting
  //
  //   var h5m = (typeof html5Mode !== 'undefined') ? html5Mode : true;
  //   var prefix = (h5m) ? '!' : '';
  //   $locationProvider.html5Mode(h5m).hashPrefix(prefix);

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);


  // uiGmapGoogleMapApiProvider.configure({
  //   //  key: 'THIS-IS-WHERE-YOU-PASTE-THE-MAP-API-KEY-YOU-COPIED-EARLIER',
  //   v: '3.17',
  //   libraries: 'places,geometry,visualization'
  // });

  $mdThemingProvider.theme('default')
    // .dark();
    .primaryPalette('grey', {
      'default': '800'
    })
    .accentPalette('deep-purple', {
      'default': 'A200'
    })
    .warnPalette('yellow')
    .backgroundPalette('grey', {
      // 'default': '50'
    });

    $mdThemingProvider.theme('altTheme')
    .primaryPalette('cyan', {
      'default': 'A400'
    }) // specify primary color, all
                            // other color intentions will be inherited
                            // from default

  $mdIconProvider
  // .defaultFontSet( 'fontawesome' )
  //  .defaultIconSet('img/icons.svg')       // Register a default set of SVG icons
    .iconSet('action', 'img/icons/material-design/action-icons.svg', 24)
    .iconSet('alert', 'img/icons/material-design/alert-icons.svg', 24)
    .iconSet('av', 'img/icons/material-design/av-icons.svg', 24)
    .iconSet('communication', 'img/icons/material-design/communication-icons.svg', 24)
    .iconSet('content', 'img/icons/material-design/content-icons.svg', 24)
    .iconSet('device', 'img/icons/material-design/device-icons.svg', 24)
    .iconSet('editor', 'img/icons/material-design/editor-icons.svg', 24)
    .iconSet('file', 'img/icons/material-design/file-icons.svg', 24)
    .iconSet('hardware', 'img/icons/material-design/hardware-icons.svg', 24)
    .iconSet('icons', 'img/icons/material-design/icons-icons.svg', 24)
    .iconSet('image', 'img/icons/material-design/image-icons.svg', 24)
    .iconSet('maps', 'img/icons/material-design/maps-icons.svg', 24)
    .iconSet('navigation', 'img/icons/material-design/navigation-icons.svg', 24)
    .iconSet('notification', 'img/icons/material-design/notification-icons.svg', 24)
    .iconSet('social', 'img/icons/material-design/social-icons.svg', 24)
    .iconSet('toggle', 'img/icons/material-design/toggle-icons.svg', 24)


}
