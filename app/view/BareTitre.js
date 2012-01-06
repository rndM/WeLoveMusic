/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.BareTitre', {
	extend : 'Ext.Toolbar',
	alias : ['widget.BareTitre'],
	config : {
		docked : 'top',
		title : 'We Love Music',
		items : [{
			id : 'bt',
			text : 'Retour',
			ui : 'back',
			hidden : true
		}]

	}
});
