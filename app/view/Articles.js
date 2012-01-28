/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.Articles', {
	extend : 'Ext.Panel',
	alias : ['widget.Articles'],
	config : {
		title : 'Actualité',
		iconCls : 'note2',
		fullscreen : true,
		layout : {
			type : 'card',
			animation : 'flip'

		},
		items : [{
			xtype : 'ListArticles'
		}, {
			xtype : 'DetailArticle'
		}]

	}
});
