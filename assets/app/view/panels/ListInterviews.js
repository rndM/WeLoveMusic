/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.panels.ListInterviews', {
	extend : 'Ext.List',
	alias : ['widget.ListInterviews'],

	config : {
		onItemDisclosure : function(record, btn, index) {
		},
		itemTpl : 
		'<div class="Interviews">' + 
			'<img src="{image_100x100}"></img>' + 
			'<h1>{titre}</h1>' + 
			'<div class="accroche">{accroche}</div>' + 
		'</div>'
	},

	constructor : function(config) {
		Ext.apply(config, {
			store : Ext.create('wlm.store.Interviews')
		});
		this.callParent([config]);
	},
});
