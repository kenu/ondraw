// global variable
var strokeStyle = 'black'			// line color
  , fillStyle = 'white'				// fill color
  , lineWidth = 1					// line width
  , isDraw = false					// draw status
  , mode = 'pen'					// pen mode
  , testNick = Math.floor(Math.random()*99+10)	  
  , newPoint, oldPoint				// point set
  , canvas							// canvas panel
  , context							// canvas settings
  , server;							// nodejs socket.io

// Point class
Ext.define('Point', {
    config: {
        x: null,
        y: null,
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