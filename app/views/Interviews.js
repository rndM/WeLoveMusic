app.views.Interviews = Ext.extend(Ext.Panel, {

	title : 'Interviews',
	dockedItems : [{
		xtype : 'BarreTitre',
		title : 'We Love Music : Interviews',
	}],
	iconCls : 'mic',
	fullScreen : true,
	layout : 'card',
	cardSwitchAnimation : Ext.is.Android ? 'slide' : 'flip',

	items : [{
		xtype : 'ListInterviews'
	}, {
		xtype : 'DetailInterview'
	}]
});
Ext.reg('Interviews', app.views.Interviews);
