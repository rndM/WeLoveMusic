/**
 * @author : Renaud Mouren
 */

Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : 'wlm',
        appFolder: 'app',
	//autoCreateViewport : true,
	controllers : 'main'
});
