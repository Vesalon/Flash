'use strict';

var app = {
    // Application Constructor
    initialize: function() {
      console.log('Bootstrapping!');
      //  this.bindEvents();

        //If cordova is present, wait for it to initialize, otherwise just try to
      	//bootstrap the application.
      	if (window.cordova !== undefined) {
      		console.log('Cordova found, wating for device.');
      		this.bindEvents();
      	} else {
      		console.log('Cordova not found, booting application');
      		receivedEvent('manual')
      	}
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //navigator.splashscreen.hide();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        //
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        console.log('Start event received, bootstrapping application setup.');
        angular.bootstrap($('html'), ['hapin']);

        //angular.bootstrap($('body'), ['hapin']);
    }
};

app.initialize();
