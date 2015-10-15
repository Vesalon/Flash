'use strict';

  angular
    .module('hapin.dev.data')
    .factory('DevHapsData', DevHapsData);

  DevHapsData.$inject = ['Auth'];

  function DevHapsData(Auth) {

    var haps = [
    {
        "id": 5,
        "organizer": {
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
        "title": "another party",
        "desc": "snack will not be provided this time",
        "time": "2015-07-31T03:00:00Z",
        "location": "my house",
        "guest_list": [
            4
        ],
        "created_at": "2015-07-14T20:16:33.722000Z",
        "updated_at": "2015-07-14T23:44:08.544000Z"
    },
    {
        "id": 4,
        "organizer": {
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
        "title": "party",
        "desc": "snacks will be provided",
        "time": "2015-07-27T18:00:00Z",
        "location": "my house",
        "guest_list": [
            4
        ],
        "created_at": "2015-07-14T20:16:33.722000Z",
        "updated_at": "2015-07-14T23:44:08.544000Z"
    },
    {
        "id": 1,
        "organizer": {
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
        "title": "my birthday",
        "desc": "I'm turning 21!",
        "time": "2015-07-20T23:00:00Z",
        "location": "my house",
        "guest_list": [],
        "created_at": "2015-07-14T20:16:33.722000Z",
        "updated_at": "2015-07-14T23:44:08.544000Z"
    },
    {
        "id": 3,
        "organizer": {
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
        "title": "lady's night out",
        "desc": "drinks, anyone?",
        "time": "2015-07-16T00:30:00Z",
        "location": "cocowalk",
        "guest_list": [],
        "created_at": "2015-07-14T20:16:33.722000Z",
        "updated_at": "2015-07-14T23:44:08.544000Z"
    },
    {
        "id": 2,
        "organizer": {
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
        "title": "soccer game",
        "desc": "let's have some fun",
        "time": "2015-07-12T22:00:00Z",
        "location": "sunnyland park",
        "guest_list": [],
        "created_at": "2015-07-14T20:16:33.722000Z",
        "updated_at": "2015-07-14T23:44:08.544000Z"
    }
];

    var DevHapsData = {
      all: all,
      create: create,
      getAccountHaps: getAccountHaps,
      getAccountHapById: getAccountHapById,
    };

    return DevHapsData;
    //
    function all() {
      return haps;
    };
    //
    function create(hap){
      haps.push(hap);
      console.log(haps);
    }
    //
    function getAccountHaps() {
      var aHaps = haps.filter(function (a) {
          return a.organizer.username === Auth.getIdentity().username
            || a.guest_list.indexOf(Auth.getIdentity().id) !== -1  ;
        });

      console.log("aHaps = ", aHaps);
      return aHaps;
    }

    function getAccountHapById(id) {
      var aHap = haps.filter(function (a) {
          return a.id === id
            && (a.organizer.username === Auth.getIdentity().username
              ||  a.guest_list.indexOf(Auth.getIdentity().id) !== -1);
        })[0];

      console.log("aHap = ", aHap);
      return aHap;
    }

  }
