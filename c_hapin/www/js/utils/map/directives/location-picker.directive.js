(function() {
  'use strict';

  //http://plnkr.co/edit/5HPFelbDFUrzeccGfgYx
  // http://stackoverflow.com/questions/14115701/angularjs-create-a-directive-that-uses-ng-model

  // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete

  angular
    .module('hapin.utils.directives')
    .directive('locationPicker', locationPicker);

  locationPicker.$inject = ['$rootScope'];

  function locationPicker($rootScope) {
    return {
      controller: 'LocationPickerController',
      restrict: 'E',
      require: 'ngModel',
      template: '<input id="{{ id }}" type="text" class="{{ class }}" placeholder="{{ placeholder }}" />',
      scope: {
        id: '@',
        class: '@',
        placeholder: '@',
        // place: '='
      },
      // compile: function(element, attrs) {
      //   // if (!location) {
      //     attrs[location] = angular.copy(place.address);
      //     consoe.log('attrs = ', attrs);
      //     consoe.log('attrs[location] = ', attrs[location]);
      //   // }
      // },
      link: function(scope, element, attrs, controller) {
        var input = element.find('input')[0];

        controller.$formatters.push(function(value) {
          return value ? value.name : value;
        });

        controller.$render = function() {
          input.value = controller.$modelValue.name;
        };

        var autocomplete = new google.maps.places.Autocomplete(input, {
          types: [] // all
          // types: ['address', 'establishment']
        });

        var componentForm = {
          locality: 'long_name',
          administrative_area_level_1: 'short_name',
          country: 'long_name'
        };

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
          var place = autocomplete.getPlace();
          //  var lat = place.geometry.location.lat();
          //  var lng = place.geometry.location.lng();

          var name = "";

          for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
              if (name !== "") {
                name += ", ";
              }

              var val = place.address_components[i][componentForm[addressType]];
              name += val;
            }
          }

          scope.$applyAsync(function() {
            // console.log('Location-picker-directive: entered scope.$applyAsync')
            // var gName = (place.geomerty && place.geomery.name) ? place.geometry: '';
            // console.log('place = ', place);
            // console.log('place.name = ', place.name);
            // console.log('place.address = ', place.formatted_address);
            // console.log('place.phone = ', place.formatted_phone_number);
            var mName = place.name;
            if (place.formatted_address.indexOf(place.name) >= 0) {
              mName = null;
            }
            // console.log('mName = ', mName);
            controller.$setViewValue({
              //  place: place,
              address: place.formatted_address,
              name: mName,
              // input_value: input.value,
              //  lat: lat,
              //  lng: lng
            });
            //  http://stackoverflow.com/questions/26383507/listen-for-form-submit-event-in-directive
            $rootScope.$broadcast('location-picker:location-picked');
          });
        });
      }
    };
  }

  //
  //  .controller('MyController', ['$scope', function($scope) {
  //    $scope.location = {
  //      name: null,
  //      lat: null,
  //      lng: null
  //    };
  //
  //    $scope.clear = function () {
  //      $scope.location = {
  //        name: null,
  //        lat: null,
  //        lng: null
  //      };
  //    };
  // //  }]);


})();
