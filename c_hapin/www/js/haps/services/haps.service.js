'use strict';

angular
  .module('hapin.haps.services')
  .factory('Haps', Haps);

Haps.$inject = ['$http'];

function Haps($http) {
  var Haps = {
    all: all,
    create: create,
    get: get,
    getSingle: getSingle,
    accept: accept,
  };

  return Haps;


  function all() {
    return $http.get('/api/v1/haps/');
  }

  function create(title, desc, location, time, friendIds) {
    console.log(title, desc, location, time, friendIds);
    // return $http.post('/api/v1/haps/', {
    //   title: title,
    //   desc: desc,
    //   location: location,
    //   time: time,
    //   friend_ids: friendIds
    // });
  }

  function get() {
    //return $http.get('/api/v1/accounts/' + username + '/haps/');
    return $http.get('/api/v1/accounts/me/haps/');
  }

  function getSingle(hapId) {
  //  return $http.get('/api/v1/haps/' + hapId + '/');
  return $http.get('/api/v1/accounts/me/haps/:' + hapId + '/');
  }

  function accept(hapId, status, comment) {
    console.log(hapId, status, comment);
    // return $http.put('/api/v1/haps/' + hapId + '/guests/', {
    //   status: status,
    //   comment: comment
    // });
  }
}
