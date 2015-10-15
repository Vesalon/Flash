'use strict'

angular.module('hapin')

  .run(function($httpBackend, DevHapsData, Auth, DevAccountData) {

    //all
    $httpBackend.whenGET('/api/v1/haps/').respond(DevHapsData.all());

    //create
    $httpBackend.whenPOST('/api/v1/haps/')
      .respond(function(method, url, data) {
        console.log(data);
        var sentData = angular.fromJson(data);

        var orgObj = DevAccountData.getByUsername(Auth.getIdentity().username);
        var d = new Date();
        var currDate = d.toUTCString();

        var hapObj = {
          id: 10,
          organizer: orgObj,
          title: sentData.title,
          desc: sentData.desc,
          time: sentData.time,
          location: sentData.location,
          guest_list: [],
          created_at: currDate,
          updated_at: currDate
        };

        //var friend = angular.fromJson(data);
        DevHapsData.create(hapObj);
        return [200, hapObj, {}];
    });

    //get all my haps - I'm the organizer or a guest
    $httpBackend.whenGET('/api/v1/accounts/me/haps/')
      .respond(function (method, url, data) {
        console.log(data);
        var haps = DevHapsData.getAccountHaps();
        return [200, haps];
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

    // get a hap by id that I can access
    $httpBackend.whenGET(/\/api\/v1\/accounts\/me\/haps\/[0-9]{1,20}\//).respond(
      function(method, url){
         console.log("dev.haps get by id");
         var id = url.match(/[0-9]{1,20}\//)[0]; // "1234/"
        // var id = match.substring(1, match.length-1); // "1234"

         console.log( match, id);
         var hap = DevHapsData.getAccountHapById(id)
         console.log( hap);
         return [200, hap];
   });

  });
