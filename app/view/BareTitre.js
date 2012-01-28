/**
 * Barre de titre de toute l'application .
 * modifiée lors de l'affichage des sarticles
 *
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
