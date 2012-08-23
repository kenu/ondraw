Ext.define('TEST.view.SettingPassword',{
	extend: 'Ext.form.Panel',
	xtype:'SettingPassword',
	id: 'SettingPassword',
	
	 config:{
		 
             title: '암호재설정',
             iconCls:"settings", 
            
            
             items:[
                    {	xtype: 'titlebar',
                	    docked: 'top',
                	    title: '암호재설정',
                	    items: [
                                {
   		                     	xtype: 'button',
   		                        text: '뒤로',
   		                        ui: 'back', 
   		                        align: 'left',
   		                       
   		                      },
   		                      
   		                     ]
                	   
                	},
                	{
					    xtype: 'panel',
					    
					    html:'<h2>암호 재설정 요청</h2> <p>이계정에 연결된 사용자 이메일 주소를 입력하세요</p>',
					        
					},

                    {
                		xtype: 'fieldset',
                    
                		instructions: '',
                		items: [
					{
					    xtype: 'textfield',
					    name: 'ID',
					    label: 'ID',
					    
					        
					},
                    {
                        xtype: 'emailfield',
                        name: 'Email',
                        label: 'E-mail',
                        
                            
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'NewPassword',
                        label: 'NewPassword',
                        
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'ConfirmPassword',
                        label: 'ConfirmPassword',
                        
                    },
                    ]},
                    
                    {
                        xtype: 'button',
                        text: '확인',
                        ui: 'confirm',
                        handler: function (button, event){
                        Ext.Msg.alert("확인", "암호가 재설정 되었습니다.", Ext.emptyFn);
                        }
                    },
                    
                   ]
	 		}
});
