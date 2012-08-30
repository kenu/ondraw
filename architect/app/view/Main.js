// Login
Ext.define('OnDraw.view.Main', {
	extend : 'Ext.Panel',
	xtype : 'Main',

	config : {
		layout : 'card',
		id : 'Main',
		
		items : [ {
			xtype : 'Mainview'
		}, {
			xtype : 'Draw'
		}, {
			xtype : 'Settings'
		} ]
	}
});