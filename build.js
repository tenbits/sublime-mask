/* 
 * 		$ npm install atma -g
 * 		$ atma
\*/

module.exports = {
	'watch': {
		files: 'source/panel/**',
		config: [ '#[zip]' ]
	},

	zip: {
		action: 'custom',
		script: {
			process: function(){
				var AdmZip = require('adm-zip'),
					zip = new AdmZip
					;
				
				zip.addLocalFile('info.plist');

				addFolder('Snippets/');
				addFolder('Syntaxes/');

				function addFolder(name) {
					zip.addLocalFolder(new io.Directory(name + '/').uri.toLocalDir(), name);
				}
				
				zip.writeZip('lib/Mask.sublime-package');
			}
		}
	}
};