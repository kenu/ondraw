// Draw
Ext.define('OnDraw.controller.Draw', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			toolPen : '#ToolPen',
			toolEraser : '#ToolEraser',
			roomNum : '#RoomNum',
			toolNew : '#ToolNew',
			toolSetting : '#ToolSetting',
			colorRed : '#ColorRed',
			colorBlue : '#ColorBlue',
			colorYellow : '#ColorYellow',
			colorGreen : '#ColorGreen',
			colorBlack : '#ColorBlack',
			colorGray : '#ColorGray',
			canvasView : '#CanvasView',
			topToolbar : '#TopToolbar',
			bottomToolbar : '#BottomToolbar',
			homeButton : '#HomeButton',
			loadPicture : '#LoadPicture',
			savePicture : '#SavePicture'
		},

		control : {
			"toolPen" : {
				tap : 'onButtonTapPen'
			},
			"toolEraser" : {
				tap : 'onButtonTapEraser'
			},
			"roomNum" : {
				tap : 'onButtonTapNum'
			},
			"toolNew" : {
				tap : 'onButtonTapNew'
			},
			"toolSetting" : {
				tap : 'onButtonTapSetting'
			},
			"colorRed" : {
				tap : 'onButtonTapRed'
			},
			"colorBlue" : {
				tap : 'onButtonTapBlue'
			},
			"colorYellow" : {
				tap : 'onButtonTapYellow'
			},
			"colorGreen" : {
				tap : 'onButtonTapGreen'
			},
			"colorBlack" : {
				tap : 'onButtonTapBlack'
			},
			"colorGray" : {
				tap : 'onButtonTapGray'
			},
			"homeButton" : {
				tap : 'onButtonTapHome'
			},
			"loadPicture" : {
				tap : 'onButtonTapLoad'
			},
			"savePicture" : {
				tap : 'onButtonTapSave'
			}
		}
	},

	init : function() {
		overlays = new Ext.Toolbar({
			xtype : 'toolbar',
			id : 'OverlayToolbar',
			ui : 'neutral',
			width : '150px',
			height : '40px',
			// modal: true,
			hidden : true,
			hideOnMaskTap : true,
			style : 'background-color: #eee;',
			items : [ {
				xtype : 'button',
				height : '40px',
				id : 'HomeButton',
				ui : 'plain',
				width : '40px',
				iconAlign : 'center',
				iconMask : true,
			}, {
				xtype : 'button',
				height : '40px',
				id : 'LoadPicture',
				ui : 'plain',
				width : '40px',
				iconAlign : 'center',
				iconMask : true,
			}, {
				xtype : 'button',
				height : '40px',
				id : 'SavePicture',
				ui : 'plain',
				width : '40px',
				iconAlign : 'center',
				iconMask : true,
			} ]
		});
	},
	launch : function() {
	
	},
	onButtonTapPen : function(button, e, options) {
		lineWidth = 1;
		if (strokeStyle == 'white')
			strokeStyle = 'black';
	},
	onButtonTapEraser : function(button, e, options) {
		lineWidth = 10;
		strokeStyle = 'white';
	},
	onButtonTapNum : function(button, e, options) {
		server.emit('test');
	},
	onButtonTapNew : function(button, e, options) {
		Ext.Msg.confirm('화면초기화', '화면을 지우시겠습니까?', function(data) {
			if (data == 'yes') {
				context.fillStyle = 'white';
				context.fillRect(0, 0, canvas.width, canvas.height);
			}
		});
	},
	onButtonTapSetting : function(button, e, options) {
		if (!this.isPressed) {
			this.isPressed = true;
			overlays.showBy(button);
		} else {
			this.isPressed = false;
			overlays.hide();
		}
	},
	onButtonTapRed : function(button, e, options) {
		strokeStyle = 'red';
	},
	onButtonTapBlue : function(button, e, options) {
		strokeStyle = 'blue';
	},
	onButtonTapYellow : function(button, e, options) {
		strokeStyle = 'yellow';
	},
	onButtonTapGreen : function(button, e, options) {
		strokeStyle = 'green';
	},
	onButtonTapBlack : function(button, e, options) {
		strokeStyle = 'black';
	},
	onButtonTapGray : function(button, e, options) {
		strokeStyle = 'gray';
	},
	onButtonTapHome : function(button, e, options) {
		overlays.hide();
		context.fillStyle = 'white';
		context.fillRect(0, 0, canvas.width, canvas.height);
		// 방에 혼자있을경우
		// 방삭제
//		var number = Ext.getCmp('RoomNum').getText();
		server.emit('leaveRoom', {
			nickName : 'test'
		});
		// 방에 다른사람이 있을경우
		// 그냥 홈으로
	},
	onButtonTapLoad : function(button, e, options) {
		overlays.hide();
	},
	onButtonTapSave : function(button, e, options) {
		overlays.hide();
	}
});