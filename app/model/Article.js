Ext.define('wlm.model.Article', {
	extend : 'Ext.data.Model',

	fields : [{
		name : 'titre',
		type : 'string'
	}, {
		name : 'accroche',
		type : 'string'
	}, {
		name : 'type',
		type : 'string'
	}, {
		name : 'texte',
		type : 'string'
	}, {
		name : 'link',
		type : 'string'
	}, {
		name : 'label',
		type : 'string'
	}, {
		name : 'journaliste',
		type : 'string'
	}, {
		name : 'dateDePublication',
		type : 'string'
	}, {
		name : 'festival',
		type : 'string'
	}, {
		name : 'lastUpdate',
		type : 'string'
	}, {
		name : 'image_100x100',
		type : 'string'
	}, {
		name : 'image_300x300',
		type : 'string'
	}, {
		name : 'image_620x250',
		type : 'string'
	}],

	hasMany : [{
		model : 'wlm.model.Artiste',
		name : 'artistes'
	}],
});
