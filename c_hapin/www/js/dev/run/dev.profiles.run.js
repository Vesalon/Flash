(function () {
  'use strict'

  angular.module('hapin')

    .run(function($httpBackend, DevProfilesData, Auth) {

      // //all
      // $httpBackend.whenGET('/api/v1/friends/').respond(DevFriendsData.all());

      // //create
      // $httpBackend.whenPOST('/api/v1/friends/')
      //   .respond(function(method, url, data) {
      //     console.log(data);
      //     var friend = angular.fromJson(data);
      //     DevFriendsData.create(friend);
      //     return [200, friend, {}];
      // });

      // //get
      // //username: /^[a-z0-9_-]{3,16}$/
      // $httpBackend.whenGET('/api/v1/accounts/' + username + '/')
      //   .respond(function (method, url, data) {
      //     console.log(data);
      //     var friends = DevFriendsData.getAccountFriends(Auth.username());
      //     return [200, friends];
      // });

      //http://www.codeorbits.com/blog/2013/12/20/rapid-angularjs-prototyping-without-real-backend

      //username
       $httpBackend.whenGET(/\/api\/v1\/accounts\/:[a-zA-Z0-9_-]{1,20}\//).respond(
         function(method, url){
            console.log("dev.profiles get by username");
            var match = url.match(/:[a-zA-Z0-9]{1,20}\//)[0]; // ":Dogman/"
            var username = match.substring(1, match.length-1); // "Dogman"

            console.log( match, username);
            var account = DevProfilesData.get(username)
            console.log("dev.profiles get account=" + account);
            return [200, account];
      });

      // search by username or email
      $httpBackend.whenGET(/\/api\/v1\/accounts\/search\/:[@.a-zA-Z0-9_-]{1,30}\//).respond(
        function(method, url){
           console.log("dev.profiles get by username");
           var match = url.match(/:[@.a-zA-Z0-9_-]{1,30}\//)[0]; // ":Dogman/"
           var username = match.substring(1, match.length-1); // "Dogman"

           console.log( match, username);
           var account = DevProfilesData.getBySearchValue(username)
           console.log( account);
           return [200, account];
     });

    });
  })();
