(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('NewHapController', NewHapController);


  NewHapController.$inject = ['$scope', '$state', 'Auth', 'Haps', 'Places','$mdpPicker', 'relativeDateFilter', '$mdMedia', '$mdDialog'];

  function NewHapController($scope, $state, Auth, Haps, Places, $mdpPicker, relativeDateFilter, $mdMedia, $mdDialog) {
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    var theHap = new Object();
    hi.theHap = theHap;
    hi.openOptionsMenu = openOptionsMenu;
    hi.showDatePicker = showDatePicker;
    hi.showTimePicker = showTimePicker;
	hi.showPicker = showPicker;
    $scope.currentDate = new Date();
    hi.resetTheLocation = resetTheLocation;
    hi.resetTheGuests = resetTheGuests;
    hi.resetTheNameAndDesc = resetTheNameAndDesc;
   hi.showPlaces = showPlaces;
   hi.showGuests = showGuests;
   hi.showNameAndDesc = showNameAndDesc;
   hi.showTodo = showTodo;

	$scope.currentDate.setHours($scope.currentDate.getHours() + 1);
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

      $scope.$on('guests:guests-selected', function (event, arg) {
        console.log('event guests:guests-selected was caught for ' );
        hi.theHap.guestlist = arg.guestlist;
        // console.log(arg.guestlist);
        console.log(hi.theHap.guestlist);
        // console.log( hi.theHap);
      //  hi.placesList.unshift(place);
      });

    }

    function openOptionsMenu($mdOpenMenu, ev) {
      // originatorEv = ev;
      $mdOpenMenu(ev);
    };

    function showDatePicker(ev) {
      $mdpDatePicker(ev, $scope.currentDate).then(function(selectedDate) {
        $scope.currentDate = selectedDate;
      });;
    }

    function showTimePicker(ev) {
     	$mdpTimePicker(ev, $scope.currentDate).then(function(selectedDate) {
         $scope.currentDate = selectedDate;
       });;
     }

	  function showPicker(ev) {
     	$mdpPicker(ev, $scope.currentDate).then(function(selectedDate) {
         $scope.currentDate = selectedDate;
       });
     }

     function resetTheLocation() {
       hi.theHap.location = undefined;
    }

    function resetTheGuests() {
      hi.theHap.guestlist = [];
   }

   function resetTheNameAndDesc() {
     hi.theHap.name = undefined;
     hi.theHap.desc = undefined;
  }

    function showPlaces(ev) {
      // var editedPlace = angular.copy(place);
      var useFullScreen = true; //($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      console.log('useFullScreen=',useFullScreen);
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

    function showGuests(ev){
      var useFullScreen = true; //($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      console.log('useFullScreen=',useFullScreen);
      $mdDialog.show({
          // controller: 'PlacesDialogController',
          template: '<md-dialog aria-label="Guests" ng-cloak><md-dialog-content><guests></guests></md-dialog-content></md-dialog>',
          // template: '',
          locals: {},
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: useFullScreen,
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
          console.log('DONE from showGuests in new hap')

        }, function() {
          console.log('CANCEL from showGuests in new hap')
          // $scope.status = 'You cancelled the dialog.';
        });

    }

    function showNameAndDesc(ev){
      var useFullScreen = true; //($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      console.log('useFullScreen=',useFullScreen);
      $mdDialog.show({
          controller: function($scope, $mdDialog, name, desc){
            $scope.name = name;
            $scope.desc = desc;
            $scope.hide = function() {
              $mdDialog.hide({
                name: $scope.name,
                desc: $scope.desc
              });
            };
            $scope.cancel = function() {
              $mdDialog.cancel();
            };
          },
          templateUrl: 'templates/private/haps/name-and-desc.html',
          locals: {
            name: hi.theHap.name,
            desc: hi.theHap.desc
          },
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: useFullScreen,
          openFrom: {
            top: 50,
            width: 30,
            height: 80
          },
          closeTo: {
            left: 1500
          },
        })
        .then(function(data) {
          console.log('DONE from showNameAndDesc in new hap; answer =', data);
          hi.theHap.name = data.name;
          hi.theHap.desc = data.desc;
        }, function() {
          console.log('CANCEL from showNameAndDesc in new hap')
          // $scope.status = 'You cancelled the dialog.';
        });

    }

    function showTodo(ev){
      var useFullScreen = true; //($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      console.log('useFullScreen=',useFullScreen);
      $mdDialog.show({
          // controller: 'PlacesDialogController',
          template: '<md-dialog aria-label="Guests" ng-cloak><md-dialog-content><todo></todo></md-dialog-content></md-dialog>',
          // template: '',
          locals: {},
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: useFullScreen,
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
          console.log('DONE from showGuests in new hap')

        }, function() {
          console.log('CANCEL from showGuests in new hap')
          // $scope.status = 'You cancelled the dialog.';
        });

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
