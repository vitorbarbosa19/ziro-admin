const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const graphqlEndpoint = process.env.npm_lifecycle_event === 'dev' ? require('./credentials').GRAPHQL_ENDPOINT : process.env.GRAPHQL_ENDPOINT

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
			}
		]
	},
	devtool: 'cheap-module-source-map',
	devServer: { historyApiFallback: true },
	optimization: { minimizer: [ new UglifyJsPlugin({ sourceMap: true }) ] },
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new CopyWebpackPlugin([{ from: './_redirects', to: '_redirects', toType: 'file' }]),
		new webpack.DefinePlugin({ 'process.env': { GRAPHQL_ENDPOINT: JSON.stringify(graphqlEndpoint) } })
	]
}