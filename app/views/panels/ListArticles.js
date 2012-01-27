app.views.ListArticles = Ext.extend(Ext.List, {
	store : app.stores.Articles,
	fullViewport : true,
	onItemDisclosure : true,

	itemTpl : '<div class="Articles">' + '<img src="{image_100x100}"></img>' + '<h1>{titre}</h1>' + '<div class="accroche">{accroche}</div>' + '</div>',

	listeners : {
		'select' : function(record) {
			// console.log(record);
			Ext.dispatch({
				controller : app.controllers.main,
				action : 'choixArticle',
				id : this.getId(),
			});

		}
	}
});

Ext.reg('ListArticles', app.views.ListArticles);
