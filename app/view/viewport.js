/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.Viewport', {
	extend : 'Ext.Container',
	alias : ['widget.Viewport'],

	config : {
		fullscreen : true,
		layout : 'card',
		items : [{
			xtype : 'BareTitre',

		}, {
			xtype : 'TabBar'
		}]
	}
});
