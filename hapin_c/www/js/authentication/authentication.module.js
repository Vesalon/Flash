(function () {
  'use strict';

  angular
    .module('hapin.authentication', [
      'hapin.authentication.controllers',
      'hapin.authentication.services'
    ]);

  angular
    .module('hapin.authentication.controllers', []);

  angular
    .module('hapin.authentication.services', ['ngCookies']);
})();
