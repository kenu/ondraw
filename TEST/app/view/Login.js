Ext.define('TEST.view.Login',{
	extend: 'Ext.form.Panel',
	xtype:'Login',
	
	 config:{
		 
             title: 'LogIN',
             iconCls: 'team',
             badgeText: '1',
            
             items:[
                    {	xtype: 'titlebar',
                	    docked: 'top',
                	    title: '로그인',
                	    items: [
                                {
   		                     	xtype: 'button',
   		                        text: '뒤로',
   		                        ui: 'back', 
   		                        align: 'left',
   		                        id: 'btn_LoginBack'
   		                      } 
   		                     ]
                	    
                	},

                    {
                		xtype: 'fieldset',
                    
                		instructions: '',
                		items: [
                    {
                        xtype: 'emailfield',
                        name: 'Email',
                        label: 'E-mail',
                        placeHolder: 'Enter your Email',
                            
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'Password',
                        label: 'Password',
                        placeHolder: 'Enter your Password'
                    },
                    
                    ]},
                    
                    {
                        xtype: 'button',
                        text: '로그인',
                        ui: 'confirm',
                        
                     },
                    
                    {
                    	xtype: 'panel',
                        layout: {
                        pack: 'right',
                        type: 'hbox'
                     },
                     items: [
                             {
		                     	xtype: 'button',
		                        text: '암호 재설정 >',
		                        id: 'btnSettingPassword',
		                        ui: 'plain',
		                        style:'font-size:0.7em;color:#999;margin-top:20px;text-decoration:underline;',
		                      } 
		                     ]
                        
                    }
                   ]
	 		}
});