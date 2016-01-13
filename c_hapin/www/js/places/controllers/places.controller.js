(function() {
  'use strict';

  angular
    .module('hapin.places.controllers')
    .controller('PlacesController', PlacesController);

  PlacesController.$inject = ['$scope', '$mdDialog', '$mdMedia', '$rootScope', 'Places', 'Auth']

  function PlacesController($scope, $mdDialog, $mdMedia, $rootScope, Places, Auth) {
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    hi.places = [];
    hi.editPlace = editPlace;
    hi.newPlace = newPlace;
    hi.fireSelectedPlaceEvent = fireSelectedPlaceEvent;
    hi.fireCancelEvent = fireCancelEvent;
    hi.showFilter = false;
    // hi.cancelFilter = cancelFilter;
    // hi.cancelSearch = cancelSearch;
    hi.showLocationPicker = false;
    hi.cancelFilterAndSearch= cancelFilterAndSearch;
    hi.loadingMap = false;
    hi.mapLoaded = false;

    $scope.location = {
      name: null,
      address: null,
    };

    // $scope.$watch('query',function(newQuery,oldQuery){
    //    console.log('Places query = ', newQuery);
    //  });
    //
    //  $scope.$watchCollection('filteredPlaces',function(newFilteredPlaces,oldFilteredPlaces){
    //     if(!newFilteredPlaces || !newFilteredPlaces.length){
    //       console.log('places:filtered-places-empty');
    //       $scope.$broadcast('places:filtered-places-empty');
    //     }
    //   });

    $scope.$on('location-picker:location-picked', function() {
     console.log('directive caugth location-picker:location-picked location== ', $scope.location);
     hi.loadingMap = true;
     
      // // controller.loadMap(scope.location.address);
      // if (scope.location) {
      //   // console.log('loading map by formatted location: ', controller.formatForMap(scope.location.name, scope.location.address));
      //   // controller.loadMap(controller.formatForMap(scope.location.name, scope.location.address));
      //   console.log('loading map by formatted location: ', $scope.location);
      //   controller.loadMap($scope.location);
      // };
    });

    $scope.$on('map-presenter:map-loaded', function() {
      console.log('caught map-presenter:map-loaded');
      hi.loadingMap = false;
      hi.mapLoaded = true;
      $scope.$apply();
    })

    activate();

    function activate() {
      //console.log('hi.isAuthenticated=' , hi.isAuthenticated);
      if (hi.isAuthenticated) {
       Places.get()
          .then(placesSuccessFn, placesErrorFn);
      }


      // console.log('PlacesController.activate()');
      $scope.$watchCollection(function() {
        return hi.places;
      }, render);


       $scope.$on('place.created', function (event, place) {
        //  console.log('place.created ' + place);
         hi.places.unshift(place);
       });

       $scope.$on('place.created.error', function () {
        //  console.log('place.created.erro!!!!');
         hi.places.shift();
       });

      function placesSuccessFn(data, status, headers, config) {
        // console.log('placesSuccessFn' + data.data);
        hi.places = data.data;
      }

      function placesErrorFn(data, status, headers, config) {
        // console.log(data.error);
      }

    }

    /**
     * @name render
     * @desc Renders Haps into columns of approximately equal height
     * @param {Array} current The current value of `vm.haps`
     * @param {Array} original The value of `vm.haps` before it was updated
     * @memberOf flashweb.haps.controllers.HapsController
     */
    function render(current, original) {
      if (current !== original) {
        //console.log(original);
        //  console.log(current);
        hi.places = [];
        for (var i = 0; i < current.length; ++i) {
          hi.places.push(current[i]);
        //  console.log('PlacesController.render: pushing=', current[i]);
        }
        // console.log('PlacesController.render: hi.places.length=', hi.places.length);
      }
    }

    function fireSelectedPlaceEvent($event, place) {
      // $scope.$emit('places:place-selected', {
      //   place: place
      // });
      console.log('fired places:place-selected')
      $rootScope.$broadcast('places:place-selected', {
        place: place
      });
      $mdDialog.hide();
    };

    function fireCancelEvent($event) {
      // $scope.$emit('places:place-selected', {
      //   place: place
      // });
      console.log('fired places:cancel')
      $rootScope.$broadcast('places:cancel');
      $mdDialog.cancel();
    };

    // function cancelFilter() {
    //   hi.showFilter = false;
    //   $scope.query = "";
    // };
    //
    // function cancelSearch() {
    //   hi.showLocationPicker = false;
    //   // $scope.query = "";
    // };

    function cancelFilterAndSearch() {
      hi.showFilter = false;
      hi.showLocationPicker = false;
      $scope.query = "";
      $scope.location = {
        name: null,
        address: null,
      };
      hi.loadingMap = false;
      hi.mapLoaded = false;

    };

    function editPlace(ev, place) {
      var editedPlace = angular.copy(place);
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
          controller: 'EditPlaceController',
          //  controllerAs: 'hi',
          // controller: ['$scope', 'place', 'uiGmapGoogleMapApi', function($scope, place, uiGmapGoogleMapApi) {
          //   $scope.place = place;
          //   console.log('inline controller: place=', $scope.place);
          //     // Define variables for our Map object
          //   var areaLat      = 44.2126995,
          //       areaLng      = -100.2471641,
          //       areaZoom     = 12;
          //
          //   uiGmapGoogleMapApi.then(function(maps) {
          //     $scope.map     = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
          //     $scope.options = { scrollwheel: false };
          //     var events = {
          //           places_changed: function (searchBox) {}
          //         }
          //     $scope.searchbox = { template:"searchbox.template", events:events};
          //   });
          // }],
          templateUrl: 'templates/private/places/editplace.html',
          // template: '',
          locals: {
            //  place: place,
            editedPlace: editedPlace,
            // mode: 'edit'
          },
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: useFullScreen,
        })
        .then(function(answer) {
          console.log('DONE from editPlace in palces controller')
          console.log(editedPlace)
          // TODO: save edited place and update cache
          Places.update(editedPlace);
          // $scope.status = 'Your change is: "' + editedPlace.nickname + '".';
          // refresh model
          // for (var i = 0; i < hi.places.length; ++i) {
          //   if (hi.places[i].id == editedPlace.id) {
          //     hi.places[i] = editedPlace;
          //     break;
          //   }
          // }
          // activate();
        }, function() {
          console.log('CANCEL from editPlace in palces controller')
          // $scope.status = 'You cancelled the dialog.';
        });
    };

    function newPlace(ev, place) {
      var newPlace;// = angular.copy(place);
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
          controller: 'NewPlaceController',
          //  controllerAs: 'hi',
          // controller: ['$scope', 'place', 'uiGmapGoogleMapApi', function($scope, place, uiGmapGoogleMapApi) {
          //   $scope.place = place;
          //   console.log('inline controller: place=', $scope.place);
          //     // Define variables for our Map object
          //   var areaLat      = 44.2126995,
          //       areaLng      = -100.2471641,
          //       areaZoom     = 12;
          //
          //   uiGmapGoogleMapApi.then(function(maps) {
          //     $scope.map     = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
          //     $scope.options = { scrollwheel: false };
          //     var events = {
          //           places_changed: function (searchBox) {}
          //         }
          //     $scope.searchbox = { template:"searchbox.template", events:events};
          //   });
          // }],
          templateUrl: 'templates/private/places/newplace.html',
          // template: '',
          locals: {
            //  place: place,
            newPlace: newPlace,
            // mode: 'edit'
          },
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: useFullScreen,
        })
        .then(function(newPlace) {
          // $scope.status = 'Your change is: "' + editedPlace.nickname + '".';
          console.log('new place = ', newPlace);
          hi.fireSelectedPlaceEvent(null, newPlace);
          //activate();
        }, function() {
          // $scope.status = 'You cancelled the dialog.';
        });
    };

    //   // Define variables for our Map object
    // var areaLat      = 45.2126995,
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
    //
    //   function clear() {
    //     $scope.location = {
    //       name: null,
    //       lat: null,
    //       lng: null
    //     };
    //   };

  }
})();
