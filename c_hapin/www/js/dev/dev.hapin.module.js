'use strict'

angular.module('hapin.dev', [
            'ngMockE2E',
            'hapin.dev.data'

]);

angular
  .module('hapin.dev.data', []);

  // .run(function($httpBackend) {
  //
  //   // phones = [{name: 'phone1'}, {name: 'phone2'}];
  //   //
  //   // // returns the current list of phones
  //   // $httpBackend.whenGET('/phones').respond(phones);

  // });
