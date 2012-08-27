//Mainview
Ext.define('OnDraw.view.Mainview', {
	extend : 'Ext.Panel',
	xtype : 'Mainview',

	config : {
		layout : 'card',
		id : 'MainView',
		
		items : [ {
			xtype : 'panel',
			layout : {
				align : 'center',
				pack : 'center',
				type : 'vbox'
			},
			scrollable : false,
			items : [ {
				xtype : 'toolbar',
				docked : 'top',
				ui : 'neutral',
				items : [ {
					xtype : 'spacer'
				}, {
					xtype : 'button',
					ui : 'plain',
					id : 'btn_Setting',
					iconCls : 'settings',
					iconMask : true
				} ]
			}, {
				xtype : 'panel',
				flex : 2,
				id : 'TopView',
				style : 'background-color: white',
				width : '90%',
				layout : 'card'
			}, {
				xtype : 'panel',
				flex : 1,
				id : 'BottomView',
				width : '90%',
				layout : {
					align : 'center',
					pack : 'center',
					type : 'hbox'
				},
				items : [ {
					xtype : 'button',
					action : 'Room',
					flex : 1,
					height : '70%',
					id : 'MakeRoom',
					margin : '10px',
					ui : 'decline-round',
					text : '방만들기'
				}, {
					xtype : 'spacer',
					width : 10
				}, {
					xtype : 'button',
					action : 'connection',
					flex : 1,
					height : '70%',
					id : 'Connect',
					margin : '10px',
					ui : 'action-round',
					text : '참여하기'
				} ]
			} ]
		} ]
	}
});