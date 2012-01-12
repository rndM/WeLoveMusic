/**
 * Viewport de l'application : contient tout le reste de l'application :
 * - la barre de titre
 * - les onglets .
 *
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.Viewport', {
	extend : 'Ext.Container',
	alias : ['widget.Viewport'],

	config : {
		fullscreen : true,
		layout : 'card',
		items : [{
			xtype : 'BareTitre',

		}, {
			xtype : 'TabBar'
		}]
	}
});
