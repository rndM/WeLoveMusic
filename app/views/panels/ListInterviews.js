app.views.ListInterviews = Ext.extend(Ext.List, {
	store : app.stores.Interviews,
	fullViewport : true,
	onItemDisclosure : true,
	itemTpl : 
		'<div class="Interviews">' +
	 		'<img src="{image_100x100}"></img>' +
	  		'<h1>{titre}</h1>' +
	   		'<div class="accroche">{accroche}</div>' +
	    '</div>',
	    
	listeners : {
		'itemtap' : function(view, index, item, e) {
			Ext.dispatch({
				controller : app.controllers.main,
				action : 'choixInterview',
				id : this.getId(),
				vue : view,
				data : this.getStore().getAt(index).data,
			});
		}
	},
});

Ext.reg('ListInterviews', app.views.ListInterviews);
