'use strict';

  angular
    .module('hapin.layout.controllers', [])
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$scope', '$state', 'Auth'];

  function SidebarController($scope, $state, Auth) {
    var hi = this;
    hi.logout = logout;

    function logout() {
      Auth.logout();
    }

  }
