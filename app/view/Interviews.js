/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.Interviews', {
	extend : 'Ext.Panel',
	alias : ['widget.Interviews'],
	config : {
		title : 'Interviews',
		iconCls : 'mic',
		fullscreen : true,
		layout : {
			type : 'card',
			animation : 'flip',

		},
		items : [{
			xtype : 'ListInterviews'
		}, {
			xtype : 'DetailInterview'
		}]

	}
});
