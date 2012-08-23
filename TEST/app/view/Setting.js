Ext.define('TEST.view.Setting',{
	 extend:'Ext.Panel',
	 xtype:'Setting',
	
	 
	 config:{
		 title:'Setting',
		 iconCls:'settings6',
		 scrollable:'vertical',
		 
		 layout:{type:'vbox'},
		 
		 items:[
		         {
		        	 xtype: 'titlebar',
             	     docked: 'top',
             	     title: '설정',
             	     items:[
							{
								 xtype:'button',
								 text:'로그아웃',
								 ui:'nomal',
								 align:'right',
								 handler: function (button, event){
				                        Ext.Msg.alert("로그아웃 되었습니다.", "다음에 또 놀러 오세요.", Ext.emptyFn);
								 		},  
							},
							{
								 xtype:'button',
								 text:'뒤로',
								 ui:'back',
								 align:'left',
								 
							},  
							
             	            ]
		         },
		         {
					 xtype: 'SettingList',
					 height: '200px',
					 style: 'background-color:#eee',
				 },   
		         {
			    	 xtype:'panel',
			    	 html:'<p>아이디 :  박상도</p> <p>이메일 :  parksangdo @ parksangdo.com </p>',
			    	 style:'font-size:0.7em;color:#999;padding:15px;font-weight:bold;',
		         },   
				 {
			    	 xtype:'panel',
			    	 docked: 'bottom',
			    	 html:'<p>© Hy-olleh</p> ',
			    	 
			    	 style:'font-size:0.6em;color:#999;padding:15px;text-align:center;',
		         }   
		 ]
	}
	
});