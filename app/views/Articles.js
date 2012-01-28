app.views.Articles = Ext.extend(Ext.Panel, {

	title : 'Actualité',
	dockedItems : [{
		xtype : 'BarreTitre',
		title : 'We Love Music : Actualité',
		
	}],
	iconCls : 'note2',
	fullScreen : true,
	layout : 'card',
	cardSwitchAnimation : 'flip',
	items : [{
		xtype : 'ListArticles'
	}, {
		xtype : 'DetailArticle'
	}]
});
Ext.reg('Articles', app.views.Articles);
