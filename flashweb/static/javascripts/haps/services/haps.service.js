/**
* Haps
* @namespace flashweb.haps.services
*/
(function () {
  'use strict';

  angular
    .module('flashweb.haps.services')
    .factory('Haps', Haps);

  Haps.$inject = ['$http'];

  /**
  * @namespace Haps
  * @returns {Factory}
  */
  function Haps($http) {
    var Haps = {
      all: all,
      create: create,
      get: get
    };

    return Haps;

    ////////////////////

    /**
    * @name all
    * @desc Get all Haps
    * @returns {Promise}
    * @memberOf flashweb.haps.services.Haps
    */
    function all() {
      return $http.get('/api/v1/haps/');
    }


    /**
    * @name create
    * @desc Create a new Hap
    * @param {string} content The content of the new Hap
    * @returns {Promise}
    * @memberOf flashweb.haps.services.Haps
    */
    function create(content) {
      return $http.post('/api/v1/haps/', {
        title: title
        desc: desc
        time: time
        location: location
        // guests: guests
      });
    }

    /**
     * @name get
     * @desc Get the Haps of a given user
     * @param {string} username The username to get Haps for
     * @returns {Promise}
     * @memberOf flashweb.haps.services.Haps
     */
    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/haps/');
    }
  }
})();
