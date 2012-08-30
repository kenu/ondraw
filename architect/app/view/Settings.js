// Settings
Ext.define('OnDraw.view.Settings', {
	extend : 'Ext.Panel',
	xtype : 'Settings',

	config : {
		layout : 'card',
		id : 'Settings',
		
		items : [ {
			xtype : 'Setting'
		}, {
			xtype : 'Dev'
		}, {
			xtype : 'Info'
		}, {
			xtype : 'Notice'
		} ]
	}
});