// Index
Ext.define('OnDraw.view.Index', {
	extend : 'Ext.Container',
	xtype : 'Index',

	config : {
		layout : 'card',
		id : 'Index',
		
		items : [{
			xtype : 'DecisionPoint',
		}, {
			xtype : 'Main'
		}]
	}
});