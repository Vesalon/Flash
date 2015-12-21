(function(){
  'use strict';

  angular
    .module('hapin.places.services')
    .factory('Places', Places);

  Places.$inject = ['$http'];

  function Places($http) {
    var Places = {
      all: all,
      create: create,
      get: get,
      getSingle: getSingle,
      accept: accept,
    };

    return Places;


    function all() {
      //return $http.get('/api/v1/places/');
    }

    function create(nickname, name, address, lat, lon) {
      console.log(nickname, name, address, lat, lon);
      // return $http.post('/api/v1/haps/', {
      //   title: title,
      //   desc: desc,
      //   location: location,
      //   time: time,
      //   friend_ids: friendIds
      // });
    }

    function get() {
      return $http.get('/api/v1/accounts/me/places/');
    }

    function getSingle(hapId) {
    //  return $http.get('/api/v1/haps/' + hapId + '/');
    return $http.get('/api/v1/accounts/me/places/:' + placeId + '/');
    }


  }

})();
