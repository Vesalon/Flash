/**
* Friends
* @namespace flashweb.friends.services
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.services')
    .factory('Friends', Friends);

  Friends.$inject = ['$http'];

  /**
  * @namespace Friends
  * @returns {Factory}
  */
  function Friends($http) {
    var Friends = {
      all: all,
    //   create: create,
      get: get
    };
    //console.log('CALLING function Friends($http)');
    //console.log(Friends.objects);
    return Friends;

    ////////////////////

    /**
    * @name all
    * @desc Get all Friends
    * @returns {Promise}
    * @memberOf flashweb.friends.services.Friends
    */
    function all() {
      return $http.get('/api/v1/friends/');
    }


    /**
    * @name create
    * @desc Create a new Friend
    * @param {string} alias The alias of the new Hap
    * @returns {Promise}
    * @memberOf flashweb.haps.services.Haps
    */
    // function create(content) {
    //   return $http.post('/api/v1/haps/', {
    //     title: title
    //     desc: desc
    //     time: time
    //     location: location
    //     // guests: guests
    //   });
    // }

    /**
     * @name get
     * @desc Get the Friend of a given user
     * @param {string} username The username to get Friends for
     * @returns {Promise}
     * @memberOf flashweb.friends.services.Friends
     */
    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/friends/');
    }
  }
})();
