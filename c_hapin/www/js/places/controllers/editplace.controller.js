(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('EditPlaceController', EditPlaceController);

  EditPlaceController.$inject = ['$scope', 'place', '$mdDialog'];

  function EditPlaceController($scope, place, $mdDialog) {
    $scope.place = place;
    var hi = this;
    hi.place = place;

  //  console.log('EditPlaceController: place=', hi.place);

  //
  //   // Define variables for our Map object
  // var areaLat      = 44.2126995,
  //     areaLng      = -100.2471641,
  //     areaZoom     = 12;


  // activate();

  }

// function activate(){
//   uiGmapGoogleMapApi.then(function(maps) {
//     $scope.map     = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
//     $scope.options = { scrollwheel: false };
//     var events = {
//           places_changed: function (searchBox) {}
//         }
//     $scope.searchbox = { template:"searchbox.template", events:events};
//   });
// }

  // function clear() {
  //   $scope.location = {
  //     name: null,
  //     lat: null,
  //     lng: null
  //   };
  // };

})();