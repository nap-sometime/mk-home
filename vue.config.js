const path = require('path');
const { readFileSync } = require('fs');
const { name: npm_package_name } = require('./package.json');

process.env.VUE_APP_NAME = npm_package_name;

module.exports = {
	lintOnSave: false,
	filenameHashing: false,
	productionSourceMap: false,
	configureWebpack: {
		output: {
			path: path.resolve(__dirname, 'dist'),
			chunkFilename: 'js/[name].bundle.js',
		},
		externals: ['vue', 'vue-router', 'js-cookie', 'vue-meta', /^@mk\/.+/],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'~': path.resolve(__dirname, 'src'),
			},
		},
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			disableHostCheck: true,
			sockPort: 8002,
			sockHost: 'localhost',
			port: 8002,
			https: {
				cert: readFileSync(path.join(__dirname, '../cert/cert.pem')),
				key: readFileSync(path.join(__dirname, '../cert/key.pem')),
			},
		},
	},
};
