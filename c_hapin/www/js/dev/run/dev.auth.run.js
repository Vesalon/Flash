'use strict'

angular.module('hapin')

  .run(function($httpBackend, DevAccountData) {

// format function(function(method, url, [data], [headers])
// data and header are optionl

//respond
// function([status,] data[, headers, statusText])

    //login
    $httpBackend.whenPOST('/api/v1/auth/login/')
      .respond(function(method, url, data) {
        var o = angular.fromJson(data);
        //console.log(o); // {"email":"geo@a.com","password":"pass"}
        var account = DevAccountData.getByLogin(o.email, o.password);
        console.log(account);
        if(account){
          console.log('account found');
          return [200, account, {}];
        }else{
          console.log('no account found');
          return [400, null, {}];
        }
    });

    //register
    $httpBackend.whenPOST('/api/v1/accounts/')
      .respond(function(method, url, data) {
        console.log(data); // {"username":"Nina","password":"pass","email":"nina@a.com"}
        var account = angular.fromJson(data);
        DevAccountData.create(account);
        return [200, account, {}];
    });

    //logout
    $httpBackend.whenPOST('/api/v1/auth/logout/')
      .respond(function(method, url, data) {
        console.log('mock logout')
        return [200, {}, {}];
    });



  });
