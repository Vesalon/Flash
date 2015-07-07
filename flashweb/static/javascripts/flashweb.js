(function () {
    'use strict';

    angular
        .module('flashweb', [
            'flashweb.config',
            'flashweb.routes',
            'flashweb.authentication',
            'flashweb.layout',
            'flashweb.haps',
            'flashweb.utils',
            'flashweb.profiles',
            'flashweb.friends',
            'ngResource'
      ]);

    angular
        .module('flashweb.routes', ['ngRoute']);

    angular
        .module('flashweb.config', []);
    })();

angular
    .module('flashweb')
    .run(run);

run.$inject = ['$http', '$resource'];

/**
* @name run
* @desc Update xsrf $http headers to align with Django's defaults
*/
function run($http) {
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}
