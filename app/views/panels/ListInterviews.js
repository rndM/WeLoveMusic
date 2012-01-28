app.views.ListInterviews = Ext.extend(Ext.List, {
	store : app.stores.Interviews,
	fullViewport : true,
	itemTpl : 
		'<div class="Interviews">' +
			'<h3>{titre}</h3>' +
			'<img src="{image_100x100}"></img>' +
			'<div class="accroche">{accroche}</div>' +
		'</div>'+
		'<img class="fleche" src="img/right2.png"></img>',


	listeners : {
		'itemtap' : function(view, index, item, e) {
			Ext.dispatch({
				controller : app.controllers.main,
				action : 'choixArticle',
				vue : view,
				data : this.getStore().getAt(index).data,
			});
		}
	},
});

Ext.reg('ListInterviews', app.views.ListInterviews);
