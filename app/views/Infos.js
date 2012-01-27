app.views.Infos = Ext.extend(Ext.Panel, {

	title : 'Infos',
	dockedItems : [{
		xtype : 'BarreTitre',
		title : 'We Love Music',
	}],
	iconCls : 'info',
	html : '<h1>Infos</h1><p>WE LOVE MUSIC : L\'application !</p>' + '<br />' + '<p>(c) 2011 Renaud Mouren - Serge De-Marans</p>'

});
Ext.reg('Infos', app.views.Infos);
