// 'use strict'
//
// angular.module('hapin')
//
//   .run(function($httpBackend, DevHapsData) {
//
//     // //login
//     // $httpBackend.whenPOST('/api/v1/auth/login/')
//     //   .respond(function(method, url, data) {
//     //     var o = angular.fromJson(data);
//     //     //console.log(o); // {"email":"geo@a.com","password":"pass"}
//     //     var account = DevAuthData.getByLogin(o.email, o.password);
//     //     return [200, account, {}];
//     // });
//     //
//     // //register
//     // $httpBackend.whenPOST('/api/v1/accounts/')
//     //   .respond(function(method, url, data) {
//     //     console.log(data); // {"username":"Nina","password":"pass","email":"nina@a.com"}
//     //     var account = angular.fromJson(data);
//     //     DevAuthData.create(account);
//     //     return [200, account, {}];
//     // });
//     //
//     // //logout
//     // $httpBackend.whenPOST('/api/v1/auth/logout/')
//     //   .respond(function(method, url, data) {
//     //     console.log('mock logout')
//     //     return [200, {}, {}];
//     // });
//
//   });
