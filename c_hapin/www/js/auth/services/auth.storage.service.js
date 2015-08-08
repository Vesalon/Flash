'use strict';

  angular
    .module('hapin.auth.services')
    .factory('AuthStorage', AuthStorage);

  AuthStorage.$inject = [];

  function AuthStorage() {

    var LOCAL_IDENTITY_KEY = 'social.hapin.identity';

    var AuthStorage = {
         setIdentity: setIdentity,
         getIdentity: getIdentity,
         removeIdentity: removeIdentity,
         isIdentityPresent: isIdentityPresent
    };

    return AuthStorage;

    function setIdentity(identity) {
    //  $cookies.authenticatedAccount = JSON.stringify(account);
      localStorage.setItem(LOCAL_IDENTITY_KEY, JSON.stringify(identity));
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
