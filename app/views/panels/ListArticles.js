app.views.ListArticles = Ext.extend(Ext.List, {
	store : app.stores.Articles,
	fullViewport : true,
	onItemDisclosure : true,
	itemTpl :
		'<div class="Articles">' +
			'<img src="{image_100x100}"></img>' +
			'<h1>{titre}</h1>' +
			'<div class="accroche">{accroche}</div>' +
		'</div>',

	listeners : {
		'itemtap' : function(view, index, item, e) {
			Ext.dispatch({
				controller : app.controllers.main,
				action : 'choixArticle',
				id : this.getId(),
				vue : view,
				data : this.getStore().getAt(index).data,
			});
		}
	}
});

Ext.reg('ListArticles', app.views.ListArticles);
