﻿app.views.Main = Ext.extend(Ext.TabPanel, {
	fullscreen : true,
	tabBar : {
		dock : 'bottom',
		layout : {
			pack : 'center'
		}
	},
	items : [{
		xtype : 'Articles'
	}, {
		xtype : 'Interviews'
	}, {
		xtype : 'Infos'
	}]
});
Ext.reg('Main', app.views.Main);