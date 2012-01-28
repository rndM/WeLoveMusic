Ext.regModel("question", {
	fields : [{
		name : 'q', type : 'string'
	}, {
		name : 'r', type : 'string'
	}],
	proxy: {
			type:'ajax',
			reader: {
				type: 'xml',
				root: 'questions',
				record: 'question'
			}
		}
});

Ext.regModel("app.models.Interview", {
	fields : [{
		name : 'titre', type : 'string'
	}, {
		name : 'accroche', type : 'string'
	}, {
		name : 'type', type : 'string'
	}, {
		name : 'texte', type : 'string'
	}, {
		name : 'link', type : 'string'
	}, {
		name : 'label', type : 'string'
	}, {
		name : 'journaliste', type : 'string'
	}, {
		name : 'dateDePublication', type : 'string'
	}, {
		name : 'festival', type : 'string'
	}, {
		name : 'lastUpdate', type : 'string'
	}, {
		name : 'image_100x100', type : 'string'
	}, {
		name : 'image_300x300', type : 'string'
	}, {
		name : 'image_620x250', type : 'string'
	}], 
	hasMany : {
		model : 'question', name : 'questions'
	}
});
