app.views.DetailArticle = Ext.extend(Ext.Panel, {

	scrollable : true,
	fullViewport : true,
	tpl : new Ext.XTemplate(
		'<div class="detail">' +
			'<h1>{titre}</h1>' +
			'<img src="{image_620x250}"></img>' +
			'<p>{texte}</p>' +
		'</div>'),
});

Ext.reg('DetailArticle', app.views.DetailArticle);
