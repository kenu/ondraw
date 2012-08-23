Ext.define("TEST.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype:'main',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
      
        items: [
			{
				xtype:'DecisionPoint',
			},    
            {
				xtype: 'Login',
			},
			{
				xtype: 'Register',
			},
			{
				xtype:'SettingPassword',
			},
			{
				xtype:'Conditions',
			},
			{
				xtype:'Setting',
			},
			
        ]
    }
});
