'use strict';

  angular
    .module('hapin.auth', [
      'hapin.auth.controllers',
      'hapin.auth.services'
    ]);

  angular
    .module('hapin.auth.controllers', []);

  angular
    .module('hapin.auth.services', ['ngCookies']);
