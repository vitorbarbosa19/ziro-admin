const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const development = process.env.npm_lifecycle_event === 'dev'

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							'@babel/transform-runtime',
							'@babel/plugin-proposal-class-properties',
							'@babel/plugin-proposal-object-rest-spread'
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'raw-loader']
			},
			{
				test: /_redirects$/,
				use: 'file-loader?name=_redirects'
			}
		]
	},
	devtool: 'cheap-module-source-map',
	devServer: { historyApiFallback: true },
	optimization: { minimizer: [ new UglifyJsPlugin({ sourceMap: true }) ] },
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.DefinePlugin({
			'process.env': {
				GRAPHQL_ENDPOINT: JSON.stringify( development ? require('./credentials').GRAPHQL_ENDPOINT : process.env.GRAPHQL_ENDPOINT)
			}
		})
	]
}