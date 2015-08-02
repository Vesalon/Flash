'use strict';

  angular
    .module('hapin.dev.data', [])
    .factory('DevAuthData', DevAuthData);

  DevAuthData.$inject = [];

  function DevAuthData() {

    var accounts = [{"username":"Geo","password":"pass","email":"geo@a.com"}];

    var DevAuthData = {
         accounts: accounts,
         create: create,
         getByEmail: getByEmail
    };

    return DevAuthData;

    function accounts() {
      return accounts;
    };

    function create(account){
      accounts.push(account);
      console.log(accounts);
    }

    function getByEmail(email) {
      var account = accounts.filter(function (a) {
          return a.email === email;
        })[0];

      console.log("account = ", account);
      //identity = {username: account.username, role: 'Account'}
      return account;
    }


  }
