Ext.define('OnDraw.view.Register', {
	extend : 'Ext.form.Panel',
	xtype : 'Register',

	config : {
		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			title : '계정만들기',
			items : [ {
				xtype : 'button',
				text : '뒤로',
				ui : 'back',
				align : 'left',
				id : 'btn_RegisterBack'
			} ]

		}, {
			xtype : 'fieldset',

			instructions : '',
			items : [ {
				xtype : 'emailfield',
				name : 'Email',
				label : 'E-mail',
			}, {
				xtype : 'passwordfield',
				name : 'Password',
				label : 'Password',
			}, {
				xtype : 'passwordfield',
				name : 'PasswordConfirm',
				label : 'PasswordConfirm',
			}, {
				xtype : 'textfield',
				name : 'NickName',
				label : 'NickName',
			} ]
		}, {
			xtype : 'button',
			text : '확인',
			ui : 'confirm',
			handler : function(button, event) {
				Ext.Msg.alert("축하합니다.",
						"성공적으로 가입 되셨습니다.", Ext.emptyFn);
			}
		}, {
			xtype : 'panel',
			layout : {
				pack : 'right',
				type : 'hbox'
			},
			items : [ {
				xtype : 'button',
				text : '이용약관 >',
				ui : 'plain',
				id : 'btnConditions',
				style : 'font-size:0.7em;color:#999;margin-top:20px;text-decoration:underline;',
			} ]
		} ]
	}
});