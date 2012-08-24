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
   		                        text: '취소',
   		                        ui: 'nomal', 
   		                        align: 'right',
   		                        id:'btnConditions_Cancel',
   		                       
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