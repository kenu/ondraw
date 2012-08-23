Ext.define('TEST.view.Conditions',{
	extend: 'Ext.form.Panel',
	xtype:'Conditions',
	
	 config:{
		 
             title: '이용약관',
             iconCls: 'star',
            
            
             items:[
                    {	xtype: 'titlebar',
                	    docked: 'top',
                	    title: '이용약관',
                	    items: [
                                {
   		                     	xtype: 'button',
   		                        text: '뒤로',
   		                        ui: 'back', 
   		                        align: 'left',
   		                       
   		                      } 
   		                     ]
                	   
                	},
                	{
                		xtype:'panel',
                		layout:'card',
                		html :'hello world'
                	}

                    
                    
                   ]
	 		}
});