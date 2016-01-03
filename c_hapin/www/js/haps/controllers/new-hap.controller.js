(function() {
  'use strict';

  angular
    .module('hapin.haps.controllers')
    .controller('NewHapController', NewHapController);

  NewHapController.$inject = ['$scope', '$state', 'Auth', 'Haps', 'Places','$mdpDatePicker'];

  function NewHapController($scope, $state, Auth, Haps, Places, $mdpDatePicker) {
    var hi = this;
    hi.isAuthenticated = Auth.isAuthenticated();
    var theHap = new Object();
    hi.theHap = theHap;
    hi.resetTheLocation = resetTheLocation;

    // hi.clear = clear;
    //
    // $scope.location = {
    //   name: null,
    //   lat: null,
    //   lng: null
    // };

    hi.placesList = [];
    activate();

    function activate() {
    //  hi.showDatePicker();

      if (hi.isAuthenticated) {
       Places.get()
          .then(placesSuccessFn, placesErrorFn);
      }

       $scope.$on('place.created', function (event, place) {
         console.log('place.created ' + place);
         hi.placesList.unshift(place);
       });

       $scope.$on('place.created.error', function () {
         console.log('place.created.erro!!!!');
         hi.placesList.shift();
       });

      function placesSuccessFn(data, status, headers, config) {
        hi.placesList = data.data;
      }

      function placesErrorFn(data, status, headers, config) {
        console.log(data.error);
      }

      $scope.$on('places:place-selected', function (event, arg) {
        // console.log('event places:place-selected was fired for ' );
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

    function resetTheLocation(){
      // console.log('firing new-hap:place-deselected');
      hi.theHap.location = undefined;
      $scope.$broadcast("new-hap:place-deselected");
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
