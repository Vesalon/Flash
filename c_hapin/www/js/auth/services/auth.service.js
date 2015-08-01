'use strict';

  angular
    .module('hapin.auth.services', [])
    .factory('Auth', Auth);

  Auth.$inject = ['$http'];

  function Auth($http) {

    var LOCAL_IDENTITY_KEY = 'social.hapin.identity';

    var Auth = {
         login: login,
         logout: logout,
         register: register,
         getIdentity: getIdentity,
         isAuthenticated: isAuthenticated,
         setIdentity: setIdentity,
         username: username,
         role: role,
         unauthenticate: unauthenticate
    };

    return Auth;


    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);

      function registerSuccessFn(data, status, headers, config) {
        Auth.login(email, password);
      }

      function registerErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }

    function login(email, password) {
        // return $http.post('/api/v1/auth/login/', {
        //   email: email, password: password
        // }).then(loginSuccessFn, loginErrorFn);
        Auth.setIdentity({
          username: 'catwoman',
          roles: ['Account']
        });

        function loginSuccessFn(data, status, headers, config) {
          Auth.setIdentity(data.data);
          //window.location = '/';
        }

        function loginErrorFn(data, status, headers, config) {
          console.error('failure trying to login!');
        }
    }


    function logout() {
      // return $http.post('/api/v1/auth/logout/')
      //   .then(logoutSuccessFn, logoutErrorFn);
      Auth.unauthenticate();

      function logoutSuccessFn(data, status, headers, config) {
        Auth.unauthenticate();
      //  window.location = '/login';
      }

      function logoutErrorFn(data, status, headers, config) {
        console.error('Failure trying to logout!');
      }
    }

    function getIdentity() {
      if (!localStorage.getItem(LOCAL_IDENTITY_KEY)) {
        return;
      }
      return JSON.parse(localStorage.getItem(LOCAL_IDENTITY_KEY));
    }

    function isAuthenticated() {
      return !!localStorage.getItem(LOCAL_IDENTITY_KEY);
    }

    function setIdentity(identity) {
    //  $cookies.authenticatedAccount = JSON.stringify(account);
      localStorage.setItem(LOCAL_IDENTITY_KEY, JSON.stringify(identity));
    }

    function unauthenticate() {
      //delete $cookies.authenticatedAccount;
      localStorage.removeItem(LOCAL_IDENTITY_KEY);
    }

    function username() {
      if (!isAuthenticated()) return '';

      return getIdentity().username;
    }

    function role() {
      if (!isAuthenticated()) return '';

      return getIdentity().role;
    }

  }
