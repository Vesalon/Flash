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
      get: get,
      getSingle: getSingle,
      accept: accept,
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
    function create(title, desc, location, time, friendIds) {
      console.log(title, desc, location, time, friendIds);
      return $http.post('/api/v1/haps/', {
        title: title,
        desc: desc,
        location: location,
        time: time,
        friend_ids: friendIds
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

    function getSingle(hapId) {
      return $http.get('/api/v1/haps/' + hapId + '/');
    }

    function accept(hapId, status, comment) {
      console.log(hapId, status, comment);
      return $http.put('/api/v1/haps/' + hapId + '/guests/', {
        status: status,
        comment: comment
      });
    }
  }
})();
