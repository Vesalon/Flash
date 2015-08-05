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

      $httpBackend.whenGET(new RegExp('\\/api/v1/accounts\\/^[a-z0-9_-]{3,16}$/')).respond(
        function(method, url){
            var regexp = new RegExp('\\/api/v1/accounts\\/^[a-z0-9_-]{3,16}$/');
            var username = url.match(regexp)[1];
            console.log("dev.profiles get username=" + username);
            var account = DevProfilesData.getBySearchValue(username)
            console.log("dev.profiles get account=" + account);
            return [200, account];

      });

    });
  })();
