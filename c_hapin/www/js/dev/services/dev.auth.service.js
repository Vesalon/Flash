'use strict';

  angular
    .module('devHapin', [])
    .factory('devAuth', devAuth);

  devAuth.$inject = ['$httpBackend', 'AuthStorage'];

  function devAuth($httpBackend, AuthStorage) {
    var Auth = {
         login: login,
         logout: logout,
         register: register
    };
    return Auth;
    ///////////////////
    phones = [{name: 'phone1'}, {name: 'phone2'}];
    identity = {username: 'catwoman', roles: ['Account']
    }
    // returns the current list of phones
    $httpBackend.whenGET('/phones').respond(phones);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
      var phone = angular.fromJson(data);
      phones.push(phone);
      return [200, phone, {}];
    });
    //////////////////
    function register() {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);

    }

  }
