/**
 * Viewport de l'application : contient tout le reste de l'application :
 * - la barre de titre
 * - les onglets .
 *
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.Screen', {
	extend : 'Ext.Container',
	alias : ['widget.Screen'],

	config : {
		fullscreen : true,
		layout : 'card',
		items : [{
			xtype : 'BareTitre'

		}, {
			xtype : 'TabBar'
		}]
	}
});
