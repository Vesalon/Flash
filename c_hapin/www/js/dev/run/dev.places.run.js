(function(){
  'use strict'

  angular.module('hapin')

    .run(function($httpBackend, DevPlacesData, Auth, DevAccountData) {

      // //all
      // $httpBackend.whenGET('/api/v1/friends/').respond(DevFriendsData.all());

      //create
      $httpBackend.whenPOST('/api/v1/places/')
        .respond(function(method, url, data) {
          console.log(data);
          var sentData = angular.fromJson(data);

          var origObj = DevAccountData.getByUsername(Auth.getIdentity().username);
          var d = new Date();
          var currDate = d.toUTCString();

          var placeObj = {
            id: 10,
            orig: origObj,
            nickname: sentData.nickname,
            name: sentData.name,
            address: sentData.address,
            lat: sentData.lat,
            lon: sentData.lon,
            alias: sentData.alias,
            created_at: currDate,
            updated_at: currDate
          };

          //var friend = angular.fromJson(data);
          DevPlacesData.create(placeObj);
          return [200, placeObj, {}];
      });

      //get all my friends
      $httpBackend.whenGET('/api/v1/accounts/me/places/')
        .respond(function (method, url, data) {
          console.log(data);
          var places = DevPlacesData.getAccountPlaces(Auth.username());
          return [200, places];
      });



    });

})();
