'use strict'

angular.module('hapin')

  .run(function($httpBackend, DevFriendsData, Auth, DevAccountData) {

    //all
    $httpBackend.whenGET('/api/v1/friends/').respond(DevFriendsData.all());

    //create
    $httpBackend.whenPOST('/api/v1/friends/')
      .respond(function(method, url, data) {
        console.log(data);
        var sentData = angular.fromJson(data);

        var selectObj = DevAccountData.getByUsername(sentData.select);
        var origObj = DevAccountData.getByUsername(Auth.getIdentity().username);
        var d = new Date();
        var currDate = d.toUTCString();

        var friendObj = {
          id: 10,
          orig: origObj,
          select: selectObj,
          alias: sentData.alias,
          created_at: currDate,
          updated_at: currDate
        };

        //var friend = angular.fromJson(data);
        DevFriendsData.create(friendObj);
        return [200, friendObj, {}];
    });

    //get all my friends
    $httpBackend.whenGET('/api/v1/accounts/me/friends/')
      .respond(function (method, url, data) {
        console.log(data);
        var friends = DevFriendsData.getAccountFriends(Auth.username());
        return [200, friends];
    });

    //get a friend of mine - by username
    $httpBackend.whenGET('/api/v1/accounts/me/friends/')
      .respond(function (method, url, data) {
        console.log(data);
        var friends = DevFriendsData.getAccountFriends(Auth.username());
        return [200, friends];
    });

    //username
    //  $httpBackend.whenGET(/\/api\/v1\/accounts\/me\/friends\/:[a-zA-Z0-9_-]{1,20}\//).respond(
    //    function(method, url){
    //       console.log("dev.friends get by username");
    //       var match = url.match(/:[a-zA-Z0-9]{1,20}\//)[0]; // ":Dogman"
    //       var username = match.substring(1, match.length-1); // "Dogman"
    //
    //       console.log( match, username);
    //       var friend = DevFriendsData.getAccountFriendBySearchValue(Auth.username(), username)
    //       console.log("dev.friends get friend = " + friend);
    //       return [200, friend];
    // });

    // search by username or email
    $httpBackend.whenGET(/\/api\/v1\/accounts\/me\/friends\/:[@.a-zA-Z0-9_-]{1,30}\//).respond(
      function(method, url){
         console.log("dev.friends get by search value");
         var match = url.match(/:[@.a-zA-Z0-9_-]{1,30}\//)[0]; // ":Dogman/"
         var value = match.substring(1, match.length-1); // "Dogman"

         console.log( match, value);
         var friend = DevFriendsData.getAccountFriendBySearchValue(value)
         console.log( friend);
         return [200, friend];
   });

  });
