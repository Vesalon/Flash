(function() {
  'use strict';

//http://plnkr.co/edit/5HPFelbDFUrzeccGfgYx?p=preview

  angular
    .module('hapin.utils.directives')
    .directive('locationPicker', locationPicker);

    function locationPicker() {
       return {
         restrict: 'E',
         require: 'ngModel',
         template: '<input id="{{ id }}" type="text" class="{{ class }}" placeholder="{{ placeholder }}" />',
         scope: {
           id: '@',
           class: '@',
           placeholder: '@',
         },
         link: function(scope, element, attrs, controller) {
           var input = element.find('input')[0];

           controller.$formatters.push(function (value) {
             return value ? value.name : value;
           });

           controller.$render = function () {
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
             var lat = place.geometry.location.lat();
             var lng = place.geometry.location.lng();

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
               controller.$setViewValue({
                 name: name,
                 lat: lat,
                 lng: lng
               });
             });
           });
         }
       };
     }



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
    //  }]);


})();
