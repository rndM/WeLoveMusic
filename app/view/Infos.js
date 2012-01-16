/**
 * @author : Renaud Mouren
 */

Ext.define('wlm.view.Infos', {
	extend : 'Ext.Panel',
	alias : ['widget.Infos'],
	config : {
		title : 'Infos',
		iconCls : 'info',
		html : '<h1>Infos</h1><p>WE LOVE MUSIC : L\'application !</p>'+
				'<br />'+
				'<p>(c) 2011 Renaud Mouren - Serge De-Marans</p>'
	}
});
