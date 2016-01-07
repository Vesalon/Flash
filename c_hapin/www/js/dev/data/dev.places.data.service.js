(function(){
  'use strict';

    angular
      .module('hapin.dev.data')
      .factory('DevPlacesData', DevPlacesData);

    DevPlacesData.$inject = ['Auth'];

    function DevPlacesData(Auth) {

      var places = [
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
          "nickname": "my house",
          "name": "",
          "address": "8050 sw 139 terr, 33158",
          "lat": "",
          "lon": "",
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
          "nickname": "the falls",
          "name": "The Falls",
          "address": "Southwest 136th Street, Miami, FL",
          "lat": "",
          "lon": "",
          "created_at": "2015-07-12T01:24:33.468000Z",
          "updated_at": "2015-07-12T01:24:33.468000Z"
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
          "nickname": "my house",
          "name": "",
          "address": "8050 sw 139 terr, 33158",
          "lat": "",
          "lon": "",
          "created_at": "2015-07-12T01:24:33.468000Z",
          "updated_at": "2015-07-12T01:24:33.468000Z"
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
          "nickname": "the gym",
          "name": "Pinecrest Community Center",
          "address": "5855 SW 111th St, Miami, FL 33156",
          "lat": "",
          "lon": "",
          "created_at": "2015-07-12T01:24:33.468000Z",
          "updated_at": "2015-07-12T01:24:33.468000Z"
      }
  ];

      var DevPlacesData = {
            all: all,
            create: create,
            getAccountPlaces: getAccountPlaces,
            getAccountPlaceById: getAccountPlaceById,
            update: update,
            //getAccountPlaceBySearchValue: getAccountPlaceBySearchValue,
      };

      return DevPlacesData;

      function all() {
        return places;
      };

      function create(place){
        //arr[arr.length - 1]
        places.push(place);
        console.log(places);
      }

      function getAccountPlaces(username) {
        var aPlaces = places.filter(function (a) {
            return a.orig.username === username;
          });

        console.log("aPlaces = ", aPlaces);
        return aPlaces;
      }

      function getAccountPlaceById(id) {
        var aPlace = places.filter(function (a) {
            return a.id === id
              && (a.orig.username === Auth.getIdentity().username);
          })[0];

        console.log("aPlace = ", aPlace);
        return aPlace;
      }

      function update(place){
        var i = places.map(function(e) { return e.id; }).indexOf(place.id);
        // console.log(i);
        // console.log(places[i]);
        places[i].nickname = place.nickname;
        places[i].name = place.name;
        places[i].address = place.address;
        places[i].lat = place.lat;
        places[i].lon = place.lon;
        // console.log(places[i]);
      }

      // function getAccountPlaceBySearchValue(searchValue) {
      //   console.log("getAccountPlaceBySearchValue searchValue = ", searchValue);
      //   var aPlace = places.filter(function (a) {
      //       return  a.orig.username.toLowerCase() === Auth.getIdentity().username.toLowerCase()
      //               && (a.select.username.toLowerCase() === searchValue.toLowerCase()
      //                   || a.select.email.toLowerCase() === searchValue.toLowerCase());
      //     })[0];
      //   console.log("aPlace = ", aPlace);
      //   return aPlace;
      // }

      // function getAccountFriendByUsername(username, friendUsername) {
      //   var aFriend = friends.filter(function (a) {
      //       return a.orig.username === username
      //         && a.select.username === friendUsername;
      //     })[0];
      //
      //   console.log("aFriend = ", aFriend);
      //   return aFriend;
      // }

    }

})();
