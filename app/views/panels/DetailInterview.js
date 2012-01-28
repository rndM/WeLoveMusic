app.views.DetailInterview = Ext.extend(Ext.Panel, {

	scroll : 'vertical',
	fullViewport : true,
	tpl : new Ext.Template([
		'<div class="detail">', 
			'<h1>{titre}</h1>', 
			'<img src="{image_620x250}"></img>', 
			'<p>{accroche}</p>', 
		'</div>'
	]),
});

Ext.reg('DetailInterview', app.views.DetailInterview);
