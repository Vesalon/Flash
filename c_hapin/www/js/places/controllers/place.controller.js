(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('PlaceController', PlaceController);

  PlaceController.$inject = ['$scope', 'Auth', 'Places', '$sce', '$timeout'];

  function PlaceController($scope, Auth, Places, $sce, $timeout) {
    var hi = this;
    console.log('PlaceController: place=', $scope.place);

    $scope.location = {
      name: null,
      lat: null,
      lng: null
    };

    $scope.$watchCollection('$scope.location', function() {
      var adjustedLocation = adjustLocation($scope.location);

      $timeout(function() {
        if(adjustedLocation && adjustedLocation.length){
          getMap(adjustedLocation)
        }        
      }, 2000)
    }, true)



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
    function getMap(location) {
      $scope.map = {
        url: $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=" + "AIzaSyChSSPsXPDeKLpm0-iYoeRq5Gdm2NoYwuo" + "&q=" + adjustedLocation + "&zoom=16")
      }
    }

    function adjustLocation(location) {
      if(location && location.length){
        var adjustedLocation = location.replace(/ /g, "+");
      }else{

      };

    }

  }
})();
