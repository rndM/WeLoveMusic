/**
 * @author : Renaud Mouren
 */

Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : 'wlm',
	autoCreateViewport : true,
	controllers : 'main'
});
