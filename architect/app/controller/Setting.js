// DP
Ext.define('OnDraw.controller.Setting', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			logoutBtn : '#btn_Logout',
			index : '#Index',
			dpView : '#DpView'
		},

		control : {
			"logoutBtn" : {
				tap : 'onButtonTapLogout'
			}
		}
	},

	onButtonTapLogout : function(button, e, options) {
		Ext.Msg.alert(
				"로그아웃 되었습니다.",
				"다음에 또 놀러 오세요.",
				Ext.emptyFn);
		this.getDpView().setActiveItem(0);
		this.getIndex().setActiveItem(0);
	}
});