'use strict';

angular
  .module('hapin.config', [])
  .config(config);

config.$inject = ['$locationProvider'];

/**
* @name config
* @desc Enable HTML5 routing
*/
function config($locationProvider) {
  //$locationProvider.html5Mode(true);
  //  $locationProvider.hashPrefix('!');

// http://stackoverflow.com/questions/19974097/angularjs-and-phonegap-location-path-causes-subsequent-tempateurl-lookup-to-fa
// http://stackoverflow.com/questions/16677528/location-switching-between-html5-and-hashbang-mode-link-rewriting
  var h5m = (typeof html5Mode !== 'undefined') ? html5Mode : true;
  var prefix = (h5m) ? '!' : '';
  $locationProvider.html5Mode(h5m).hashPrefix(prefix);
}
