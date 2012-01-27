/* Barre de titre de toute l'application .
 * modifiée lors de l'affichage des sarticles  */

app.views.BarreTitre = Ext.extend(Ext.Toolbar,{

	docked : 'top',
	title : 'We Love Music',
	items : [{
		id : 'bt',
		text : 'Retour',
		ui : 'back',
		hidden : true
	}]

});

Ext.reg('BarreTitre', app.views.BarreTitre);