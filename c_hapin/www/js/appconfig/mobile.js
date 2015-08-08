'use strict';

var app = {
    // Application Constructor
    initialize: function() {
      console.log('Bootstrapping!');

      angular.element(document).ready(function() {
        angular.bootstrap($('html'), ['hapin']);
      });

    console.log('Completed bootstrapping.');
    }

};

app.initialize();
