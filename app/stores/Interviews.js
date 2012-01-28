app.stores.Interviews = new Ext.data.Store({

	model : 'app.models.Interview',

	proxy : {
		type : 'ajax',
		//url : './resources/data/interviews.xml',
		url : 'http://www.welovemusic.fr/testflux/interviews',
		reader : {
			type : 'xml',
			root : 'items',
			record : 'item'
		}
	},
	autoLoad : true
});
