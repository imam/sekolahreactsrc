const webpack = require('webpack')

const config = {
	watch: true,
	watchOptions: {
		ignored: [
			/node_modules/,
			/dist/
		]
	},
	entry: {
		apaitureact2: './src/apa-itu-react-2.jsx'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: __dirname + '/src',
				loader: 'babel-loader'
			}
		]
	}
}

module.exports = config