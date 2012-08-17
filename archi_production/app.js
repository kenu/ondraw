// global variable
 
var strokeStyle = 'black';			// line color
var fillStyle = 'white';			// fill color
var lineWidth = 1;					// line width
var isDraw = false;					// draw status
var mode = 'pen';					// pen mode
var newPoint, oldPoint;

// Point class
Ext.define('Point', {
    config: {
        x: null,
        y: null,
        width: null,
        color: null,
        standard_width: 640,
        standard_height: 960,
        current_width: null,
        current_height: null,
    },
 
    constructor: function(config) {
        this.initConfig(config);
    },
    
    cx : function() {
    	return ((this._x * this._standard_width) / this._current_width);
    },
    cy : function() {
    	return ((this._y * this._standard_height) / this._current_height);
    }
});

// Application
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
    name: 'MyApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Draw'
    ],
    controllers: [
        'Canvas',
        'Main'
    ],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MyApp.view.Draw', {fullscreen: true}));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
