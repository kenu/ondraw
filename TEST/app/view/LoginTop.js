Ext.define('TEST.view.LoginTop',{
   
    xtype:'carousel',
    
    defaults: {
        styleHtmlContent: true
    },

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
});