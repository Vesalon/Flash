'use strict';

angular
  .module('hapin.haps.services')
  .service('sharedProp', sharedProp);

//sharedProp.$inject = ['$http'];

function sharedProp() {
  var theHap = new Object();

  return {
      getHap: function() {
          return theHap;
      },
      setHap: function(value) {
          theHap = value;
      }
  }
}
