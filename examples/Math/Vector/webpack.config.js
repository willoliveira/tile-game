const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
	entry: './src/index.ts',
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 9000,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [ ]
};

// TODO: Melhorar isso jaja
// if (process.env.NODE_ENV === 'production') {
// 	webpackConfig.plugins.push(
// 		new UglifyJsPlugin()
// 	)
// } else
if (process.env.NODE_ENV === 'development') {
	webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;