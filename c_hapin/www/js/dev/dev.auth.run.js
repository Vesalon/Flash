'use strict'

angular.module('hapin')

  .run(function($httpBackend) {

    var accounts = [{"username":"Geo","password":"pass","email":"geo@a.com"}];

    //login
    $httpBackend.whenPOST('/api/v1/auth/login/')
      .respond(function(method, url, data) {
        var o = angular.fromJson(data);
        //console.log(o); // {"email":"Nina","password":"mypass"}
      //  console.log(accounts);
        var account = accounts.filter(function (a) {
            return a.email === o.email;
          })[0];
        console.log("account = ", account);
        //identity = {username: account.username, role: 'Account'}
        return [200, account, {}];
    });

    //register
    $httpBackend.whenPOST('/api/v1/accounts/')
      .respond(function(method, url, data) {
        var account = angular.fromJson(data);
        console.log(data); // {"username":"Nina","password":"pass","email":"nina@a.com"}
        accounts.push(account);
        console.log(accounts);
        return [200, account, {}];
    });

    // //   // don't mock - for html views
    // $httpBackend.whenGET(/^\/templates\//).passThrough();
    // $httpBackend.whenGET(/\.html$/).passThrough();
    //
    // // don't mock - for everything else
    //   $httpBackend.whenGET(/^\w+.*/).passThrough();
    //   $httpBackend.whenPOST(/^\w+.*/).passThrough();

    $httpBackend.whenGET(/templates\/\w+.*/).passThrough();

  });
