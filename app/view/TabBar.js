/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.TabBar', {
	extend : 'Ext.TabPanel',
	alias : ['widget.TabBar'],
	config : {
		fullscreen : true,
		tabBar : {
			docked : 'bottom',
			layout : {
				pack : 'center'
			}
		},
		defaults : {
			scrollable : true
		},
		items : [{
			xtype : 'Articles'
		}, {
			xtype : 'Interviews'
		}, {
			xtype : 'Infos'
		}]
	}
});
