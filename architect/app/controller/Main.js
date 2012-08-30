// Main
Ext.define('OnDraw.controller.Main', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			makeRoomBtn : '#MakeRoom',
			connectBtn : '#Connect',
			settingsBtn : '#btn_Setting',
			
			main : '#Main',
		},

		control : {
			"[action=Room]" : {
				tap : 'onButtonTapMakeRoom'
			},
			"[action=connection]" : {
				tap : 'onButtonTapConnect'
			},
			"settingsBtn" : {
				tap : 'onButtonTapSetting'
			}
		}
	},

	launch : function() {
    	server.on('joined', function(data) {
    		if(data.isSuccess) {
    			Ext.getCmp('RoomNum').setText(data.roomName);
    			Ext.getCmp('Main').setActiveItem(1);
    		} else {
    			roomNumber = Math.floor(Math.random()*999999);
    			server.emit('join', { roomName : roomNumber, nickName: testNick, opts : 'created' });
    		}
    	});
    	server.on('inUser', function(data) {
    		if (data.isSuccess) {
    			if(data.mode == 'insert') {
    				Ext.Msg.alert('error', data.nickName + '님이 입장하셨습니다.', Ext.emptyFn);
    			} else if (data.mode == 'delete') {
    				Ext.Msg.alert('error', data.nickName + '님이 퇴하셨습니다.', Ext.emptyFn);
    			} else if (data.mode == 'noRoom') {
    				Ext.Msg.alert('error', data.nickName + '의 방은 존재하지 않습니다.', Ext.emptyFn);
    			}
    			
    		} else {
    			console.log(data);
    		}
    	});
    },
    
    onButtonTapMakeRoom: function(button, e, options) {
        var roomNumber = Math.floor(Math.random()*999999);
        
        server.emit('join', { roomName : roomNumber, nickName: testNick, opts : 'created' });
    },

    onButtonTapConnect: function(button, e, options) {
        Ext.Msg.show({
            title   : '방번호를 입력하세요',
            msg     : null,
            buttons : [{
                itemId : 'ok',
                text   : '참여하기',
                ui     : 'action'
            },{
                itemId : 'cancle',
                text   : '취소'
            }],
            prompt  : { maxLength : 6, autocapitalize : false },
            fn      : function(text,val) {
                // do some stuff
                if(text == 'ok') {
                	server.emit('join', { roomName : val, nickName: testNick, opts : 'joined' });
                } else {

                }
            }
        });
    },
    onButtonTapSetting : function(button, e, options) {
    	Ext.getCmp('Main').setActiveItem(2);
    }
});