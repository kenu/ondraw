//Intro
Ext.define('OnDraw.view.Intro', {
	extend : 'Ext.Panel',
	xtype : 'Intro',

	config : {
		xtype : 'panel',
		layout : {
			type : 'vbox',
//			align : 'center',
//			pack : 'center'
		},
		items : [ {
			xtype : 'carousel',
			defaults : {
				styleHtmlContent: true
			},
			width : '100%',
			height : '300px',
			style : 'background-color: gray; margin-bottom: 20px;',
			items : [ {
				html : 'Item 1',
				style : 'background-color: #5E99CC'
			}, {
				html : 'Item 2',
				style : 'background-color: #759E60'
			}, {
				html : 'Item 3'
			} ]
		}, {
			xtype : 'panel',
			layout : {
				type : 'hbox',
//				algin : 'center',
//				pack : 'center'
			},
			items : [ {
				xtype : 'button',
				text : '로그인',
				id : 'btnLogin',
				ui : 'confirm',
				flex : 1
			}, {
				xtype : 'spacer',
				width : '20px'
			}, {
				xtype : 'button',
				text : '계정만들기',
				id : 'btnRegister',
				ui : 'confirm',
				flex : 1
			} ]
		} ]
	}
});