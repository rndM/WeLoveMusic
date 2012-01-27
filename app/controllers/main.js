/* controlleur de l'Application */

app.controllers.main = new Ext.Controller({

	/**
	 Methode lancé quand on "tape" sur un article .
	 */
	choixArticle : function(options) {
		// retrouve le paneau "articles" puis le paneau de détail
		var detail = app.views.Viewport.down('DetailArticle');
		var rubrique = app.views.Viewport.down('Articles');
		this.choix(rubrique, detail, options.data);
	},
	/**
	 Methode lancé quand on "tape" sur une interview .
	 */
	choixInterview : function(options) {
		// retrouve le paneau "interviews" puis le paneau de détail
		var detail = app.views.Viewport.down('DetailInterview');
		var rubrique = app.views.Viewport.down('Interviews');
		this.choix(rubrique, detail, options.data);
	},
	/**
	 Methode lancé Aprés un choix d'article / interview .
	 */
	choix : function(rubrique, detail, data) {
		// envoi a la vue de détail les données de la case choisie dans la liste
		detail.update(data);
		// Active la vue de détail à la place de la liste
		rubrique.setActiveItem(1);
		// Affiche le bouton de retour .
		rubrique.down('button[ui=back]').show();

	},
	
	
	/**
	 
	 */
	buttonTap : function(bt, e) {
		console.log(bt);
		bt.hide();

		bt.up('Viewport').down('Articles').setActiveItem(0);
		bt.up('Viewport').down('Interviews').setActiveItem(0);
	}
});
