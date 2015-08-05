(function () {
  'use strict';

  angular
    .module('hapin.dev.data')
    .factory('DevProfilesData', DevProfilesData);

  DevProfilesData.$inject = ['DevAccountData'];

  function DevProfilesData(DevAccountData) {

    var profiles = [
    {
        "id": 2,
        "orig": {
            "id": 2,
            "email": "catwoman@a.com",
            "username": "catwoman",
            "created_at": "2015-07-10T21:06:20.485000Z",
            "updated_at": "2015-07-10T21:06:20.485000Z",
            "first_name": "",
            "last_name": "",
            "attended": 0,
            "organized": 0,
            "signature": "",
            "include_signature": false
        },
        "select": {
            "id": 4,
            "email": "snakechild@a.com",
            "username": "snakechild",
            "created_at": "2015-07-12T01:23:53.027000Z",
            "updated_at": "2015-07-12T01:23:53.027000Z",
            "first_name": "",
            "last_name": "",
            "attended": 0,
            "organized": 0,
            "signature": "",
            "include_signature": false
        },
        "alias": "snakechild",
        "created_at": "2015-07-12T01:24:33.468000Z",
        "updated_at": "2015-07-12T01:24:33.468000Z"
    },
    {
        "id": 1,
        "orig": {
            "id": 2,
            "email": "catwoman@a.com",
            "username": "catwoman",
            "created_at": "2015-07-10T21:06:20.485000Z",
            "updated_at": "2015-07-10T21:06:20.485000Z",
            "first_name": "",
            "last_name": "",
            "attended": 0,
            "organized": 0,
            "signature": "",
            "include_signature": false
        },
        "select": {
            "id": 1,
            "email": "dogman@a.com",
            "username": "dogman",
            "created_at": "2015-07-10T21:02:28.479000Z",
            "updated_at": "2015-07-10T21:02:28.479000Z",
            "first_name": "",
            "last_name": "",
            "attended": 0,
            "organized": 0,
            "signature": "",
            "include_signature": false
        },
        "alias": "dogman",
        "created_at": "2015-07-10T21:10:06.291000Z",
        "updated_at": "2015-07-10T21:10:06.291000Z"
    },
    {
        "id": 4,
        "orig": {
            "id": 5,
            "email": "vesselin@a.com",
            "username": "Ves",
            "created_at": "2015-07-14T20:16:33.722000Z",
            "updated_at": "2015-07-14T23:44:08.544000Z",
            "first_name": "",
            "last_name": "",
            "attended": 0,
            "organized": 0,
            "signature": "Testing",
            "include_signature": true
        },
        "select": {
            "id": 2,
            "email": "catwoman@a.com",
            "username": "catwoman",
            "created_at": "2015-07-10T21:06:20.485000Z",
            "updated_at": "2015-07-10T21:06:20.485000Z",
            "first_name": "",
            "last_name": "",
            "attended": 0,
            "organized": 0,
            "signature": "",
            "include_signature": false
        },
        "alias": "catwoman",
        "created_at": "2015-07-14T20:16:47.207000Z",
        "updated_at": "2015-07-14T20:16:47.207000Z"
    },
    {
        "id": 3,
        "orig": {
            "id": 2,
            "email": "catwoman@a.com",
            "username": "catwoman",
            "created_at": "2015-07-10T21:06:20.485000Z",
            "updated_at": "2015-07-10T21:06:20.485000Z",
            "first_name": "",
            "last_name": "",
            "attended": 0,
            "organized": 0,
            "signature": "",
            "include_signature": false
        },
        "select": {
            "id": 3,
            "email": "antbaby@a.com",
            "username": "antbaby",
            "created_at": "2015-07-12T01:23:17.084000Z",
            "updated_at": "2015-07-12T01:23:17.084000Z",
            "first_name": "",
            "last_name": "",
            "attended": 0,
            "organized": 0,
            "signature": "",
            "include_signature": false
        },
        "alias": "antbaby",
        "created_at": "2015-07-12T01:24:44.516000Z",
        "updated_at": "2015-07-12T01:24:44.516000Z"
    }
];

    var DevProfilesData = {
      destroy: destroy,
      get: get,
      update: update,
      getBySearchValue: getBySearchValue
    };

    return DevProfilesData;

    function destroy(profile) {
      // profiles = profiles.filter(function (a) {
      //     return a.id !== profile.id;
      //   });
    }

    function get(username) {
      return DevAccountData.getByUsername(username);
    }

    function getBySearchValue(searchValue) {
      return DevAccountData.getBySearchValue(searchValue);
    }

    function update(profle){
      //todo
    }

  }
})();
