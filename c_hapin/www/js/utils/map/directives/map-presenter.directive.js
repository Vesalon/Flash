(function() {
  'use strict';

  angular
    .module('hapin.utils.directives')
    .directive('mapPresenter', mapPresenter);

  mapPresenter.$inject = ['$rootScope', '$timeout'];

  function mapPresenter($rootScope, $timeout) {
    return{
      restrict: 'E',
      template: '<iframe width="100%" height="100%" frameborder="0" style="border:0" ng-src={{map.url}} allowfullscreen></iframe>',
      scope: {
        location: '='
      },
      controller: 'MapPresenterController',

      link: function(scope, element, attrs, controller) {

        var iframe = element.find("iframe")[0];

        iframe.onload = function() {
          $rootScope.$broadcast('map-presenter:map-loaded');
        };

        // this will exec every time a character is typed in location-picker
        // which in turn will call loadMap() on every character - trying to fix this
        scope.$watch('location', function(location) {
          // console.log("scope.place CHANGED");
          console.log("location = ", scope.location);
          $timeout(
              function() {
                scope.map = undefined; // necessary for the iframe to reload so the spinner is removed
                scope.$apply();
                console.log('map is set to undefined');
              })
            .then(function() {
            //  console.log('place = ', place);
              if (scope.location) {
                console.log('$watch: loading map by formatted place: ', controller.formatForMap(scope.location.name, scope.location.address));
                controller.loadMap(controller.formatForMap(scope.location.name, scope.location.address));
                // console.log('loading map for location', scope.location);
                // controller.loadMap(scope.location);
              };

            })
        }, true);

        // scope.$on('location-picker:location-picked', function() {
        //  console.log('directive caugth location-picker:location-picked location== ', scope.location);
        //
        //    $timeout(
        //        function() {
        //          scope.map = undefined; // necessary for the iframe to reload so the spinner is removed
        //          scope.$apply();
        //          console.log('re-initialized the map iframe');
        //        })
        //      .then(function() {
        //       // console.log('place = ', place);
        //        if (scope.location) {
        //
        //          console.log('loading map by formatted location: ', scope.location);
        //          controller.loadMap(scope.location);
        //        };
        //
        //      });
        //
        //
        //
        //   // // controller.loadMap(scope.location.address);
        //   // if (scope.location) {
        //   //   // console.log('loading map by formatted location: ', controller.formatForMap(scope.location.name, scope.location.address));
        //   //   // controller.loadMap(controller.formatForMap(scope.location.name, scope.location.address));
        //   //   console.log('loading map by formatted location: ', scope.location);
        //   //   controller.loadMap(scope.location);
        //   // };
        //   // // if(scope.location && (scope.location.name || scope.location.address)){
        //   // //   if(!scope.place){
        //   // //     scope.place = {
        //   // //       name: scope.location.name,
        //   // //       address: scope.location.address
        //   // //     }
        //   // //   }else{
        //   // //     scope.place.name = scope.location.name;
        //   // //     scope.place.address = scope.location.address;
        //   // //   };
        //   //
        //   // // };
        // });

        // // cleanup : #12 in http://www.toptal.com/angular-js/top-18-most-common-angularjs-developer-mistakes
        // scope.$on('$destroy', controller.handleDestroyEvent());



      }


    };
  };

  angular
    .module('hapin.utils.directives')
    .controller('MapPresenterController', MapPresenterController);

    MapPresenterController.$inject = ['$scope', 'Auth', 'Places', '$sce', '$timeout'];

    function MapPresenterController($scope, Auth, Places, $sce, $timeout) {
      var hi = this;
      //  var hi.mapPromise;
      hi.loadingMap = false;
      hi.loadMap = loadMap;
      hi.formatForMap = formatForMap;
      // hi.handleDestroyEvent = handleDestroyEvent;
      // hi.distroyForTesting = distroyForTesting;
      //  hi.showMapSpinner = showMapSpinner;



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
        // console.log('in LoadMap input = ', input);
        $timeout(function() {
            hi.loadingMap = true;
          })
          .then(function() {
            $scope.mapPromise = $timeout(function() {
                // console.log('executing the promise');
                // console.log('input.length=', input.length);
                if (input && input.length) {
                  // console.log('about to set map.url');
                  var adjustedInput = input.replace(/ /g, "+");
                  //  getMap(adjustedAddress);
                  $scope.map = {
                    url: $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=" + "AIzaSyChSSPsXPDeKLpm0-iYoeRq5Gdm2NoYwuo" + "&q=" + adjustedInput + "&zoom=16")
                  }
                  // console.log('map.url = ', $scope.map);
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

    }


})();
