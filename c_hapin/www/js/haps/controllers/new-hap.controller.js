(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('NewHapController', NewHapController);

<<<<<<< HEAD
  NewHapController.$inject = ['$scope', '$state', 'Auth', 'Haps', 'Places', '$mdpDatePicker', '$mdMedia', '$mdDialog'];

  function NewHapController($scope, $state, Auth, Haps, Places, $mdpDatePicker, $mdMedia, $mdDialog) {

=======
  NewHapController.$inject = ['$scope', '$state', 'Auth', 'Haps', 'Places','$mdpPicker', 'relativeDateFilter'];

  function NewHapController($scope, $state, Auth, Haps, Places, $mdpPicker, relativeDateFilter) {
>>>>>>> something
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    var theHap = new Object();
    hi.theHap = theHap;
    hi.showDatePicker = showDatePicker;
<<<<<<< HEAD
    hi.resetTheLocation = resetTheLocation;
    hi.showPlaces = showPlaces;
    // hi.friends = [];
    // hi.guestlist = [];
    // hi.theHap.guestlist = [];

=======
    hi.showTimePicker = showTimePicker;
	hi.showPicker = showPicker;
    $scope.currentDate = new Date();

	$scope.currentDate.setHours($scope.currentDate.getHours() + 1);
>>>>>>> something
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

      $scope.$on('guests:guest-selected', function (event, arg) {
        // console.log('event places:place-selected was fired for ' );
        hi.theHap.guestlist = arg.guestlist;
        // console.log(arg.guestlist);
        console.log(hi.theHap.guestlist);
        // console.log( hi.theHap);
      //  hi.placesList.unshift(place);
      });

    }

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
       });;
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
