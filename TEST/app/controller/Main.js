Ext.define('TEST.controller.Main',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			main:'main',
			btnLogin:'#btnLogin',
			loginView:'Login',
			btnRegister:'#btnRegister',
			registerView:'Register',
			btnSettingPassword:'#btnSettingPassword',
			settingPasswordView:'SettingPassword',
			listView:'ListView',
			
		},
		control:{
			'btnLogin' :{
				tap:'moveLogin',
			},
			'btnRegister' :{
			tap:'moveRegister',
			},
			'btnSettingPassword':{
				tap:'moveSettingPassword',
			},
			
			'ListView':{
				itemtap:'listTap',
			},
			
		},
	},
	
	moveLogin:function(button,e,option){
		console.log('aaa');
		this.getMain().setActiveItem(this.getLoginView());
	},
	
	moveRegister:function(button,e,option){
		console.log('aaa');
		this.getMain().setActiveItem(this.getRegisterView());
	},
	
	moveSettingPassword:function(button,e,option){
		console.log('bbb');
		this.getMain().setActiveItem(this.getSettingPasswordView());
	},
	
	listTap:function( list, index, target, record, e,eOpts ){
		console.log('ccc: ' + index);
		
	},
	
});

