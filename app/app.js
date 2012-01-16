/**
 * @author : Renaud Mouren
 */

Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : 'wlm',
        appFolder: 'assets/app',
	autoCreateViewport : true,
	controllers : 'main'
});
