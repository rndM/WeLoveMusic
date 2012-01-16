﻿/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.panels.DetailArticle', {
	extend : 'Ext.Panel',
	alias : ['widget.DetailArticle'],
	config : {
		defaults : {
			scrollable : true
		},
		fullscreen : true,
		tpl : new Ext.XTemplate(
			'<div class="detail">'+
				'<h1>{titre}</h1>'+
				'<img src="{image_620x250}"></img>'+
				'<p>{texte}</p>'+
			'</div>'

			),
	}

});
