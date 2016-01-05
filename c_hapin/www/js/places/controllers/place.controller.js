(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('PlaceController', PlaceController);

  PlaceController.$inject = ['$scope', 'Auth', 'Places', '$sce', '$timeout'];

  function PlaceController($scope, Auth, Places, $sce, $timeout) {
    var hi = this;
    //  var hi.mapPromise;
    hi.loadingMap = false;
    hi.loadMap = loadMap;
    hi.formatForMap = formatForMap;
    // hi.handleDestroyEvent = handleDestroyEvent;
    // hi.distroyForTesting = distroyForTesting;
    //  hi.showMapSpinner = showMapSpinner;

    $scope.location = {
      name: null,
      lat: null,
      lng: null
    };


    $scope.$on('iframeLoaded', function() {
      // console.log('caught iframeLoaded')
      hi.loadingMap = false;
      $scope.$apply();
    })


    // // cleanup : #12 in http://www.toptal.com/angular-js/top-18-most-common-angularjs-developer-mistakes
    // $scope.$on('$destroy', function(event) {
    //   console.log('place caught destroy event');
    //   $timeout.cancel(mapPromise);
    //   // nullify the DOM-bound model
    //   $scope.domElement = null;
    // });


    function loadMap(input) {
      $timeout(function() {
          hi.loadingMap = true;
        })
        .then(function() {
          $scope.mapPromise = $timeout(function() {
              // console.log('executing the promise');
              if (input && input.length) {
                var adjustedInput = input.replace(/ /g, "+");
                //  getMap(adjustedAddress);
                $scope.map = {
                  url: $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=" + "AIzaSyChSSPsXPDeKLpm0-iYoeRq5Gdm2NoYwuo" + "&q=" + adjustedInput + "&zoom=16")
                }
              }
            })
            $scope.mapPromise.then(function() {
                // console.log("Timer resolved!", Date.now());
                null;
              },
              function() {
                console.log("Timer rejected!", Date.now());
              }
            );
        });
    };

    function formatForMap(name, address){
      var formatted;
      if (name && name.length) {
        formatted = name + ', ';
      };
      if (address && address.length) {
        formatted = (formatted && formatted.length) ? formatted + ', ' + address : address;
      };
      return formatted;
    }


    // function distroyForTesting() {
    //   $timeout(function() {
    //     console.log('calling $destroy manually for testing purposes');
    //     $scope.$destroy();
    //   });
    // }



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
