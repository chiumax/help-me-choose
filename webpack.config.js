const path = require('path');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.jsx$/,
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		contentBase: __dirname
	}
};
/**
module.exports = env => {
	return {
		entry: './src/app.jsx',
		output: {
			path: __dirname,
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.jsx$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
		devtool:
			env === 'production'
				? 'source-map'
				: 'cheap-module-eval-source-map',
		devServer: {
			contentBase: __dirname
		}
	};
};
**/
