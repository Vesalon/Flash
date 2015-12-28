(function() {
  'use strict';

  //http://plnkr.co/edit/5HPFelbDFUrzeccGfgYx

  angular
    .module('hapin.utils.directives')
    .directive('locationPicker', locationPicker);

  locationPicker.$inject = ['$rootScope'];

  function locationPicker($rootScope) {
    return {
      controller: 'LocationPickerController',
      restrict: 'E',
      require: 'ngModel',
      template: '<input id="{{ id }}" type="text" class="{{ class }}" placeholder="{{ placeholder }}"  ng-model="place.address" />',
      scope: {
        id: '@',
        class: '@',
        placeholder: '@',
        place: '='
      },
      // compile: function(element, attrs) {
      //   if (!location) {
      //     location = place.address;
      //     console.log('location = '. location);
      //   }
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
          types: ['geocode']
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
            console.log('Location-picker-directive: entered scope.$applyAsync')
            controller.$setViewValue({
              // place: place,
              address: input.value,
              name: name,
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
