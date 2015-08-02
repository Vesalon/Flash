'use strict';

  angular
    .module('hapin.dev.data')
    .factory('DevHapsData', DevHapsData);

  DevHapsData.$inject = [];

  function DevHapsData() {

  //  var accounts = [{"username":"Geo","password":"pass","email":"geo@a.com"}];

    var DevHapsData = {
        //  accounts: accounts,
        //  create: create,
        //  getByLogin: getByLogin
    };

    return DevHapsData;
    //
    // function accounts() {
    //   return accounts;
    // };
    //
    // function create(account){
    //   accounts.push(account);
    //   console.log(accounts);
    // }
    //
    // function getByLogin(email, password) {
    //   var account = accounts.filter(function (a) {
    //       return a.email === email
    //             & a.password === password;
    //     })[0];
    //
    //   console.log("account = ", account);
    //   //identity = {username: account.username, role: 'Account'}
    //   return account;
    // }
    //

  }
