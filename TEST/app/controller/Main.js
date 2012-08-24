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
			btnSettingPassword:'#btnSettingPassword',
			settingPasswordView:'SettingPassword',
			btnSettingPassword_Cancel:'#btnSettingPassword_Cancel',
			btn_LoginBack: '#btn_LoginBack',
			DecisionPointView:'DecisionPoint',
			btn_RegisterBack:'#btn_RegisterBack',
			btnConditions:'#btnConditions',
			conditionsView:'Conditions',	
			btnConditions_Cancel:"#btnConditions_Cancel",	
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
			'btnSettingPassword_Cancel':{
				tap:'moveLogin',
			},
			'btn_LoginBack':{
				tap:'moveDecisionPoint',
			},
			'btn_RegisterBack':{
				tap:'moveDecisionPoint',
			},
			'btnConditions':{
				tap:'moveConditions',
			},
			'btnConditions_Cancel':{
			tap:'moveRegister',
			},
			'ListView':{
				itemtap:'listTap',
			},
			
		},
	},
	
	moveLogin:function(button,e,option){
		console.log('aaa');
		if(button.getId() == 'btnSettingPassword_Cancel'){
			this.getMain().animateActiveItem(this.getLoginView(), { type: "slide",  direction: "down" });
		}
		else{
			this.getMain().setActiveItem(this.getLoginView());
		}
	},
	
	moveRegister:function(button,e,option){
		console.log('777');if(button.getId() == 'btnConditions_Cancel'){
			this.getMain().animateActiveItem(this.getRegisterView(), { type: "slide",  direction: "down" });
		}
		else{
		
		this.getMain().setActiveItem(this.getRegisterView());
		}
	},
	
	moveSettingPassword:function(button,e,option){
		console.log('bbb');
		this.getMain().animateActiveItem(this.getSettingPasswordView(), { type: "slide",  direction: "up" });
	},
	moveSettingPassword_Cancel:function(){
		console.log('vvv');
		this.getMain().animateActiveItem(this.getLoginView(), { type: "slide",  direction: "Down" });
	},
	moveDecisionPoint:function(button,e,option){
		console.log('444');
		if(button.getId() == 'btn_RegisterBack'){
			this.getMain().animateActiveItem(this.getDecisionPointView(), { type: "slide",  direction: "right" });
		}
		else{
		this.getMain().animateActiveItem(this.getDecisionPointView(), { type: "slide",  direction: "right" });
		}
	},
	moveConditions:function(){
		console.log('999');
		this.getMain().animateActiveItem(this.getConditionsView(), { type: "slide",  direction: "up" });
	},

	listTap:function( list, index, target, record, e,eOpts ){
		console.log('ccc: ' + index);
		
	},
	
});

