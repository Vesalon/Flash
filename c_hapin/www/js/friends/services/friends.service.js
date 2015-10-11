'use strict';

angular
  .module('hapin.friends.services', [])
  .factory('Friends', Friends);

Friends.$inject = ['$http'];

function Friends($http) {
  var Friends = {
    all: all,
    create: create,
    get: get,
    getFriend: getFriend
  };
  return Friends;

  function all() {
    return $http.get('/api/v1/friends/');
  }

  function create(select, alias) {
    return $http.post('/api/v1/friends/', {
        select: select,
        alias: alias,
    });
  }

  function get() {
    // return $http.get('/api/v1/accounts/' + username + '/friends/');
    return $http.get('/api/v1/accounts/me/friends/');
  }

  function getFriend(searchValue) {
    // return $http.get('/api/v1/accounts/' + username + '/friends/');
    return $http.get('/api/v1/accounts/me/friends/:' + searchValue + '/');
  }

}
