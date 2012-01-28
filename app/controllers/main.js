/* controlleur de l'Application */

app.controllers.main = new Ext.Controller({

	/**
	 "tap" sur un Article ou un Interview .
	 params:

	 @options.vue
	 @options.data

	 */
	choixArticle : function(options) {
		// retrouve la rubrique et son panneau de détail .
		var rubrique = options.vue.up();
		var detail = rubrique.down('.panel');

		// envoi a la vue de détail les données de la case choisie dans la liste
		detail.update(options.data);
		// Active la vue de détail à la place de la liste
		rubrique.setActiveItem(1);
		// Affiche le bouton de retour .
		rubrique.down('button[ui=back]').show();

	},
	/**
	 "tap" sur le bouton de retour dans la barre de titre .
	 */
	tapBoutonTitre : function(options) {

		options.bt.up().up().setActiveItem(0);
		options.bt.hide();
	},
});
