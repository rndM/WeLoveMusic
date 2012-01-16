/**
 * @author : Renaud Mouren
 */

function launch() {
	console.log('onReady');
	Ext.Loader.setConfig({
		enabled: true
	});
	var app = Ext.application({
		name: 'wlm',
		controllers: ['main']
	})
}


