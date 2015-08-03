'use strict';

  angular
    .module('hapin.dev.data')
    .factory('DevAccountData', DevAccountData);

  DevAccountData.$inject = [];

  function DevAccountData() {

    //var accounts = [{"username":"Geo","password":"pass","email":"geo@a.com"}];
    var accounts = [
    {
        "id": 1,
        "email": "dogman@a.com",
        "username": "dogman",
        "created_at": "2015-07-10T21:02:28.479000Z",
        "updated_at": "2015-07-10T21:02:28.479000Z",
        "first_name": "",
        "last_name": "",
        "attended": 0,
        "organized": 0,
        "signature": "",
        "include_signature": false
    },
    {
        "id": 2,
        "email": "catwoman@a.com",
        "username": "catwoman",
        "created_at": "2015-07-10T21:06:20.485000Z",
        "updated_at": "2015-07-10T21:06:20.485000Z",
        "first_name": "",
        "last_name": "",
        "attended": 0,
        "organized": 0,
        "signature": "",
        "include_signature": false
    },
    {
        "id": 3,
        "email": "antbaby@a.com",
        "username": "antbaby",
        "created_at": "2015-07-12T01:23:17.084000Z",
        "updated_at": "2015-07-12T01:23:17.084000Z",
        "first_name": "",
        "last_name": "",
        "attended": 0,
        "organized": 0,
        "signature": "",
        "include_signature": false
    },
    {
        "id": 4,
        "email": "snakechild@a.com",
        "username": "snakechild",
        "created_at": "2015-07-12T01:23:53.027000Z",
        "updated_at": "2015-07-12T01:23:53.027000Z",
        "first_name": "",
        "last_name": "",
        "attended": 0,
        "organized": 0,
        "signature": "",
        "include_signature": false
    },
    {
        "id": 5,
        "email": "vesselin@a.com",
        "username": "Ves",
        "created_at": "2015-07-14T20:16:33.722000Z",
        "updated_at": "2015-07-14T23:44:08.544000Z",
        "first_name": "",
        "last_name": "",
        "attended": 0,
        "organized": 0,
        "signature": "Testing",
        "include_signature": true
    }
];

    var DevAccountData = {
         accounts: accounts,
         create: create,
         getByLogin: getByLogin
    };

    return DevAccountData;

    function accounts() {
      return accounts;
    };

    function create(account){
      accounts.push(account);
      console.log(accounts);
    }

    function getByLogin(email, password) {
      var account = accounts.filter(function (a) {
          return a.email === email
              //  & a.password === password; // we don't have the password in the mock objects
        })[0];

      console.log("account = ", account);
      //identity = {username: account.username, role: 'Account'}
      return account;
    }


  }
