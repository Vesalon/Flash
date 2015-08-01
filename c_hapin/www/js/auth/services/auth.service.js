'use strict';

  angular
    .module('hapin.auth.services', ['ngCookies'])
    .factory('Auth', Auth);

  Auth.$inject = ['$cookies', '$http'];

  function Auth($cookies, $http) {

    var Auth = {
      //  getAuthenticatedAccount: getAuthenticatedAccount,
        isAuthenticated: isAuthenticated,
      //  login: login,
      //  logout: logout,
      //  register: register,
      //  setAuthenticatedAccount: setAuthenticatedAccount,
      //  unauthenticate: unauthenticate
    };

    return Auth;


    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);

      function registerSuccessFn(data, status, headers, config) {
        Authentication.login(email, password);
      }

      function registerErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }

    function login(email, password) {
        return $http.post('/api/v1/auth/login/', {
          email: email, password: password
        }).then(loginSuccessFn, loginErrorFn);

        function loginSuccessFn(data, status, headers, config) {
          Authentication.setAuthenticatedAccount(data.data);
          window.location = '/';
        }

        function loginErrorFn(data, status, headers, config) {
          console.error('Epic failure!');
        }
    }


    function logout() {
      return $http.post('/api/v1/auth/logout/')
        .then(logoutSuccessFn, logoutErrorFn);

      function logoutSuccessFn(data, status, headers, config) {
        Authentication.unauthenticate();
        window.location = '/login';
      }

      function logoutErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }

    function getAuthenticatedAccount() {
      if (!$cookies.authenticatedAccount) {
        return;
      }

      return JSON.parse($cookies.authenticatedAccount);
    }

    function isAuthenticated() {
      return false;
    //  return !!$cookies.authenticatedAccount;
    }

    function setAuthenticatedAccount(account) {
      $cookies.authenticatedAccount = JSON.stringify(account);
    }

    function unauthenticate() {
      delete $cookies.authenticatedAccount;
    }

  }
