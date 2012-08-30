// DP
Ext.define('OnDraw.controller.DecisionPoint', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			// foword page btn
			loginBtn : '#btnLogin',
			signupBtn : '#btnRegister',
			setPWBtn : '#btnSettingPassword',
			conditionsBtn : '#btnConditions',
			accessLoginBtn : '#AccessLogin',
			
			// back page btn
			loginBackBtn : '#btn_LoginBack',
			signupBackBtn : '#btn_RegisterBack',
			setPWBackBtn : '#btnSettingPassword_Cancel',
			conditionsBackBtn : '#btnConditions_Cancel',
			
			// View Page
			dpView : '#DpView',
			index : '#Index',
			main : '#Main'
				
		},

		control : {
			"loginBtn" : {
				tap : 'onButtonTapLogin'
			},
			"signupBtn" : {
				tap : 'onButtonTapSignup'
			},
			"setPWBtn" : {
				tap : 'onButtonTapSetPW'
			},
			"conditionsBtn" : {
				tap : 'onButtonTapConditions'
			},
			"accessLoginBtn" : {
				tap : 'onButtonTapAccessLogin'
			},
			
			"loginBackBtn" : {
				tap : 'onButtonTapLoginBack'
			},
			"signupBackBtn" : {
				tap : 'onButtonTapSignupBack'
			},
			"setPWBackBtn" : {
				tap : 'onButtonTapSetPWBack'
			},
			"conditionsBackBtn" : {
				tap : 'onButtonTapConditionsBack'
			}
		}
	},

	onButtonTapLogin : function(button, e, options) {
		this.getDpView().setActiveItem(1);
	},
	onButtonTapSignup : function(button, e, options) {
		this.getDpView().setActiveItem(2);
	},
	onButtonTapSetPW : function(button, e, options) {
		this.getDpView().setActiveItem(3);
	},
	onButtonTapConditions : function(button, e, options) {
		this.getDpView().setActiveItem(4);
	},
	onButtonTapAccessLogin : function(button, e, options) {
//		server = io.connect('http://14.63.212.243:52273');
		this.getMain().setActiveItem(0);
		this.getIndex().setActiveItem(1);
	},
	
	onButtonTapLoginBack : function(button, e, options) {
		this.getDpView().setActiveItem(0);
	},
	onButtonTapSignupBack : function(button, e, options) {
		this.getDpView().setActiveItem(0);
	},
	onButtonTapSetPWBack : function(button, e, options) {
		this.getDpView().setActiveItem(1);
	},
	onButtonTapConditionsBack : function(button, e, options) {
		this.getDpView().setActiveItem(2);
	}
});