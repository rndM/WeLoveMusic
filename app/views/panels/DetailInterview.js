app.views.DetailInterview = Ext.extend(Ext.Panel, {

	scroll : 'vertical',
	fullViewport : true,
	tpl : new Ext.XTemplate([
		'<div class="detail">', 
			'<h1>{titre}</h1>', 
			'<img src="{image_620x250}"></img>', 
			'<p>{accroche}</p>', 
			'<tpl for="questions"><p class="question">{q}</p><p class="reponse">{r}</p></tpl>',
		'</div>'
	]),
});

Ext.reg('DetailInterview', app.views.DetailInterview);
