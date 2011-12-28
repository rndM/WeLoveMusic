/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.Viewport', {
	extend : 'Ext.Container',

	config : {
		fullscreen : true,
		layout : 'card',
		items : [{
			xtype : 'toolbar',
			docked : 'top',
			title : 'We Love Music',
			defaultTitle : 'Title',
			items : [{
				text : 'Retour',
				ui : 'back',
				hidden : true
			}]
		}, {
			xtype : 'TabBar'
		}]
	}
});
