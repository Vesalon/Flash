(function () {
  'use strict';

  angular
    .module('hapin.profiles.services')
    .factory('Profiles', Profiles);

  Profiles.$inject = ['$http'];

  function Profiles($http) {

    var Profiles = {
      destroy: destroy,
      get: get,
      update: update,
      getBySearchValue: getBySearchValue
    };

    return Profiles;

    function destroy(profile) {
      return $http.delete('/api/v1/accounts/' + profile.id + '/');
      //should be profile.username
      //but since we might change api to look aat id, not username
      //won't change for now
    }

    function get(username) {
      return $http.get('/api/v1/accounts/:' + username + '/');
    }

    function getBySearchValue(searchValue) {
      return $http.get('/api/v1/accounts/search/:' + searchValue + '/');
    }

    function update(profile) {
      return $http.put('/api/v1/accounts/' + profile.username + '/', profile);
    }
  }
})();
