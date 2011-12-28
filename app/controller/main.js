/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.controller.main', {
	extend : 'Ext.app.Controller',
	models : ['Question', 'Article', 'Interview'],
	stores : ['Articles', 'Interviews'],
	views : [
		'TabBar', 'Articles', 'Interviews', 'Infos', 
		'panels.ListArticles', 'panels.DetailArticle', 
		'panels.ListInterviews', 'panels.DetailInterview'
	],
	
	init : function() {
		this.control({
			'ListArticles' : {
				select : this.choixArticle,
			},
			'ListInterviews' : {
				select : this.choixInterview,
			},
		});
	},
	
	launch : function() {
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
		
		topToolbar = viewport.down('toolbar');
		topToolbar.setTitle(record.get('titre'));

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

	},
});
