(function () {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('PlaceController', PlaceController);

  PlaceController.$inject = ['$scope', 'Auth', 'Places', '$sce', '$timeout'];

  function PlaceController($scope, Auth, Places, $sce, $timeout) {
    var hi = this;
     console.log('PlaceController: place=', $scope.place);

     $scope.$watchCollection('place.address', function() {
    //  $scope.getPreAddress()

      $timeout(function() {
          getMap()
      },2000)
   },true)



  //    // Define variables for our Map object
  //  var areaLat      = 44.2126995,
  //      areaLng      = -100.2471641,
  //      areaZoom     = 12;
   //
   //
  //   dispalyMap();
   //
  //  function dispalyMap(){
  //    uiGmapGoogleMapApi.then(function(maps) {
  //      $scope.map     = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
  //      $scope.options = { scrollwheel: false };
  //      var events = {
  //            places_changed: function (searchBox) {}
  //          }
  //      $scope.searchbox = { template:"searchbox.template", events:events};
  //    });
  //  }

  // $scope.getMap = function() {
  //       $http.get("/src/json/map-keys.json").success(function(data){
  //           $scope.keys = data
  //           $scope.map = {
  //               url:$sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key="+$scope.keys.google.google_key+"&q="+$scope.getPreAddress()+"&zoom=16")
  //           }
  //       })
  //   }


// http://stackoverflow.com/questions/24459787/google-embeded-map-renders-broken-sometimes
  function getMap() {
    var adjustedAddress = $scope.place.address.replace(/ /g, "+");
            $scope.map = {
                url:$sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key="+"AIzaSyChSSPsXPDeKLpm0-iYoeRq5Gdm2NoYwuo"+"&q="+adjustedAddress+"&zoom=16")
            }
    }

  }
})();
