/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.panels.DetailArticle', {
	extend : 'Ext.Panel',
	alias : ['widget.DetailArticle'],
	config : {
		defaults : {
			scrollable : true,
		},
		//fullscreen : true,
		tpl : new Ext.XTemplate("<h1>{titre}</h1><p>{texte}</p>"),
	}

});
