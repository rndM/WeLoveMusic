app.views.ListInterviews = Ext.extend(Ext.List, {
	store : app.stores.Interviews,
	fullViewport : true,
	onItemDisclosure : true,
	
	itemTpl : '<div class="Interviews">' + '<img src="{image_100x100}"></img>' + '<h1>{titre}</h1>' + '<div class="accroche">{accroche}</div>' + '</div>',
	
	listeners : {
		'select' : function() {
			Ext.dispatch({
			   controller: app.controllers.main,
			   action: 'choixInterview',
				id : this.getId(),
			});
		}
	},
});

Ext.reg('ListInterviews', app.views.ListInterviews);
