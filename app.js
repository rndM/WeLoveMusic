/**
 * @author : Renaud Mouren
 */

// var UrlInterview = 'data/interviews.xml';
var UrlInterview = 'http://www.welovemusic.fr/testflux/interviews';

// var UrlArticles = 'data/testflux.xml';
var UrlArticles = 'http://www.welovemusic.fr/testflux';


// Ext.Loader.setConfig({
// enabled : true
// });


/** MODELES **/

Ext.define('wlm.model.Article', {
	extend : 'Ext.data.Model',
	
	fields : [{
			name : 'titre',
			type : 'string'
		}, {
			name : 'accroche',
			type : 'string'
		}, {
			name : 'type',
			type : 'string'
		}, {
			name : 'texte',
			type : 'string'
		}, {
			name : 'link',
			type : 'string'
		}, {
			name : 'label',
			type : 'string'
		}, {
			name : 'journaliste',
			type : 'string'
		}, {
			name : 'dateDePublication',
			type : 'string'
		}, {
			name : 'festival',
			type : 'string'
		}, {
			name : 'lastUpdate',
			type : 'string'
		}, {
			name : 'image_100x100',
			type : 'string'
		}, {
			name : 'image_300x300',
			type : 'string'
		}, {
			name : 'image_620x250',
			type : 'string'
		}
	],
	
	hasMany : [{
			model : 'wlm.model.Artiste',
			name : 'artistes'
		}
	],
});

Ext.define('wlm.model.Question', {
	extend : 'Ext.data.Model',
	fields : [{
			name : 'q',
			type : 'string'
		}, {
			name : 'r',
			type : 'string'
		}
	],
	
});

Ext.define('wlm.model.Interview', {
	extend : 'Ext.data.Model',
	
	fields : [{
			name : 'titre',
			type : 'string'
		}, {
			name : 'accroche',
			type : 'string'
		}, {
			name : 'type',
			type : 'string'
		}, {
			name : 'texte',
			type : 'string'
		}, {
			name : 'link',
			type : 'string'
		}, {
			name : 'label',
			type : 'string'
		}, {
			name : 'journaliste',
			type : 'string'
		}, {
			name : 'dateDePublication',
			type : 'string'
		}, {
			name : 'festival',
			type : 'string'
		}, {
			name : 'lastUpdate',
			type : 'string'
		}, {
			name : 'image_100x100',
			type : 'string'
		}, {
			name : 'image_300x300',
			type : 'string'
		}, {
			name : 'image_620x250',
			type : 'string'
		}
	],
	
	hasMany : {
		model : 'wlm.model.Question',
		name : 'question'
	}
});

/** STORES **/

Ext.define('wlm.store.Articles', {
	extend : 'Ext.data.Store',
	model : 'wlm.model.Article',
	
	proxy : {
		type : 'ajax',
		url : UrlArticles,
		reader : {
			type : 'xml',
			root : 'items',
			record : 'item'
		}
	},
	autoLoad : true
});

Ext.define('wlm.store.Interviews', {
	extend : 'Ext.data.Store',
	model : 'wlm.model.Interview',
	
	proxy : {
		type : 'ajax',
		url : UrlInterview,
		reader : {
			type : 'xml',
			root : 'items',
			record : 'item'
		}
	},
	autoLoad : true
});

/** VUES **/

/* Barre de titre de toute l'application .
 * modifiée lors de l'affichage des sarticles  */

Ext.define('wlm.view.BareTitre', {
	extend : 'Ext.Toolbar',
	alias : ['widget.BareTitre'],
	config : {
		docked : 'top',
		title : 'We Love Music',
		items : [{
				id : 'bt',
				text : 'Retour',
				ui : 'back',
				hidden : true
			}
		]
		
	}
});

Ext.define('wlm.view.panels.DetailArticle', {
	extend : 'Ext.Panel',
	alias : ['widget.DetailArticle'],
	config : {
		defaults : {
			scrollable : true
		},
		fullscreen : true,
		tpl : new Ext.XTemplate(
			'<div class="detail">' +
			'<h1>{titre}</h1>' +
			'<img src="{image_620x250}"></img>' +
			'<p>{texte}</p>' +
			'</div>'),
	}
	
});

Ext.define('wlm.view.panels.DetailInterview', {
	extend : 'Ext.Panel',
	alias : ['widget.DetailInterview'],
	config : {
		defaults : {
			scrollable : true
		},
		fullscreen : true,
		tpl : new Ext.XTemplate(
			'<div class="detail">' +
			'<h1>{titre}</h1>' +
			'<img src="{image_620x250}"></img>' +
			'<p>{accroche}</p>' +
			'</div>'),
	}
});

Ext.define('wlm.view.panels.ListArticles', {
	extend : 'Ext.List',
	alias : ['widget.ListArticles'],
	config : {
		fullscreen : true,
		onItemDisclosure : function (record, btn, index) {},
		itemTpl :
		'<div class="Articles">' +
		'<img src="{image_100x100}"></img>' +
		'<h1>{titre}</h1>' +
		'<div class="accroche">{accroche}</div>' +
		'</div>'
	},
	
	constructor : function (config) {
		Ext.apply(config, {
			store : Ext.create('wlm.store.Articles')
		});
		this.callParent([config]);
	},
});

Ext.define('wlm.view.panels.ListInterviews', {
	extend : 'Ext.List',
	alias : ['widget.ListInterviews'],
	
	config : {
		onItemDisclosure : function (record, btn, index) {},
		itemTpl :
		'<div class="Interviews">' +
		'<img src="{image_100x100}"></img>' +
		'<h1>{titre}</h1>' +
		'<div class="accroche">{accroche}</div>' +
		'</div>'
	},
	
	constructor : function (config) {
		Ext.apply(config, {
			store : Ext.create('wlm.store.Interviews')
		});
		this.callParent([config]);
	}
});

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
			}
		]
		
	}
});

Ext.define('wlm.view.Interviews', {
	extend : 'Ext.Panel',
	alias : ['widget.Interviews'],
	config : {
		title : 'Interviews',
		iconCls : 'mic',
		fullscreen : true,
		layout : {
			type : 'card',
			animation : 'flip'
			
		},
		items : [{
				xtype : 'ListInterviews'
			}, {
				xtype : 'DetailInterview'
			}
		]
		
	}
});

Ext.define('wlm.view.Infos', {
	extend : 'Ext.Panel',
	alias : ['widget.Infos'],
	config : {
		title : 'Infos',
		iconCls : 'info',
		html : '<h1>Infos</h1><p>WE LOVE MUSIC : L\'application !</p>' +
		'<br />' +
		'<p>(c) 2011 Renaud Mouren - Serge De-Marans</p>'
	}
});

/**
 * Viewport de l'application : contient tout le reste de l'application :
 * - la barre de titre
 * - les onglets .
 */

Ext.define('wlm.view.Screen', {
	extend : 'Ext.Container',
	alias : ['widget.Screen'],
	
	config : {
		fullscreen : true,
		layout : 'card',
		items : [{
				xtype : 'BareTitre'
				
			}, {
				xtype : 'TabBar'
			}
		]
	}
});

Ext.define('wlm.view.TabBar', {
	extend : 'Ext.TabPanel',
	alias : ['widget.TabBar'],
	config : {
		fullscreen : true,
		tabBar : {
			docked : 'bottom',
			layout : {
				pack : 'center'
			}
		},
		defaults : {
			scrollable : true
		},
		items : [{
				xtype : 'Articles'
			}, {
				xtype : 'Interviews'
			}, {
				xtype : 'Infos'
			}
		]
	}
});

/**
 * @author : Renaud Mouren
 */

/* controlleur de l'Application */

Ext.define('wlm.controller.main', {
	extend : 'Ext.app.Controller',
	models : ['Question', 'Article', 'Interview'],
	stores : ['Articles', 'Interviews'],
	views : ['Screen', 'BareTitre', 'TabBar', 'Articles', 'Interviews', 'Infos', 'panels.ListArticles', 'panels.DetailArticle', 'panels.ListInterviews', 'panels.DetailInterview'],
	
	init : function () {
		this.control({
			'ListArticles' : {
				select : this.choixArticle
			},
			'ListInterviews' : {
				select : this.choixInterview
			},
			'BareTitre .button' : {
				tap : this.buttonTap
			}
		});
	},
	launch : function () {
		this.getView("Screen").create();
	},
	/**
	Methode lancé quand on "tape" sur un article .
	 */
	choixArticle : function (vue, record) {
		// retrouve le paneau "articles" puis le paneau de détail
		var listeArticles = vue.up('Articles');
		var DetailArticle = listeArticles.down('DetailArticle');
		
		// envoi a la vue de détail les données de la case choisie dans la liste
		DetailArticle.setData(record.data);
		
		// Active la vue de détail à la place de la liste
		listeArticles.setActiveItem(1);
		
		this.showDetail(vue, record);
		
	},
	/**
	Methode lancé quand on "tape" sur une interview .
	 */
	choixInterview : function (vue, record) {
		
		// retrouve le paneau "interviews" puis le paneau de détail
		var listeInterviews = vue.up('Interviews');
		var DetailInterview = listeInterviews.down('DetailInterview');
		
		// envoi a la vue de détail les données de la case choisie dans la liste
		DetailInterview.setData(record.data);
		
		// Active la vue de détail à la place de la liste
		listeInterviews.setActiveItem(1);
		
		// Activation du bouton retour
		this.showDetail(vue, record);
		
	},
	showDetail : function (vue, record) {
		var bt = vue.up('Screen').down('button[ui=back]');
		bt.setHidden(false);
		bt.up('Screen').down('BareTitre').setTitle(record.data['titre']);
		
	},
	buttonTap : function (vue, record) {
		var bt = vue.up('Screen').down('button[ui=back]');
		bt.setHidden(true);
		
		bt.up('Screen').down('BareTitre').setTitle('We Love Music');
		
		bt.up('Screen').down('Articles').setActiveItem(0);
		bt.up('Screen').down('Interviews').setActiveItem(0);
		
	}
});

Ext.application({
	name : 'wlm',
	appFolder : 'app',
	//autoCreateViewport : true,
	controllers : 'main'
});
