const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
						plugins: ['@babel/transform-runtime', '@babel/plugin-proposal-class-properties']
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
	plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ],
	devtool: 'cheap-module-source-map',
	devServer: { historyApiFallback: true },
	optimization: { minimizer: [ new UglifyJsPlugin({ sourceMap: true }) ] }
}