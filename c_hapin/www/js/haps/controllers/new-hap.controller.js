(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('NewHapController', NewHapController);

  NewHapController.$inject = ['$scope', '$state', 'Auth', 'Haps', 'Places', 'uiGmapGoogleMapApi'];

  function NewHapController($scope, $state, Auth, Haps, Places, uiGmapGoogleMapApi) {
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    // hi.clear = clear;
    //
    // $scope.location = {
    //   name: null,
    //   lat: null,
    //   lng: null
    // };

    hi.myPlacesList = [];
    activate();

    function activate() {
      if (hi.isAuthenticated) {
       Places.get()
          .then(placesSuccessFn, placesErrorFn);
      }

       $scope.$on('place.created', function (event, place) {
         console.log('place.created ' + place);
         hi.myPlacesList.unshift(place);
       });

       $scope.$on('place.created.error', function () {
         console.log('place.created.erro!!!!');
         hi.myPlacesList.shift();
       });

      function placesSuccessFn(data, status, headers, config) {
        hi.myPlacesList = data.data;
      }

      function placesErrorFn(data, status, headers, config) {
        console.log(data.error);
      }

    }

  //   // Define variables for our Map object
  // var areaLat      = 44.2126995,
  //     areaLng      = -100.2471641,
  //     areaZoom     = 12;
  //
  // uiGmapGoogleMapApi.then(function(maps) {
  //   $scope.map     = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
  //   $scope.options = { scrollwheel: false };
  //   var events = {
  //         places_changed: function (searchBox) {}
  //       }
  //   $scope.searchbox = { template:"searchbox.template", events:events};
  // });

    // function clear() {
    //   $scope.location = {
    //     name: null,
    //     lat: null,
    //     lng: null
    //   };
    // };



  }

})();
