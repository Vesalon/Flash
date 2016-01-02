(function() {
    'use strict';

    angular
      .module('hapin.places.controllers')
      .controller('PlaceController', PlaceController);

    PlaceController.$inject = ['$scope', 'Auth', 'Places', '$sce', '$timeout'];

    function PlaceController($scope, Auth, Places, $sce, $timeout) {
      var hi = this;
      hi.loadMap = loadMap;
      // console.log('PlaceController: place=', $scope.place);
      // console.log('PlaceController: mode=', $scope.mode);

      $scope.location = {
        name: null,
        lat: null,
        lng: null
      };

      //  $timeout(function() {
      //    console.log('PlaceController: about to get the map');
      //        loadMap(adjustedLocation)
      //}, 2000)


      $scope.$on('location-picker:location-picked', function() {
        //$scope.place.address = $scope.location.address;
        //  console.log('$scope.place.address = ', $scope.place.address);
        var adjustedLocation = adjustLocation($scope.location);

        $timeout(function() {
          console.log('PlaceController: about to get the map');
          if (adjustedLocation && adjustedLocation.length) {
            console.log('PlaceController: starting to get the map');
            getMap(adjustedLocation)
          }
        })
      });

      $scope.$on('places:place-selected', function() {
          $timeout(function() {
            loadMap();
          })
        });

        function loadMap() {
          console.log('PlaceController.loadMap()')
          if ($scope.place && $scope.place.address) {
            var adjustedLocation = $scope.place.address.replace(/ /g, "+");
            console.log('PlaceController.adjustedLocatin=' + adjustedLocation);
            getMap(adjustedLocation);
          }


        };

        // $scope.$watchCollection('$scope.location', function() {
        //   var adjustedLocation = adjustLocation($scope.location);
        //   console.log('PlaceController: adjustedLocation = ', adjustedLocation);
        //
        //   $timeout(function() {
        //     console.log('PlaceController: about to get the map');
        //     if(adjustedLocation && adjustedLocation.length){
        //       console.log('PlaceController: starting to get the map');
        //       getMap(adjustedLocation)
        //     }
        //   }, 2000)
        // }, true)



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
        function getMap(adjustedLocation) {
          $scope.map = {
            url: $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=" + "AIzaSyChSSPsXPDeKLpm0-iYoeRq5Gdm2NoYwuo" + "&q=" + adjustedLocation + "&zoom=16")
          }
        }

        function adjustLocation(location) {
          console.log('location = ', location);
          if (location && location.address) {
            var adjustedLocation = location.address.replace(/ /g, "+");
          } else {

          };
          return adjustedLocation;
        }

      }
    })();
