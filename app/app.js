/**
 * @author : Renaud Mouren
 */

function launch() {
	Ext.Loader.setConfig({
		enabled: true
	});
	var app = Ext.application({
		name: 'wlm',
		controllers: ['main']
	})
}


