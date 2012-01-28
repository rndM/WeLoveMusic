/* Barre de titre de toute l'application .
 * modifiée lors de l'affichage des sarticles  */

app.views.BarreTitre = Ext.extend(Ext.Toolbar, {

	docked : 'top',
	items : [{
		text : 'Retour',
		ui : 'back',
		hidden : true,
		listeners : {
			'tap' : function(bt, e) {
				Ext.dispatch({
					controller : app.controllers.main,
					action : 'tapBoutonTitre',
					bt : bt,
				});
			}
		},
	}],

});

Ext.reg('BarreTitre', app.views.BarreTitre);
