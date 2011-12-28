/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.panels.DetailInterview', {
	extend : 'Ext.Panel',
	alias : ['widget.DetailInterview'],
	config : {
		defaults : {
			scrollable : true
		},
		//fullscreen : true,
		tpl : new Ext.XTemplate("<h1>{titre}</h1><p>{accroche}</p>"),
	}
});
