/**
* Friends
* @namespace flashweb.friends.services
*/
(function () {
  'use strict';

  var friendsService =
    angular
      .module('flashweb.friends.services', ['ngResource'])

  friendsService.factory('Friends', ['$resource',
    function($resource){
      return $resource('/api/v1/friends/', {}, {
        query: {method:'GET', params:{}, isArray:false}
      });
    }]);


})();
