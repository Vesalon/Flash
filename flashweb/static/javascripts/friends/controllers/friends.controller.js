/**
* FriendsController
* @namespace flashweb.friends.controllers
*/
(function () {
  'use strict';


  angular
    .module('flashweb.friends.controllers')
    .controller('FriendsController', FriendsController);

  FriendsController.$inject = ['$scope',  'Authentication', 'Friends'];

  /**
  * @namespace FriendsController
  */
  function FriendsController($scope, Authentication, Friends) {
    var vm = this;
    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.list = [];
    //vm.list = ["Tom", "Dick", "Harry"];
    //vm.list = $scope.list;
    console.log('before calling all');
    //vm.list = Friends.all();
    /*
    vm.list = Friends.all(function(callbackdata){
      console.log(callbackdata);
      console.log(vm.list);
    });*/
    Friends.query(function(response) {
      vm.list = response;
      console.log(response);
      console.log('after calling query');
    });

    console.log('after calling all');
  /*  Friends.all().$promise.then(function(data){
      vm.list = data;
    });*/

  //  activate();
    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf flashweb.friends.controllers.FriendsController
    */
    function activate() {
      // used with $http
      /*Friends.all().success(function(data) {
        vm.list = data;
      });*/

    console.log('in friends activate() -- 1');

    //used with $resource
    //  $scope.friends = Friend.query();
      vm.list = Friends.query();

    //vm.list = Friends.all();

/*
      Friends.all().$promise.then(function(data) {
        vm.list = data;
      });
*/
      console.log('in friends activate() -- 2');

      $scope.$watchCollection(function () { return $scope.friends; }, render);
      $scope.$watch(function () { return $(window).width(); }, render);
    }

    /**
    * @name render
    * @param {Array} current The current value of `vm.friends`
    * @param {Array} original The value of `vm.friends` before it was updated
    * @memberOf flashweb.friends.controllers.FriendsController
    */
    function render(current, original) {
      if (current !== original) {
        vm.list = [];
        for (var i = 0; i < current.length; ++i) {
          vm.list.push(current[i]);
        }
      }
    }
  }
})();
