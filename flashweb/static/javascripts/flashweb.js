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

angular
    .module('thinkster')
    .run(run);

run.$inject = ['$http'];

/**
* @name run
* @desc Update xsrf $http headers to align with Django's defaults
*/
function run($http) {
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}
