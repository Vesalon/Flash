'use strict'

angular.module('devHapin', [
          'hapin',
          'ngMockE2E',
])

  .run(function($httpBackend) {
    phones = [{name: 'phone1'}, {name: 'phone2'}];

    // returns the current list of phones
    $httpBackend.whenGET('/phones').respond(phones);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
      var phone = angular.fromJson(data);
      phones.push(phone);
      return [200, phone, {}];
    });

    // don't mock - for html views
    $httpBackend.whenGET(/^\/templates\//).passThrough();

    // don't mock - for everything else
    // $httpBackend.whenGET(/^\w+.*/).passThrough();
    // $httpBackend.whenPOST(/^\w+.*/).passThrough();

    //...
  });
