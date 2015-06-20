(function () {
  'use strict';

  angular
    .module('flashweb.authentication', [
      'flashweb.authentication.controllers',
      'flashweb.authentication.services'
    ]);

  angular
    .module('flashweb.authentication.controllers', []);

  angular
    .module('flashweb.authentication.services', ['ngCookies']);
})();
