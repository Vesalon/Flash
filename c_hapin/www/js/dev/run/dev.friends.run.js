'use strict'

angular.module('hapin')

  .run(function($httpBackend, DevFriendsData, Auth) {

    //all
    $httpBackend.whenGET('/api/v1/friends/').respond(DevFriendsData.all());

    //create
    $httpBackend.whenPOST('/api/v1/friends/')
      .respond(function(method, url, data) {
        console.log(data);
        var friend = angular.fromJson(data);
        DevFriendsData.create(friend);
        return [200, friend, {}];
    });

    //get
    $httpBackend.whenGET('/api/v1/accounts/me/friends/')
      .respond(function (method, url, data) {
        console.log(data);
        DevFriendsData.getAccountFriends(Auth.username());
        return [200];
    });

  });
