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
				'style/vendor.css': /^(vendor|node_modules|bower_components)/
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
			cssModules: false
		},
		assetsmanager: {
			copyTo: {
				 // Manualy add font-awesome fonts
				'fonts' : ['bower_components/font-awesome/fonts/*']
			}
		}
	}
}