(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('NewHapController', NewHapController);

  NewHapController.$inject = ['$scope', '$state', 'Auth', 'Haps', 'uiGmapGoogleMapApi'];

  function NewHapController($scope, $state, Auth, Haps, uiGmapGoogleMapApi) {
    // var hi = this;
    // hi.clear = clear;
    //
    // $scope.location = {
    //   name: null,
    //   lat: null,
    //   lng: null
    // };

    // Define variables for our Map object
  var areaLat      = 44.2126995,
      areaLng      = -100.2471641,
      areaZoom     = 12;

  uiGmapGoogleMapApi.then(function(maps) {
    $scope.map     = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
    $scope.options = { scrollwheel: false };
    var events = {
          places_changed: function (searchBox) {}
        }
    $scope.searchbox = { template:"searchbox.template", events:events};
  });

    // function clear() {
    //   $scope.location = {
    //     name: null,
    //     lat: null,
    //     lng: null
    //   };
    // };



  }

})();
