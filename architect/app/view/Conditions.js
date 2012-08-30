Ext.define('OnDraw.view.Conditions',{
	extend : 'Ext.form.Panel',
	xtype : 'Conditions',

	config : {
		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			title : '이용약관',
			items : [ {
				xtype : 'button',
				text : '취소',
				ui : 'nomal',
				align : 'right',
				id : 'btnConditions_Cancel',
			} ]
		}, {
			xtype : 'panel',
			layout : 'card',
			html : 'hello world'
		} ]
	}
});