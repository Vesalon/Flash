// (function () {
//   'use strict';
//
//   angular
//     .module('hapin.profiles.services')
//     .factory('Profile', Profile);
//
//   Profile.$inject = ['$http'];
//
//   function Profile($http) {
//
//     var Profile = {
//       destroy: destroy,
//       get: get,
//       update: update
//     };
//
//     return Profile;
//
//     function destroy(profile) {
//       return $http.delete('/api/v1/accounts/' + profile.id + '/');
//       //should be profile.username
//       //but since we might change api to look aat id, not username
//       //won't change for now
//     }
//
//     function get(username) {
//       return $http.get('/api/v1/accounts/' + username + '/');
//     }
//
//     function update(profile) {
//       return $http.put('/api/v1/accounts/' + profile.username + '/', profile);
//     }
//   }
// })();
