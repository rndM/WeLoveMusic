Ext.define('wlm.store.Articles', {
	extend : 'Ext.data.Store',
	model : 'wlm.model.Article',

	proxy : {
		type : 'ajax',
		url : './res/data/testflux.xml',
		reader : {
			type : 'xml',
			root : 'items',
			record : 'item'
		}
	},
	autoLoad : true
});
