'use strict';

  angular
    .module('hapin.dev.data')
    .factory('DevFriendsData', DevFriendsData);

  DevFriendsData.$inject = [];

  function DevFriendsData() {

    //var accounts = [{"username":"Geo","password":"pass","email":"geo@a.com"}];

    var DevFriendsData = {
        //  accounts: accounts,
        //  create: create,
        //  getByLogin: getByLogin
    };

    return DevFriendsData;
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
