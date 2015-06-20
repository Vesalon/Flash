angular
  .module('flashweb', []);

  (function () {
    'use strict';

    angular
      .module('flashweb', [
        'flashweb.config',
        'flashweb.routes',
        'flashweb.authentication'
      ]);

    angular
      .module('flashweb.routes', ['ngRoute']);

    angular
  .module('flashweb.config', []);
  })();
