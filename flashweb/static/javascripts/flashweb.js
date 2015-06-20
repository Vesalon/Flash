angular
  .module('flashweb', []);

  (function () {
    'use strict';

    angular
      .module('flashweb', [
        'flashweb.routes',
        'flashweb.authentication'
      ]);

    angular
      .module('flashweb.routes', ['ngRoute']);
  })();
