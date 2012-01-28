Ext.regApplication({
	name : 'app',
	launch : function() {
		
	},
	onReady: function() {
        this.mainLaunch();
   },
	mainLaunch : function() {
		//if(!device || !this.launched) { return;	}
		this.launched = true;
		new this.views.Viewport();
	}
});
