(function () {
  'use strict';

  angular
    .module('hapin.public.index.controllers')
    .controller('PublicIndexCtrl', PublicIndexCtrl);

  PublicIndexCtrl.$inject = ['$scope', '$state', 'Auth'];

  function PublicIndexCtrl($scope, $state, Auth) {
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    activate();

    function activate() {
        if (hi.isAuthenticated) {
            $state.go('site.private.content.haps');
        } else {
            $state.go('site.public.login');
        }
    }
  }
})();
