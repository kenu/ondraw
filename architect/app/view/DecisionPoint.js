//Login
Ext.define('OnDraw.view.DecisionPoint', {
	extend : 'Ext.Panel',
	xtype : 'DecisionPoint',

	config : {
		layout : 'card',
		id : 'DpView',
		style : 'background-color: white;',
		
		items : [ {
			xtype : 'Intro'
		}, {
			xtype : 'Login'
		}, {
			xtype : 'Register'
		}, {
			xtype : 'SettingPassword'
		}, {
			xtype : 'Conditions'
		} ]
	}
});