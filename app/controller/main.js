/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.controller.main', {
	extend : 'Ext.app.Controller',
	models : ['Question', 'Article', 'Interview'],
	stores : ['Articles', 'Interviews'],
	views : ['Screen', 'BareTitre', 'TabBar', 'Articles', 'Interviews', 'Infos', 'panels.ListArticles', 'panels.DetailArticle', 'panels.ListInterviews', 'panels.DetailInterview'],

	init : function() {
		this.control({
			'ListArticles' : {
				select : this.choixArticle
			},
			'ListInterviews' : {
				select : this.choixInterview
			},
			'BareTitre .button' : {
				tap : this.buttonTap
			}
		});
	},
	launch : function() {
		this.getView("Screen").create();
	},
	/**
	 Methode lancé quand on "tape" sur un article .
	 */
	choixArticle : function(vue, record) {
		// retrouve le paneau "articles" puis le paneau de détail
		var listeArticles = vue.up('Articles');
		var DetailArticle = listeArticles.down('DetailArticle');

		// envoi a la vue de détail les données de la case choisie dans la liste
		DetailArticle.setData(record.data);

		// Active la vue de détail à la place de la liste
		listeArticles.setActiveItem(1);

		this.showDetail(vue, record);

	},
	/**
	 Methode lancé quand on "tape" sur une interview .
	 */
	choixInterview : function(vue, record) {

		// retrouve le paneau "interviews" puis le paneau de détail
		var listeInterviews = vue.up('Interviews');
		var DetailInterview = listeInterviews.down('DetailInterview');

		// envoi a la vue de détail les données de la case choisie dans la liste
		DetailInterview.setData(record.data);

		// Active la vue de détail à la place de la liste
		listeInterviews.setActiveItem(1);

		// Activation du bouton retour
		this.showDetail(vue, record);

	},
	showDetail : function(vue, record) {
		var bt = vue.up('Viewport').down('button[ui=back]');
		bt.setHidden(false);
		bt.up('Viewport').down('BareTitre').setTitle(record.data['titre']);

	},
	buttonTap : function(vue, record) {
		var bt = vue.up('Viewport').down('button[ui=back]');
		bt.setHidden(true);

		bt.up('Viewport').down('BareTitre').setTitle('We Love Music');

		bt.up('Viewport').down('Articles').setActiveItem(0);
		bt.up('Viewport').down('Interviews').setActiveItem(0);

	}
});
