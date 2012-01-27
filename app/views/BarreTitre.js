/* Barre de titre de toute l'application .
 * modifiée lors de l'affichage des sarticles  */

app.views.BarreTitre = Ext.extend(Ext.Toolbar, {

	docked : 'top',
	title : 'We Love Music',
	items : [{
		id : 'bt',
		text : 'Retour',
		ui : 'back',
		hidden : true
	}],
	listeners : {
		'tap' : function(bt, e) {
			console.log(bt);
			Ext.dispatch({
				controller : app.controllers.main,
				action : 'buttonTap'
			});
		}
	},

});

Ext.reg('BarreTitre', app.views.BarreTitre);
