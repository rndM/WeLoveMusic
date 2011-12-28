/**
 * @author : Renaud Mouren
 */


Ext.define('wlm.view.panels.ListArticles', {
	extend : 'Ext.List',
	alias : ['widget.ListArticles'],

	config : {
		//fullscreen : true,
		onItemDisclosure : function(record, btn, index) {	},
		itemTpl : 
			'<div class="Articles">' + 
				'<img src="{image_100x100}"></img>' + 
				'<h1>{titre}</h1>' + 
				'<div class="accroche">{accroche}</div>' + 
			'</div>'
		},

	constructor : function(config) {
		Ext.apply(config, {
			store : Ext.create('wlm.store.Articles')
		});
		this.callParent([config]);
	},
});
