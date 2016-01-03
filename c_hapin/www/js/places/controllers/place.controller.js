(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('PlaceController', PlaceController);

  PlaceController.$inject = ['$scope', 'Auth', 'Places', '$sce', '$timeout'];

  function PlaceController($scope, Auth, Places, $sce, $timeout) {
    var hi = this;
    hi.loadingMap = false;
    hi.loadMap = loadMap;
    //  hi.showMapSpinner = showMapSpinner;
    // console.log('PlaceController: place=', $scope.place);
    // console.log('PlaceController: mode=', $scope.mode);

    $scope.location = {
      name: null,
      lat: null,
      lng: null
    };

    //hi.showMapSpinner(true);

    //  $timeout(function() {
    //    console.log('PlaceController: about to get the map');
    //        loadMap(adjustedLocation)
    //}, 2000)

    // $scope["onIframeLoaded"] = function() {
    //   // console.log('controller: iframe loaded')
    //   hi.loadingMap = false;
    //   $scope.$apply();
    // };
    $scope.$on('iframeLoaded', function() {
      console.log('caught iframeLoaded')
      hi.loadingMap = false;
      $scope.$apply();
    })

    // $scope.$on('new-hap:place-deselected', function() {
    //   console.log('caught new-hap:place-deselected')
    //   // hi.loadingMap = false;
    //   // $scope.$apply();
    // })

    // $scope.$on('location-picker:location-picked', function() {
    //   $timeout(function() {
    //   console.log('location-picker:location-picked $scope.place = ', $scope.place);
    //   console.log('location-picker:location-picked $scope.place.nickname = ', $scope.place.nickname);
    //   $scope.place.address = $scope.location.address;
    //    console.log('location-picker:location-picked $scope.place.address = ', $scope.place.address);
    //
    //   // var adjustedLocation = adjustLocation($scope.location);
    //   //
    //   // $timeout(function() {
    //   //   console.log('PlaceController: about to get the map');
    //   //   if (adjustedLocation && adjustedLocation.length) {
    //   //     console.log('PlaceController: starting to get the map');
    //   //     getMap(adjustedLocation)
    //   //   }
    //   // })
    //
    //   loadMap($scope.place.address);
    // });
    // });

    // $scope.$on('places:place-selected', function() {
    //   $timeout(function() {
    //     loadMap($scope.place.address);
    //   })
    // });

    // $scope.$on('new-hap:place-deselected', function() {
    //   // console.log('caught new-hap:place-deselected');
    //   $scope.map.url = "";
    // });

    function loadMap(address) {
      $timeout(function() {
          hi.loadingMap = true;
        })
        .then(function() {
          $timeout(function() {
            if (address && address.length) {
              var adjustedAddress = address.replace(/ /g, "+");
              //  getMap(adjustedAddress);
              $scope.map = {
                url: $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=" + "AIzaSyChSSPsXPDeKLpm0-iYoeRq5Gdm2NoYwuo" + "&q=" + adjustedAddress + "&zoom=16")
              }
            }
          })
        });



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


    // // http://stackoverflow.com/questions/24459787/google-embeded-map-renders-broken-sometimes
    // function getMap(adjustedLocation) {
    //   $scope.map = {
    //     url: $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=" + "AIzaSyChSSPsXPDeKLpm0-iYoeRq5Gdm2NoYwuo" + "&q=" + adjustedLocation + "&zoom=16" )
    //   }
    // }

  }
})();
