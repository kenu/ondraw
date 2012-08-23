Ext.define('TEST.view.DecisionPoint',{
	extend: 'Ext.Panel',
	xtype: 'DecisionPoint',
	
	 config:{
		 
             title: 'DecisionPoint',
             iconCls: 'arrow_up',
             
             layout:{type:'vbox'},
            // defaults:{flex:1},
            
             items:[
                    
                	{
                		xtype: 'Tutorial',
                		height: '300px',
                		style: 'margin-bottom:20px',
                	},
                	{ xtype: 'panel',
                	  layout:{type:'hbox'},
                	  
                    items: [
                    {
                    	 xtype: 'button',
                    	 id: 'btnLogin',
                         text: '로그인',
                         ui: 'confirm',
                         flex:1,
                            
                    },
                    {
                    	xtype:"spacer",
                    	width:'20px',
                    },
                    {
                    	 xtype: 'button',
                         text: '계정만들기',
                         id: 'btnRegister',
                         ui: 'confirm',
                         flex:1,
                        
                    },
                    
                    ]},
               ]
     }
});