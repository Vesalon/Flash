'use strict';

angular
  .module('hapin.haps.controllers')
  .controller('HapsController', HapsController);

HapsController.$inject = ['$scope', '$state', 'Auth', 'Haps'];

function HapsController($scope, $state, Auth, Haps) {
  var hi = this;
//  hi.col = [];
hi.isAuthenticated = Auth.isAuthenticated();
hi.list = [];
  activate();

  function activate() {
    if (hi.isAuthenticated) {
     Haps.get()
        .then(hapsSuccessFn, hapsErrorFn);
    }

     $scope.$on('hap.created', function (event, hap) {
       console.log('hap.created ' + friend);
       hi.list.unshift(hap);
     });

     $scope.$on('hap.created.error', function () {
       console.log('hap.created.error!!!!');
       hi.list.shift();
     });

    function hapsSuccessFn(data, status, headers, config) {
      hi.list = data.data;
    }

    function hapsErrorFn(data, status, headers, config) {
      console.log(data.error);
    }

  }

  // function activate() {
  //   $scope.$watchCollection(function () { return $scope.haps; }, render);
  // }
  //
  // function render(current, original) {
  //   if (current !== original) {
  //     //console.log(original);
  //   //  console.log(current);
  //     hi.col = [];
  //     for (var i = 0; i < current.length; ++i) {
  //       hi.col.push(current[i]);
  //     }
  //     //console.log(hi.col);
  //   }
  // }
}
