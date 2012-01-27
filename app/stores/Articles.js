app.stores.Articles = new Ext.data.Store({
	model : 'app.models.Article',
	proxy : {
		type : 'ajax',
		// url :  'data/testflux.xml',
		url : 'http://www.welovemusic.fr/testflux',
		reader : {
			type : 'xml',
			root : 'items',
			record : 'item'
		}
	},
	autoLoad : true
});
