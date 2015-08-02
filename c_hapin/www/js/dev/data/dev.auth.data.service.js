'use strict';

  angular
    .module('hapin.dev.data.services')
    .factory('DevAuthData', DevAuthData);

  DevAuthData.$inject = [];

  function DevAuthData() {

    var accounts = [{"username":"Geo","password":"pass","email":"geo@a.com"}];

    var DevAuthData = {
         accounts: accounts,
         getIdentity: getIdentity,
         removeIdentity: removeIdentity,
         isIdentityPresent: isIdentityPresent
    };

    return DevAuthData;

    function accounts() {
      return accounts;
    }

    function getIdentity() {
      if (!localStorage.getItem(LOCAL_IDENTITY_KEY)) {
        return;
      }
      return JSON.parse(localStorage.getItem(LOCAL_IDENTITY_KEY));
    }

    function removeIdentity() {
      //delete $cookies.authenticatedAccount;
      localStorage.removeItem(LOCAL_IDENTITY_KEY);
    }

    function isIdentityPresent() {
      return !!localStorage.getItem(LOCAL_IDENTITY_KEY);
    }

  }
