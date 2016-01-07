(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('NewHapController', NewHapController);

  NewHapController.$inject = ['$scope', '$state', 'Auth', 'Haps', 'Places', '$mdpDatePicker', '$mdMedia', '$mdDialog'];

  function NewHapController($scope, $state, Auth, Haps, Places, $mdpDatePicker, $mdMedia, $mdDialog) {
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    var theHap = new Object();
    hi.theHap = theHap;
    hi.showDatePicker = showDatePicker;
    hi.resetTheLocation = resetTheLocation;
    hi.showPlaces = showPlaces;

    // hi.clear = clear;
    //
    // $scope.location = {
    //   name: null,
    //   lat: null,
    //   lng: null
    // };

    // hi.placesList = [];
    activate();

    function activate() {
      //  hi.showDatePicker();

      // if (hi.isAuthenticated) {
      //  Places.get()
      //     .then(placesSuccessFn, placesErrorFn);
      // }
      //
      //  $scope.$on('place.created', function (event, place) {
      //    console.log('place.created ' + place);
      //    hi.placesList.unshift(place);
      //  });
      //
      //  $scope.$on('place.created.error', function () {
      //    console.log('place.created.erro!!!!');
      //    hi.placesList.shift();
      //  });
      //
      // function placesSuccessFn(data, status, headers, config) {
      //   hi.placesList = data.data;
      // }
      //
      // function placesErrorFn(data, status, headers, config) {
      //   console.log(data.error);
      // }

      $scope.$on('places:place-selected', function(event, arg) {
        console.log('new hap caught event places:place-selected was fired for ' );
        hi.theHap.location = arg.place;
        // console.log( hi.theHap);
        //  hi.placesList.unshift(place);
      });

    }

    function showDatePicker(ev) {
      $mdpDatePicker(ev, $scope.currentDate).then(function(selectedDate) {
        $scope.currentDate = selectedDate;
      });;
    };

    function resetTheLocation() {
      // console.log('firing new-hap:place-deselected');
      hi.theHap.location = undefined;
      //  $scope.$broadcast("new-hap:place-deselected");
    };

    function showPlaces(ev) {
      // var editedPlace = angular.copy(place);
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
          controller: 'PlacesDialogController',
          templateUrl: 'templates/private/places/placesDialog.html',
          // template: '',
          locals: {
            //  place: place,
            //  editedPlace: editedPlace,
            // mode: 'edit'
          },
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: useFullScreen,
          // openFrom: '#left',
          // closeTo: '#right',
          openFrom: {
            top: 50,
            width: 30,
            height: 80
          },
          closeTo: {
            left: 1500
          },
        })
        .then(function(answer) {
          console.log('DONE from showPlaces in new hap')
          // // $scope.status = 'Your change is: "' + editedPlace.nickname + '".';
          // // refresh model
          // for (var i = 0; i < hi.places.length; ++i) {
          //   if (hi.places[i].id == editedPlace.id) {
          //     hi.places[i] = editedPlace;
          //     break;
          //   }
          // }
          // activate();
        }, function() {
          console.log('CANCEL from showPlaces in new hap')
          // $scope.status = 'You cancelled the dialog.';
        });
    };


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
