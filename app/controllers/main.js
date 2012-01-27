/* controlleur de l'Application */

app.controllers.main = new Ext.Controller({

	/**
	 Methode lancé quand on "tape" sur un article .
	 */
	choixArticle : function(options) {

		var id = parseInt(options.id);
		art = app.stores.Articles.getById(id);

		// retrouve le paneau "articles" puis le paneau de détail
		var listeArticles = app.views.Viewport.down('Articles');
		var DetailArticle = app.views.Viewport.down('DetailArticle');

		// envoi a la vue de détail les données de la case choisie dans la liste
		DetailArticle.update(options.record);
		// console.log(options.record);

		// Active la vue de détail à la place de la liste
		listeArticles.setActiveItem(1);

		this.showDetail(options.id, options.record);

	},
	/**
	 Methode lancé quand on "tape" sur une interview .
	 */
	choixInterview : function(options) {

		// retrouve le paneau "interviews" puis le paneau de détail
		var listeInterviews = app.views.Viewport.down('Interviews');
		var DetailInterview = listeInterviews.down('DetailInterview');

		// envoi a la vue de détail les données de la case choisie dans la liste
		DetailInterview.update(options.record);
		//DetailInterview.setData(options.record);

		// Active la vue de détail à la place de la liste
		listeInterviews.setActiveItem(1);

		// Activation du bouton retour
		this.showDetail(options.id, options.record);
	},
	/**

	 */
	showDetail : function(vue, record) {
		//var bt = app.views.Viewport.down('button[ui=back]');
		//console.log(bt);
		//bt.setHidden(false);
		// app.views.Viewport.down('BareTitre').setTitle(record.data['titre']);
	},
	/**

	 */
	buttonTap : function() {
	
		var bt = vue.up('Viewport').down('button[ui=back]');
		bt.setHidden(true);

		bt.up('Viewport').down('BareTitre').setTitle('We Love Music');

		bt.up('Viewport').down('Articles').setActiveItem(0);
		bt.up('Viewport').down('Interviews').setActiveItem(0);
	}
});
