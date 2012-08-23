Ext.define('TEST.view.Tutorial',{
	extend:'Ext.Carousel',
	xtype:'Tutorial',
	defaults: {
        styleHtmlContent: true
    },
	
	config:{
		title:'Tutorial',
		items: [ 
		        {
		            html : 'Item 1',
		            style: 'background-color: #5E99CC'
		        },
		        {
		            html : 'Item 2',
		            style: 'background-color: #759E60'
		        },
		        {
		            html : 'Item 3'
		        }
		    ]

	},
});