// Application
Ext.Loader.setConfig({ enabled: true });

Ext.application({
	name: 'OnDraw',
	
	views: [ 
	         'Index',	// DP + Main
	         	'DecisionPoint',		// DP Set
			         'Intro',			// first view 
			         'Login',			// login view
			         'Register',		// regist view
			         'SetPW',			// reset PW view
			         'Conditions',		// conditions view
	         
		         'Main',				// main set
			         'Mainview',		// room select view
			         'Draw',			// canvas view
			         'Settings',		// settings view
			         	'Setting',		// first view
			         	'Dev',			// dev view
			         	'Info',			// info view
			         	'Notice'		// notice view
	       ],
    controllers: [ 
                   'DecisionPoint',
                   'Main',
                   'Draw',
                   'Setting'
                 ],

    launch: function() {
    	server = io.connect('http://14.63.212.243:52273');
        var panel = Ext.create('OnDraw.view.Index', {fullscreen: true});
        Ext.Viewport.add(panel);
    }

});
