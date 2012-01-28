Ext.regApplication({
	name : 'app',
	launch : function() {
		this.launched = true;
		//this.mainLaunch();
	},
	mainLaunch : function() {
		// if(!device || !this.launched) { return; }
		this.views.Viewport = new this.views.Viewport();
	}
});
