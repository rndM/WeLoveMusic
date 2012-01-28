/**
 * Viewport de l'application : contient tout le reste de l'application :
 * - la barre de titre
 * - les onglets .
 */



app.views.Vp = Ext.extend(Ext.Panel, {
	fullScreen : true,
	items : [
		{ xtype : 'Main' }
	],

	

});