module.exports = {
	npm: {
		enabled: true
	},
	paths:{
		watched: ['server','app']
	},
	files: {
		javascripts: {
			joinTo: {
				'vendor.js': /^(app\/vendor)|(node_modules)/,
				'main.js': /^app\/(?!vendor)/,
			}
		},
		stylesheets: {		
			joinTo: {
				'style/app.css': /^app/,
				'css/vendor.css': /^(vendor|node_modules)/
			}
		},
		templates: {
			joinTo: 'main.js'
		}
	},
	server: {
		command: 'http-server public'
	},
	watcher: {
		usePolling: true
	},
	plugins: {
		less: {
			cssModules: true
		},
		assetsmanager: {
			copyTo: {
				'server': ['server/*'] 
			}
		}
	}
}