/**
* Friends
* @namespace flashweb.friends.services
*/
(function () {
  'use strict';

  angular
    .module('flashweb.friends.services', ['ngResource'])
    .factory('Friends', Friends);

  Friends.$inject = [ '$http', '$resource'];

  /**
  * @namespace Friends
  * @returns {Factory}
  */
  function Friends($http, $resource) {

    console.log('CALLING function Friends($http)');
/*
    var Friends = {
      all: all,
      //create: create,
      get: get
    };
*/
/*
    return {
      all: $resource('/api/v1/friends/', {}, {
            query: { method: 'GET', isArray: true }
        })
    };
*/

    return $resource('/api/v1/friends', {},{
                query: {method:'GET', isArray:true}
          });

/*
var Resource = $resource('/api/v1/friends/', {}, {
  get: {
    method: 'get',
    interceptor: {
      response: function(response) {
        // expose response
        return response;
      }
    }
  }
});

console.log(Resource);
*/
    //console.log('after calling friends resource');
    //console.log(Friends.all);
    //return Friends;

    ////////////////////

    /**
    * @name all
    * @desc Get all Friends
    * @returns {Promise}
    * @memberOf flashweb.friends.services.Friends
    */
    function all() {
    //  return $http.get('/api/v1/friends/');
      /*
      resource = $resource('/api/v1/friends/' + ':id', { id: '@id' });
      return resource.query();
      */
      console.log('CALLING function Friends. all()');

      return $resource('/api/v1/friends/', {}, {
        query: {method:'GET', isArray:true}
      });

      //return $resource('/api/v1/friends/', {}).query();

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
