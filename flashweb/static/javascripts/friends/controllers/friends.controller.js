/**
* FriendsController
* @namespace flashweb.friends.controllers
*/
(function () {
  'use strict';


  angular
    .module('flashweb.friends.controllers')
    .controller('FriendsController', FriendsController);

  FriendsController.$inject = ['$scope', 'Friends'];

  /**
  * @namespace FriendsController
  */
  function FriendsController($scope, Friends) {
    var vm = this;
    //console.log('friendscontroller');
    vm.list = [];
    //vm.list = ["Tom", "Dick", "Harry"];
    //vm.list = $scope.list;

    //vm.list = Friends.query();
    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf flashweb.friends.controllers.FriendsController
    */
    function activate() {
      // used with $http
    //  Friends.all().success(function(data) {
    //    vm.list = data;
    //  });

    //used with $resource
    //  $scope.friends = Friend.query();
      vm.list = Friends.query();

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
