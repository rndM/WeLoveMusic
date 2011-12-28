Ext.define('wlm.store.Interviews', {
	extend : 'Ext.data.Store',
	model : 'wlm.model.Interview',

	proxy : {
		type : 'ajax',
		url : './res/data/interviews.xml',
		reader : {
			type : 'xml',
			root : 'items',
			record : 'item'
		}
	},
	autoLoad : true
});