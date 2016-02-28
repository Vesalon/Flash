'use strict';

angular
  .module('hapin.haps.controllers')
  .controller('HapsController', HapsController);

HapsController.$inject = ['$scope', '$state', 'Auth', 'Haps'];

function HapsController($scope, $state, Auth, Haps) {
  var hi = this;
  //  hi.col = [];
  hi.isAuthenticated = Auth.isAuthenticated();
  hi.list = [];
  hi.swipelist = [];
  activate();

  function activate() {
    //  if (hi.isAuthenticated) {
    //   Haps.get()
      Haps.all()
        .then(hapsSuccessFn, hapsErrorFn);
      //}

    $scope.$on('hap.created', function(event, hap) {
      console.log('hap.created ' + friend);
      hi.list.unshift(hap);
      hi.swipelist.unshift(Swiped.init({
          query: '.id' + hap.id,
          right: 400,
          left: 400,
          onOpen: function() {
              this.destroy(true)
          },
          onClose: function() {
              console.log('close')
          }
      }));
    });

    $scope.$on('hap.created.error', function() {
      console.log('hap.created.error!!!!');
      hi.list.shift();
      hi.swipelist.shift();
    });

    $scope.$on('sliding-card:hap-swiped-left', function(ev, args) {
      // console.log('caught sliding-card:hap-swiped-left');
      var id = args.value;
      console.log('TODO: accept hap id=', id);
      console.log('hap=', args.object);
      var hap = args.object;
      //TODO: accept hap;
      // hi.list.unshift(hap);

    });

    $scope.$on('sliding-card:hap-swiped-right', function(ev, args) {
      // console.log('caught sliding-card:hap-swiped-right');
      var id = args.value;
      console.log('TODO: reject hap id=', id);
      // var hap = args.object;
      // console.log('hap=', args.object);

      // var index = -1;
      // for (var i = 0; i < hi.list.length; ++i) {
      //   if (hi.list[i].id == id) {
      //     index = i;
      //     break;
      //   }
      // }
      // hi.list.splice(index,1);

      // activate();
      //TODO: reject hap

    });

    function hapsSuccessFn(data, status, headers, config) {
      hi.list = data.data;
      for(var i = 0; i < hi.list.length; i++) {
        hi.swipelist = Swiped.init({
            query: '.id' + hi.list[i].id,
            right: 400,
            left: 400,
            onOpen: function() {
                this.destroy(true)
            },
            onClose: function() {
                console.log('close')
            }
        });
        console.log(hi.swipelist[i]);
      }
    }

    function hapsErrorFn(data, status, headers, config) {
      console.log(data.error);
    }

  }

  // $scope.onHapSwipeLeft = function(ev, hap) {
  //   // console.log('hapid=', hap);
  //   // $scope.moveDir='move-left';
  //     // alert('You swiped LEFT hap: ' + hap.title);
  //   };
  //
  //   $scope.onHapSwipeRight = function(ev, hap) {
  //     // console.log('hapid=', hap);
  //     // $scope.moveDir='move-right';
  //       // alert('You swiped RIGHT hap: ' + hap.title);
  //     };

  // function activate() {
  //   $scope.$watchCollection(function () { return $scope.haps; }, render);
  // }
  //
  // function render(current, original) {
  //   if (current !== original) {
  //     //console.log(original);
  //   //  console.log(current);
  //     hi.col = [];
  //     for (var i = 0; i < current.length; ++i) {
  //       hi.col.push(current[i]);
  //     }
  //     //console.log(hi.col);
  //   }
  // }
}
